import { z } from "zod";
import type { Specification, Download } from "~/app/lib/product";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { products } from "~/server/db/schema";

export const productRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const rows = await ctx.db.select().from(products);

    return rows.map((row) => ({
      ...row,
      category: JSON.parse(row.category || "[]") as string[],
      downloads: JSON.parse(row.downloads || "[]") as Download[],
      specifications: JSON.parse(row.specifications || "[]") as Specification[],
    }));
  }),
});
