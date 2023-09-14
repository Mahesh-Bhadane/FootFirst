import { db } from "@/db/db";
import { products } from "@/db/schema";
import { PaginationRow } from "@/app/(main)/products/components/pagination-row";

export const CollectionPagePagination = async (props: {
  productsPerPage: number;
  sellerParams: string;
}) => {
  const numberOfProducts = (
    await db
      .select({
        product: {
          id: products.id
        }
      })
      .from(products)
  ).length;

  const unroundedNumberOfPages = numberOfProducts / props.productsPerPage;

  const numberOfPages =
    unroundedNumberOfPages === Math.floor(unroundedNumberOfPages)
      ? unroundedNumberOfPages
      : Math.floor(unroundedNumberOfPages) + 1;

  return (
    <PaginationRow pagesArray={Array.from(Array(numberOfPages).fill(0))} />
  );
};
