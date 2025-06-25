// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { index, sqliteTableCreator, primaryKey } from "drizzle-orm/sqlite-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = sqliteTableCreator(
  (name) => `testdeployment_${name}`,
);

export const posts = createTable(
  "post",
  (d) => ({
    id: d.integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
    name: d.text({ length: 256 }),
    createdAt: d
      .integer({ mode: "timestamp" })
      .default(sql`(unixepoch())`)
      .notNull(),
    updatedAt: d.integer({ mode: "timestamp" }).$onUpdate(() => new Date()),
  }),
  (t) => [index("name_idx").on(t.name)],
);

export const products = createTable("products", (d) => ({
  id: d.integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  title: d.text("title").notNull(),
  slug: d.text("slug").notNull(),
  description: d.text("description"),
  imageUrl: d.text("image_url"),
}));

export const categories = createTable("categories", (d) => ({
  id: d.integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: d.text("name").notNull(),
}));

export const productCategories = createTable(
  "product_categories",
  (d) => ({
    productId: d.integer("product_id", { mode: "number" }).notNull(),
    categoryId: d.integer("category_id", { mode: "number" }).notNull(),
  }),
  (t) => ({
    pk: primaryKey({ columns: [t.productId, t.categoryId] }),
  }),
);

export const downloads = createTable("downloads", (d) => ({
  id: d.integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  productId: d.integer("product_id", { mode: "number" }).notNull(),
  label: d.text("label").notNull(),
  iconUrl: d.text("icon_url"),
}));

export const specifications = createTable("specifications", (d) => ({
  id: d.integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  productId: d.integer("product_id", { mode: "number" }).notNull(),
  iconUrl: d.text("icon_url"),
  label: d.text("label").notNull(),
  value: d.text("value").notNull(),
}));
