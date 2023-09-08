import { Text } from "../ui/text";
import { routes } from "@/lib/routes";
import Link from "next/link";
import { currencyFormatter } from "@/lib/currency";
import { ProductImage } from "./Product-image";
import { Product } from "@/db/schema";

export type ProductAndStore = {
  product: Omit<Product, "images"> & {
    images: { id: string; url: string; alt: string }[];
  };
};

export const ProductCard = (props: { storeAndProduct: ProductAndStore }) => {
  const productPageLink = `${routes.products}/${props.storeAndProduct.product.id}`;
  return (
    <div key={props.storeAndProduct.product.id} data-testid="product-card">
      <Link href={productPageLink}>
        <ProductImage
          src={props.storeAndProduct.product.images}
          alt={"product"}
          height="h-48"
          width="w-full"
        />
      </Link>
      <Link href={productPageLink}>
        <Text className="line-clamp-1 w-full mt-2">
          {props.storeAndProduct.product.name}
        </Text>
        <Text>
          {currencyFormatter(Number(props.storeAndProduct.product.price))}
        </Text>
      </Link>
    </div>
  );
};
