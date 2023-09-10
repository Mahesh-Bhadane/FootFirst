"use server";

import { db } from "@/db/db";
import { carts, products } from "@/db/schema";
import { CartItem, CartLineItemDetails } from "@/lib/types";
import { eq, inArray } from "drizzle-orm";

export async function getCart(cartId: number) {
  const dbCartItemsObj = isNaN(Number(cartId))
    ? []
    : await db
        .select({
          id: carts.id,
          items: carts.items
        })
        .from(carts)
        .where(eq(carts.id, Number(cartId)));
  const cartItems = dbCartItemsObj.length
    ? (JSON.parse(dbCartItemsObj[0].items as string) as CartItem[])
    : [];

  const cartItemDetails = !!cartItems
    ? await getCartItemDetails(cartId ? Number(cartId) : null, cartItems)
    : [];

  return {
    cartItems,
    cartItemDetails
  };
}

async function getCartItemDetails(
  cartId: number | null,
  cartItems: CartItem[]
) {
  if (!cartId) return [];
  const productIds = cartItems.map((item) => Number(item.id));
  if (!productIds.length) return [];
  const vals = await db
    .select({
      id: products.id,
      name: products.name,
      price: products.price,
      inventory: products.inventory,
      images: products.images
    })
    .from(products)
    .where(inArray(products.id, productIds));
  return vals as CartLineItemDetails[];
}
