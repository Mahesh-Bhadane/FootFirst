import { db } from "@/db/db";
import { carts } from "@/db/schema";

const Product = async () => {
  const myStores = await db.select().from(carts);
  console.log(myStores);
  return <div>Product</div>;
};

export default Product;
