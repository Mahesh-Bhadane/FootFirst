/* eslint-disable no-unused-vars */
"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { routes } from "@/lib/routes";
import { Loader2, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const CheckoutButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  return (
    <Button
      className="flex items-center gap-2 justify-center"
      onClick={() => {}}
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
