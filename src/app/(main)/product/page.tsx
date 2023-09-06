import { db } from "@/db/db";
import { stores } from "@/db/schema";

const Product = async () => {
  const myStores = await db.select().from(stores);
  console.log(myStores);
  return <div>Product</div>;
};

export default Product;
