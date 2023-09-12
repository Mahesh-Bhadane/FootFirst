import { Heading } from "@/components/ui/heading";
import { db } from "@/db/db";
import { orders } from "@/db/schema";
import { eq } from "drizzle-orm";
import { Check, PackageCheck } from "lucide-react";
import { cookies } from "next/headers";
import React from "react";

const OrderConfirmation = async () => {
  const cookieStore = cookies();
  const orderId = cookieStore.get("orderId")?.value;
  const orderList = await db
    .select({
      order: orders
    })
    .from(orders)
    .where(eq(orders.id, Number(orderId)));

  return (
    <div className="mt-8">
      <div>
        <Heading size="h2">
          <div className="flex md:flex-row flex-col items-start md:items-center justify-start gap-4 md:gap-2">
            <div className="border-2 border-green-600 text-green-600 bg-transparent rounded-full h-10 w-10 flex items-center justify-center">
              <Check className="text-green-600" size={26} />
            </div>
            <span>
              Thanks for your order,{" "}
              <span className="capitalize">
                {orderList[0].order?.name?.split(" ")[0]}
              </span>
              !
            </span>
          </div>
        </Heading>
        <p className="text-muted-foreground mt-4">
          Your payment confirmation ID is #{orderList[0].order?.id}
        </p>
        <div className="flex flex-col gap-4 mt-8">
          <div className="p-6 bg-secondary border border-border rounded-md">
            <Heading size="h3">What&apos;s next?</Heading>
            <p>
              Our warehouse team is busy preparing your order. You&apos;ll
              receive an email once your order ships.
            </p>
          </div>
          <div className="lg:grid grid-cols-2 gap-4 flex flex-col">
            <div className="p-6 bg-secondary border border-border rounded-md sm:grid grid-cols-3 flex flex-col gap-4">
              <div className="sm:col-span-2">
                <div className="mb-2">
                  <Heading size="h4">Shipping Address</Heading>
                </div>
                <p>{orderList[0].order?.name}</p>
                <p className="mb-3">{orderList[0].order?.email}</p>
                <p>{orderList[0].order?.address}</p>
                <p>
                  {orderList[0].order?.city}, {orderList[0].order?.postal_code}
                </p>
                <p>
                  {orderList[0].order?.state}, {orderList[0].order?.country}
                </p>
              </div>
              <div>
                <div className="mb-2 flex flex-col items-center justify-center">
                  <Heading size="h4">Seller Details</Heading>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p>{"Mahesh Enterprises"}</p>
                  <div className="border-2 border-green-600 text-green-600 bg-transparent rounded-full h-10 w-10 flex items-center justify-center">
                    <PackageCheck className="text-green-600" size={26} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
