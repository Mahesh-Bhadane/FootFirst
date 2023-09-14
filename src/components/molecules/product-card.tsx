import { Text } from "../ui/text";
import { routes } from "@/lib/routes";
import Link from "next/link";
import { currencyFormatter } from "@/lib/currency";
import { ProductImage } from "./Product-image";
import { Product } from "@/db/schema";
import { Button } from "../ui/button";
import { ProductForm } from "./Product-form";
import { addToCart } from "../server-actions/add-to-cart";

export type ProductAndStore = {
  product: Omit<Product, "images"> & {
    images: { id: string; url: string; alt: string }[];
  };
};

export const ProductCard = (props: {
  storeAndProduct: ProductAndStore;
  hideButtonActions?: boolean;
}) => {
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
          {props?.storeAndProduct?.product?.name?.charAt(0)?.toUpperCase()}
          {props?.storeAndProduct?.product?.name?.slice(1).toLowerCase()}
        </Text>
        <Text>
          {currencyFormatter(Number(props.storeAndProduct.product.price))}
        </Text>
      </Link>
      {props.hideButtonActions && (
        <div className="flex flex-col sm:flex-row gap-2 items-center justify-between mt-4 mb-8">
          <Link
            href={`${routes.products}/${[props.storeAndProduct.product.id]}`}
            className="w-full"
          >
            <Button variant="outline" size="sm" className="flex gap-2 w-full">
              <span>Quick View</span>
            </Button>
          </Link>
          <ProductForm
            addToCartAction={addToCart}
            disableQuantitySelector={true}
            availableInventory={props.storeAndProduct.product.inventory}
            productId={props.storeAndProduct.product.id}
            productName={props.storeAndProduct.product.name}
            buttonSize="sm"
          />
        </div>
      )}
    </div>
  );
};
