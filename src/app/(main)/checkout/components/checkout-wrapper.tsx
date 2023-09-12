"use client";

import { useMemo } from "react";
import CheckoutForm from "./checkout-form";
import { ChevronRight } from "lucide-react";
import { StarSVG } from "@/components/icons/star";
import { routes } from "@/lib/routes";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { OrderSummaryAccordion } from "./order-summary-accordion";
import { CheckoutItem } from "@/lib/types";
import { currencyFormatter } from "@/lib/currency";
import { FeatureIcons } from "@/components/molecules/feature-icons";

export default function CheckoutWrapper(props: {
  detailsOfProductsInCart: CheckoutItem[];
  cartLineItems: React.ReactNode;
  user: any;
}) {
  const orderTotal = useMemo(() => {
    return currencyFormatter(
      props.detailsOfProductsInCart!.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
      )
    );
  }, [props.detailsOfProductsInCart]);
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
                <OrderTotalRow total={orderTotal} />
              </div>
              <OrderSummaryAccordion
                title="Order Summary"
                className="lg:hidden"
              >
                {props.cartLineItems}
                <OrderTotalRow total={orderTotal} />
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

const TrustBadges = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-6">
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="text-lg font-semibold text-center">
          Hundreds of happy customers worldwide
        </p>
        <div className="flex items-center justify-center gap-1">
          {Array.from(Array(5)).map((_, i) => (
            <div className="max-w-2" key={i}>
              <StarSVG />
            </div>
          ))}
        </div>
      </div>
      <FeatureIcons />
    </div>
  );
};

const OrderTotalRow = (props: { total: string }) => {
  return (
    <div className="flex items-center justify-between p-4 py-2 border-y border-slate-200">
      <Heading size="h4">Total</Heading>
      <p className="text-lg font-semibold">{props.total}</p>
    </div>
  );
};