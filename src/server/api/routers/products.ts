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

  // getByCategory: publicProcedure
  //   .input(z.object({ category: z.string() }))
  //   .query(async ({ ctx, input }) => {
  //     const rows = await ctx.db.select().from(products);

  //
  //     const filtered = rows.filter((row) => {
  //       const categories: string[] = JSON.parse(row.category || "[]");
  //       return categories.includes(input.category);
  //     });

  //     return filtered.map((row) => ({
  //       ...row,
  //       category: JSON.parse(row.category || "[]"),
  //       downloads: JSON.parse(row.downloads || "[]"),
  //       specifications: JSON.parse(row.specifications || "[]"),
  //     }));
  //   }),
});
