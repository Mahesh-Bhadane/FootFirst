import { Heading } from "@/components/ui/heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Text } from "@/components/ui/text";
import { db } from "@/db/db";
import { products } from "@/db/schema";
import { currencyFormatter } from "@/lib/currency";
import { eq } from "drizzle-orm";
import Image from "next/image";
import { FeatureIcons } from "@/components/molecules/feature-icons";
import { ParagraphFormatter } from "@/components/ui/paragraph-formatter";

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
            <div className="relative h-56 w-full">
              <Image
                //@ts-ignore
                src={product.images}
                alt={"product"}
                fill
                className="object-cover h-48 w-full"
              />
            </div>
          </div>
          <div className="md:col-span-5 w-full">
            <Heading size="h2">{product.name}</Heading>
            <Text className="text-sm mt-2">Sold by : Mahesh </Text>
            <Text className="text-xl my-4">
              {currencyFormatter(Number(product.price))}
            </Text>
            <FeatureIcons className="mt-8" />
          </div>
        </div>
        <Tabs defaultValue="product">
          <div className="overflow-auto">
            <TabsList>
              <TabsTrigger value="product">Product Description</TabsTrigger>
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
