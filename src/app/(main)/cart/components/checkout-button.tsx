"use client";

import { Button } from "@/components/ui/button";
import { routes } from "@/lib/routes";
import { Loader2, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const CheckoutButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  return (
    <Button
      className="ml-auto w-full flex items-center gap-2 justify-center"
      onClick={() => {
        setIsLoading(true);
        router.push(routes.checkout);
        setIsLoading(false);
      }}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader2 size={16} className="animate-spin" />
      ) : (
        <Lock size={16} />
      )}
      <p>Checkout</p>
    </Button>
  );
};
