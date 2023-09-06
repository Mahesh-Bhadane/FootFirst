import { routes } from "@/lib/routes";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export const ShoppingCartHeader = async () => {
  return (
    <Link href={routes.cart}>
      <ShoppingCart size={26} />
    </Link>
  );
};
