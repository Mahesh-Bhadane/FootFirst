"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/lib/validation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form";
import { addOrder } from "@/components/server-actions/add-order";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { routes } from "@/lib/routes";
import { FormData } from "@/lib/types";
import { ContactInfoForm } from "./contactInfoForm";

export default function CheckoutForm({ user }: any) {
  const emailId = user?.emailAddresses[0]?.emailAddress;

  const initialFormData: FormData = {
    email: emailId || "",
    name: "",
    address: "",
    city: "",
    state: "",
    postal_code: "",
    country: "",
    cashDelivery: true
  };

  const form = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: initialFormData
  });

  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    setIsLoading(true);
    const createdAtTimestamp = Math.floor(Date.now() / 1000);
    const orderData = {
      ...data,
      createdAt: createdAtTimestamp
    };

    try {
      await addOrder(orderData);
      router.replace(routes.orderConfirmation);

      form.reset();
      toast({
        title: "Payment succeeded!"
      });
    } catch (error) {
      console.error("Error adding order:", error);
    } finally {
      setIsLoading(false);
      router.refresh();
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <ContactInfoForm form={form} />
        <div className="bg-secondary border-border border rounded-md md:p-6 p-6 md:pb-7 pb-5">
          <Heading size="h4">Payment</Heading>
          <FormField
            control={form.control}
            name="cashDelivery"
            render={({ field }) => (
              <>
                <FormItem className="items-end flex space-x-2 gap-1.5 pt-4">
                  <FormControl>
                    <Input
                      id="default-checkbox"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                    />
                  </FormControl>
                  <FormLabel>Cash On Delivery</FormLabel>
                </FormItem>
              </>
            )}
          />
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          id="submit"
          className="w-fit"
        >
          <div className="flex items-center justify-center gap-2">
            {!!isLoading && <Loader2 size={18} className="animate-spin" />}
            <p>Pay Now</p>
          </div>
        </Button>
      </form>
    </Form>
  );
}
