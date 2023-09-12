/* eslint-disable no-unused-vars */
"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { routes } from "@/lib/routes";
import { Loader2, Lock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const CheckoutButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  return (
    <Link href={routes.checkout}>
      <Button
        className="flex items-center w-full gap-2 justify-center"
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
    </Link>
  );
};
