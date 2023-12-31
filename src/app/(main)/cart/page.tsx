import { getCart } from "@/components/server-actions/get-cart-details";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { currencyFormatter } from "@/lib/currency";
import { routes } from "@/lib/routes";
import { ChevronRight } from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";
import { CheckoutButton } from "@/app/(main)/cart/components/checkout-button";
import { CartLineItems } from "@/components/molecules/CartLineItems";

export default async function Cart() {
  const cartId = cookies().get("cartId")?.value;
  const { cartItems, cartItemDetails } = await getCart(Number(cartId));

  if (isNaN(Number(cartId)) || !cartItems.length) {
    return (
      <div className="mt-4 gap-4 rounded-md border-2 border-dashed border-gray-200 p-6 text-center h-[200px] flex items-center justify-center flex-col">
        <Heading size="h3">Your cart is empty</Heading>
        <Link href={routes.products}>
          <Button>Start shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <Heading size="h2">Cart</Heading>
        <Link href={routes.products}>
          <Button
            variant="link"
            className="flex items-end justify-center m-0 p-0 text-muted-foreground"
          >
            <p>Continue shopping</p>
            <ChevronRight size={16} />
          </Button>
        </Link>
      </div>
      <div className="lg:grid lg:grid-cols-9 lg:gap-6 flex flex-col-reverse gap-6">
        <div className="col-span-6 flex flex-col gap-8">
          <div className="bg-secondary border border-border p-6 rounded-md">
            <CartLineItems
              variant="cart"
              cartItems={cartItems}
              products={cartItemDetails}
            />
          </div>
        </div>
        <div className="bg-secondary col-span-3 rounded-md border border-border p-6 h-fit flex flex-col gap-4">
          <Heading size="h3">Cart Summary</Heading>
          <p>
            Total Amount:
            {currencyFormatter(
              cartItemDetails.reduce((accum, curr) => {
                const quantityInCart = cartItems.find(
                  (item) => item.id === curr.id
                )?.qty;
                return accum + Number(curr.price) * (quantityInCart ?? 0);
              }, 0)
            )}
          </p>
          <CheckoutButton />
        </div>
      </div>
    </div>
  );
}
