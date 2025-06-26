import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { products } from "~/server/db/schema";

export const productRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const rows = await ctx.db.select().from(products);

    return rows.map((row) => ({
      ...row,
      category: JSON.parse(row.category || "[]"),
      downloads: JSON.parse(row.downloads || "[]"),
      specifications: JSON.parse(row.specifications || "[]"),
    }));
  }),

  getByCategory: publicProcedure
    .input(z.object({ category: z.string() }))
    .query(async ({ ctx, input }) => {
      const rows = await ctx.db.select().from(products);

      // filter based on category (category is stored as JSON string)
      const filtered = rows.filter((row) => {
        const categories: string[] = JSON.parse(row.category || "[]");
        return categories.includes(input.category);
      });

      return filtered.map((row) => ({
        ...row,
        category: JSON.parse(row.category || "[]"),
        downloads: JSON.parse(row.downloads || "[]"),
        specifications: JSON.parse(row.specifications || "[]"),
      }));
    }),
});
