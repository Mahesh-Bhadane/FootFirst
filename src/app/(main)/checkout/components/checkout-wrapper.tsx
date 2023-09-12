"use client";

import { useMemo } from "react";
import CheckoutForm from "./checkout-form";
import { ChevronRight } from "lucide-react";
import { routes } from "@/lib/routes";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { OrderSummaryAccordion } from "./order-summary-accordion";
import { CheckoutItem } from "@/lib/types";
import { currencyFormatter } from "@/lib/currency";
import { OrderTotalRow } from "./orderTotalRow";
import { TrustBadges } from "./trustBadges";

export default function CheckoutWrapper(props: {
  detailsOfProductsInCart: CheckoutItem[];
  cartLineItems: React.ReactNode;
  user: any;
}) {
  const subtotal = useMemo(() => {
    return currencyFormatter(
      props.detailsOfProductsInCart!.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
      )
    );
  }, [props.detailsOfProductsInCart]);

  const discount = useMemo(() => {
    const subtotalValue = parseFloat(subtotal.replace(/[^0-9.-]+/g, ""));
    const discountValue = subtotalValue * 0.1;
    return currencyFormatter(discountValue);
  }, [subtotal]);

  const orderTotal = useMemo(() => {
    const subtotalValue = parseFloat(subtotal.replace(/[^0-9.-]+/g, ""));
    const discountValue = parseFloat(discount.replace(/[^0-9.-]+/g, ""));
    const total = subtotalValue - discountValue;
    return currencyFormatter(total);
  }, [subtotal, discount]);

  return (
    <div>
      <Heading size="h2">Checkout</Heading>
      <div className="text-muted-foreground flex items-center justify-start gap-1">
        <Link href={routes.cart}>
          <Button variant="link" className="p-0 text-muted-foreground">
            Cart
          </Button>
        </Link>
        <ChevronRight size={16} />
        <Button
          variant="link"
          className="p-0 text-muted-foreground hover:no-underline hover:cursor-auto"
        >
          Checkout
        </Button>
      </div>
      <div>
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-4 flex flex-col-reverse gap-6">
          <div className="col-span-7">
            <CheckoutForm user={props.user} />
          </div>
          <div className="col-span-5">
            <div className="bg-secondary rounded-lg lg:p-6 h-fit border-border border p-1 px-4 lg:mb-8">
              <div className="hidden lg:flex flex-col gap-2">
                <Heading size="h4">Order Summary</Heading>
                {props.cartLineItems}
                <OrderTotalRow
                  subtotal={subtotal}
                  discount={discount}
                  total={orderTotal}
                />
              </div>
              <OrderSummaryAccordion
                title="Order Summary"
                className="lg:hidden"
              >
                {props.cartLineItems}
                <OrderTotalRow
                  subtotal={subtotal}
                  discount={discount}
                  total={orderTotal}
                />
              </OrderSummaryAccordion>
            </div>
            <div className="lg:hidden bg-secondary border border-border p-5 pt-8 mt-8 rounded-md">
              <TrustBadges />
            </div>
            <div className="hidden lg:block">
              <TrustBadges />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
