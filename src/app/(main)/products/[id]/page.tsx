import { Heading } from "@/components/ui/heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Text } from "@/components/ui/text";
import { db } from "@/db/db";
import { products } from "@/db/schema";
import { currencyFormatter } from "@/lib/currency";
import { eq } from "drizzle-orm";
import { FeatureIcons } from "@/components/molecules/feature-icons";
import { ParagraphFormatter } from "@/components/ui/paragraph-formatter";
import { ProductImage } from "@/components/molecules/Product-image";
import { ProductForm } from "@/components/molecules/product-form";
import { addToCart } from "@/components/server-actions/add-to-cart";

export default async function Product({
  params: { id }
}: {
  params: { id: string };
}) {
  try {
    const product = (
      await db
        .select()
        .from(products)
        .where(eq(products.id, Number(id)))
    )[0];

    if (!product) {
      throw new Error("Product not found");
    }

    return (
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center md:items-start justify-start md:grid md:grid-cols-9 gap-8">
          <div className="col-span-4 w-full">
            <ProductImage
              src={product.images}
              alt={"product"}
              height="h-96"
              width="w-full"
            />
          </div>
          <div className="md:col-span-5 w-full">
            <Heading size="h2">{product.name}</Heading>
            <Text className="text-sm mt-2">Sold by : Mahesh </Text>
            <Text className="text-xl my-4">
              {currencyFormatter(Number(product.price))}
            </Text>
            <ProductForm
              addToCartAction={addToCart}
              productName={product.name}
              availableInventory={product.inventory}
              productId={product.id}
            />
            <FeatureIcons className="mt-8" />
          </div>
        </div>
        <Tabs defaultValue="product">
          <div className="overflow-auto">
            <TabsList>
              <TabsTrigger value="product" className="cursor-text">
                Product Description
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="product" className="pt-2">
            <ParagraphFormatter paragraphs={product.description} />
          </TabsContent>
        </Tabs>
      </div>
    );
  } catch (error) {
    console.error(error);
    return <div>Product not found</div>;
  }
}
