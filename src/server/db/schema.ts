// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sqliteTableCreator } from "drizzle-orm/sqlite-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = sqliteTableCreator((name) => `${name}`);

export const products = createTable("products", (d) => ({
  id: d.integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  title: d.text("title").notNull(),
  slug: d.text("slug").notNull(),
  description: d.text("description"),
  imageUrl: d.text("image_url"),
  category: d.text("category"),
  downloads: d.text("downloads"),
  specifications: d.text("specifications"),
}));

// export const posts = createTable(
//   "post",
//   (d) => ({
//     id: d.integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
//     name: d.text({ length: 256 }),
//     createdById: d
//       .text({ length: 255 })
//       .notNull()
//       .references(() => users.id),
//     createdAt: d
//       .integer({ mode: "timestamp" })
//       .default(sql`(unixepoch())`)
//       .notNull(),
//     updatedAt: d.integer({ mode: "timestamp" }).$onUpdate(() => new Date()),
//   }),
//   (t) => [
//     index("created_by_idx").on(t.createdById),
//     index("name_idx").on(t.name),
//   ],
// );
