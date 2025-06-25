// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  sqliteTableCreator,
  primaryKey,
  text,
  integer,
  foreignKey,
} from "drizzle-orm/sqlite-core";

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
  category: d.text("category"), // JSON.stringify(["Home", "DC"])
  downloads: d.text("downloads"), // JSON.stringify([...])
  specifications: d.text("specifications"), // JSON.stringify([...])
}));
