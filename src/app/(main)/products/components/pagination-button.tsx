"use client";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

export const PaginationButton = (props: {
  pageNumber: number;
  searchParamName: string;
}) => {
  const searchParams = useSearchParams();
  //@ts-expect-error
  const param = searchParams.get(props.searchParamName);

  return (
    <Button
      variant={
        Number(param) === props.pageNumber || (!param && props.pageNumber === 1)
          ? "default"
          : "ghost"
      }
      className="w-fit"
      key={props.pageNumber}
    >
      {props.pageNumber}
    </Button>
  );
};
