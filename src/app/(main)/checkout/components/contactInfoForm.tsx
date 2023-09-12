import React from "react";
import {
  FormField,
  FormControl,
  FormItem,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Heading } from "@/components/ui/heading";
import { FormData } from "@/lib/types";
import { UseFormReturn } from "react-hook-form";

interface ContactInfoFormProps {
  form: UseFormReturn<FormData>;
}

export const ContactInfoForm = ({ form }: ContactInfoFormProps) => {
  return (
    <div className="flex flex-col gap-3 bg-secondary border-border border rounded-md md:p-6 p-4 md:pb-7 pb-5">
      <Heading size="h4">Contact Info</Heading>
      <FormField
        control={form.control}
        name="email"
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
        name="name"
        render={({ field }) => (
          <>
            <FormItem className="relative">
              <FormControl>
                <Input
                  className="rounded-xl pl-6 py-6"
                  placeholder="Name"
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
        name="postal_code"
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
  );
};
