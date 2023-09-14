import { cookies } from "next/headers";
import { db } from "@/db/db";
import { products } from "@/db/schema";
import { CheckoutItem } from "@/lib/types";
import { getCart } from "@/components/server-actions/get-cart-details";
import CheckoutWrapper from "@/app/(main)/checkout/components/checkout-wrapper";
import { CartLineItems } from "@/components/molecules/CartLineItems";
import { currentUser } from "@clerk/nextjs";

export default async function Checkout() {
  const user = await currentUser();

  const cartId = cookies().get("cartId")?.value;
  const { cartItems, cartItemDetails } = await getCart(Number(cartId));

  const storeProducts = await db
    .select({
      id: products.id,
      price: products.price
    })
    .from(products);

  const detailsOfProductsInCart = cartItems
    .map((item) => {
      const product = storeProducts.find((p) => p.id === item.id);
      const priceAsNumber = Number(product?.price);
      if (!product || isNaN(priceAsNumber)) return undefined;
      return {
        id: item.id,
        price: priceAsNumber,
        qty: item.qty
      };
    })
    .filter(Boolean) as CheckoutItem[];

  if (!storeProducts.length || !detailsOfProductsInCart.length)
    throw new Error("Store not found");

  return (
    <CheckoutWrapper
      detailsOfProductsInCart={detailsOfProductsInCart}
      user={user}
      cartLineItems={
        <CartLineItems
          variant="checkout"
          cartItems={cartItems}
          products={cartItemDetails ?? []}
        />
      }
    />
  );
}
