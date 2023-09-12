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
  FormLabel,
  FormMessage
} from "@/components/ui/form";

interface FormData {
  email: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  cashDelivery: boolean;
}

export default function CheckoutForm({ user }: any) {
  const emailId = user?.emailAddresses[0]?.emailAddress;

  const form = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    console.log(data);
    setIsLoading(false);
    setMessage("Payment succeeded!");
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        {message && (
          <div
            id="payment-message"
            className="bg-green-100 border border-green-600 text-green-800 rounded-md p-2 flex items-center justify-start gap-2"
          >
            <p>{message}</p>
          </div>
        )}

        <div className="flex flex-col gap-3 bg-secondary border-border border rounded-md md:p-6 p-4 md:pb-7 pb-5">
          <Heading size="h4">Contact Info</Heading>
          <FormField
            control={form.control}
            name="email"
            defaultValue={emailId || ""}
            render={({ field }) => (
              <>
                <FormItem className="relative">
                  <FormControl>
                    <Input
                      className="rounded-xl pl-6 py-6"
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
                <FormMessage />
              </>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <>
                <FormItem className="relative">
                  <FormControl>
                    <Input
                      className="rounded-xl pl-6 py-6"
                      placeholder="Address Line"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
                <FormMessage />
              </>
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <>
                <FormItem className="relative">
                  <FormControl>
                    <Input
                      className="rounded-xl pl-6 py-6"
                      placeholder="City"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
                <FormMessage />
              </>
            )}
          />

          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <>
                <FormItem className="relative">
                  <FormControl>
                    <Input
                      className="rounded-xl pl-6 py-6"
                      placeholder="State"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
                <FormMessage />
              </>
            )}
          />

          <FormField
            control={form.control}
            name="postalCode"
            render={({ field }) => (
              <>
                <FormItem className="relative">
                  <FormControl>
                    <Input
                      className="rounded-xl pl-6 py-6"
                      placeholder="Postal Code"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
                <FormMessage />
              </>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <>
                <FormItem className="relative">
                  <FormControl>
                    <Input
                      className="rounded-xl pl-6 py-6"
                      placeholder="Country"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
                <FormMessage />
              </>
            )}
          />
        </div>

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
                <FormMessage />
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
