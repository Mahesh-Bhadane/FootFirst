import { Heading } from "@/components/ui/heading";
import { db } from "@/db/db";
import { products } from "@/db/schema";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/routes";
import Link from "next/link";
import { DollarSign, Phone, Truck } from "lucide-react";
import { SlideShow } from "@/components/molecules/Slideshow";
import { ContentWrapper } from "@/components/molecules/Content-wrapper";
import { ProductCard } from "@/components/molecules/product-card";
import { FeatureBanner } from "@/components/molecules/Feature-banner";
import { gt } from "drizzle-orm";

export default async function Home() {
  const productsList = await db
    .select({
      product: products
    })
    .from(products)
    .limit(8);

  const popularProducts = await db
    .select({
      product: products
    })
    .from(products)
    .where(gt(products.inventory, "50"))
    .limit(4);

  return (
    <div>
      <SlideShow />
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
        <div className="mt-12 grid place-content-center">
          <Link href={routes.products}>
            <Button variant="default">View All Products</Button>
          </Link>
        </div>
        <div className="bg-green-500 text-white w-full p-12 rounded-md mt-12 flex items-center flex-col gap-2 justify-center text-center">
          <p className="uppercase tracking-wide text-sm font-medium">
            Featured seller
          </p>
          <p className="text-3xl font-bold">Tim&apos;s Terrific Toys</p>
          <p>
            Top seller of the month! Tim&apos;s Toys has been selling toys for
            10 years and is a top rated seller on the platform.
          </p>
          <Link href={routes.cart} className="mt-6">
            <Button variant="secondary">Explore cart</Button>
          </Link>
        </div>
        <section className="pt-10">
          <Heading size="h3">Popular Picks</Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-auto mt-4">
            {popularProducts.map((item) => (
              <ProductCard
                key={item.product.id}
                //@ts-ignore
                storeAndProduct={item}
                hideButtonActions={true}
              />
            ))}
          </div>
        </section>
        <div className="md:grid md:grid-cols-3 gap-4 flex flex-col w-full mt-12">
          <FeatureBanner
            heading="Free Shipping"
            subheading="Free shipping on all orders over $50"
            icon={<Truck size={32} />}
          />
          <FeatureBanner
            heading="24/7 Customer Support"
            subheading="Have a question? Get in touch."
            icon={<Phone size={32} />}
          />
          <FeatureBanner
            heading="Best prices"
            subheading="We offer the best prices on the market."
            icon={<DollarSign size={32} />}
          />
        </div>
      </ContentWrapper>
    </div>
  );
}
