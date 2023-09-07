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
  paymentIntentId: text("payment_intent_id"),
  clientSecret: text("client_secret"),
  isClosed: boolean("is_closed").default(false)
});
export type Cart = InferModel<typeof carts>;

export const payments = mysqlTable("payments", {
  id: serial("id").primaryKey(),
  stripeAccountId: text("stripe_account_id"),
  stripeAccountCreatedAt: int("stripe_account_created_at"),
  stripeAccountExpiresAt: int("stripe_account_expires_at"),
  details_submitted: boolean("details_submitted").default(false)
});

export type Payment = InferModel<typeof payments>;
