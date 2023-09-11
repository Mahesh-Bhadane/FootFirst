import React, { useState } from "react";
// import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Loader2 } from "lucide-react";
import { FormEvent } from "react";

export default function CheckoutForm() {
  // const { storeSlug } = useParams();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission logic here
    // For example, you can send the email and other data to your server

    // Assuming a successful submission
    setTimeout(() => {
      setMessage("Payment succeeded!");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className="flex flex-col gap-6"
    >
      {/* Show any error or success messages */}
      {message && (
        <div
          id="payment-message"
          className="bg-green-100 border border-green-600 text-green-800 rounded-md p-2 flex items-center justify-start gap-2"
        >
          <p>{message}</p>
        </div>
      )}
      <div className="flex flex-col gap-2 bg-secondary border-border border rounded-md md:p-6 p-4 md:pb-7 pb-5">
        <Heading size="h4">Contact Info</Heading>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <Button disabled={isLoading} id="submit" className="w-fit">
        <div className="flex items-center justify-center gap-2">
          {!!isLoading && <Loader2 size={18} className="animate-spin" />}
          <p>Pay Now</p>
        </div>
      </Button>
    </form>
  );
}
