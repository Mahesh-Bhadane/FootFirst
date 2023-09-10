import { Heading } from "@/components/ui/heading";
import { db } from "@/db/db";
import { products } from "@/db/schema";
import { ContentWrapper } from "@/components/molecules/Content-wrapper";
import { ProductCard } from "@/components/molecules/product-card";

export default async function Products() {
  const productsList = await db
    .select({
      product: products
    })
    .from(products);

  return (
    <div>
      <ContentWrapper>
        <div className="flex flex-col items-center justify-center gap-2 text-center mb-12 pt-2">
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
      </ContentWrapper>
    </div>
  );
}
