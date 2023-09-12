"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/db/db";
import { orders } from "@/db/schema";
import { cookies } from "next/headers";

export async function addOrder(newOrderItems: any) {
  const cookieStore = cookies();
  const cartId = cookieStore.get("cartId")?.value;
  const newOrderData = {
    name: newOrderItems.name,
    email: newOrderItems.email,
    address: newOrderItems.address,
    city: newOrderItems.city,
    state: newOrderItems.state,
    postal_code: newOrderItems.postal_code,
    country: newOrderItems.country,
    cashDelivery: newOrderItems.cashDelivery,
    createdAt: newOrderItems.createdAt,
    cart_id: Number(cartId)
  };

  const newCart = await db.insert(orders).values(newOrderData);
  cookieStore.set("cartId", String(newCart.insertId));
  revalidatePath("/");
  return;
}
