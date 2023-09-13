/* eslint-disable no-unused-vars */
import { Heading } from "@/components/ui/heading";
import { db } from "@/db/db";
import { products } from "@/db/schema";
import { ContentWrapper } from "@/components/molecules/Content-wrapper";
import {
  ProductAndStore,
  ProductCard
} from "@/components/molecules/product-card";
import { CollectionPagePagination } from "./components/collection-page-pagination";

const PRODUCTS_PER_PAGE = 8;

export default async function Products(context: {
  params: { slug: string };
  searchParams: { page: string; seller: string };
}) {
  const productsList = (await db
    .select({
      product: products
    })
    .from(products)
    .limit(PRODUCTS_PER_PAGE)
    .offset(
      !isNaN(Number(context.searchParams.page))
        ? (Number(context.searchParams.page) - 1) * PRODUCTS_PER_PAGE
        : 0
    )) as ProductAndStore[];

  return (
    <div>
      <ContentWrapper>
        <div className="flex flex-col items-center justify-center gap-2 text-center mb-12">
          <Heading size="h1">Online shopping made easy.</Heading>
          <div className="text-slate-600">
            <Heading size="h2">
              Shop hundreds of products from sellers worldwide.
            </Heading>
          </div>
        </div>

        <Heading size="h3">Products</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-auto mt-4">
          {productsList.map((item) => (
            <ProductCard
              key={item.product.id}
              //@ts-ignore
              storeAndProduct={item}
              hideButtonActions={true}
            />
          ))}
        </div>
        <CollectionPagePagination
          productsPerPage={PRODUCTS_PER_PAGE}
          sellerParams={context.searchParams.seller as string}
        />
      </ContentWrapper>
    </div>
  );
}
