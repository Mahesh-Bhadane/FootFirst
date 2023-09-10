import { routes } from "@/lib/routes";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { getCart } from "../server-actions/get-cart-details";
import { cookies } from "next/headers";

export const ShoppingCartHeader = async () => {
  const cartId = cookies().get("cartId")?.value;

  const { cartItems } = await getCart(Number(cartId));

  const numberOfCartItems =
    !!cartItems &&
    cartItems.reduce((acc, item) => (acc += Number(item.qty)), 0);

  return (
    <Link
      href={routes.cart}
      className="flex items-center justify-center relative -left-2"
    >
      <ShoppingCart size={26} />
      {numberOfCartItems && numberOfCartItems > 0 ? (
        <span className="bg-primary rounded-full w-6 h-6 text-white flex items-center justify-center text-sm absolute -top-2 -right-3">
          {numberOfCartItems}
        </span>
      ) : null}
    </Link>
  );
};
