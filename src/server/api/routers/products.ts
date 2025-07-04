import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { products } from "~/server/db/schema";
import { safeParseJSON } from "~/app/_lib/randomExtras";
import {
  SpecificationsSchema,
  DownloadsSchema,
  CategorySchema,
} from "~/app/_lib/randomExtras";

import { logger } from "~/app/_lib/logger";

export const productRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const start = Date.now();

    const rows = await ctx.db.select().from(products);

    const parsedRows = rows.map((row) => ({
      ...row,
      category: safeParseJSON(row.category, CategorySchema, []),
      downloads: safeParseJSON(row.downloads, DownloadsSchema, []),
      specifications: safeParseJSON(
        row.specifications,
        SpecificationsSchema,
        [],
      ),
    }));

    const duration = Date.now() - start;

    logger.info("Fetched all products", {
      count: parsedRows.length,
      durationMs: duration,
    });

    return parsedRows;
  }),
});
