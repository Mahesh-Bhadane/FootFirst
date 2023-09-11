import { InferModel } from "drizzle-orm";
import {
  boolean,
  decimal,
  int,
  json,
  mysqlTable,
  serial,
  text
} from "drizzle-orm/mysql-core";

export const products = mysqlTable("products", {
  id: serial("id").primaryKey(),
  name: text("name"),
  price: decimal("price", { precision: 10, scale: 2 }).default("0"),
  description: text("description"),
  inventory: decimal("inventory").default("0"),
  images: json("images")
});
export type Product = InferModel<typeof products>;

export const carts = mysqlTable("carts", {
  id: serial("id").primaryKey(),
  items: json("items"),
  isClosed: boolean("is_closed").default(false)
});
export type Cart = InferModel<typeof carts>;

export const orders = mysqlTable("orders", {
  id: serial("id").primaryKey(),
  name: text("name"),
  email: text("email"),
  address: text("address"),
  city: text("city"),
  state: text("state"),
  postal_code: text("postal_code"),
  country: text("country"),
  createdAt: int("created_at")
});

export type Order = InferModel<typeof orders>;
