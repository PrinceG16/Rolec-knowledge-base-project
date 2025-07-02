import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { products } from "~/server/db/schema";
import { safeParseJSON } from "~/app/_lib/randomExtras";
import {
  SpecificationsSchema,
  DownloadsSchema,
  CategorySchema,
} from "~/app/_lib/randomExtras";

export const productRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const rows = await ctx.db.select().from(products);

    return rows.map((row) => ({
      ...row,
      category: safeParseJSON(row.category, CategorySchema, []),
      downloads: safeParseJSON(row.downloads, DownloadsSchema, []),
      specifications: safeParseJSON(
        row.specifications,
        SpecificationsSchema,
        [],
      ),
    }));
  }),
});
