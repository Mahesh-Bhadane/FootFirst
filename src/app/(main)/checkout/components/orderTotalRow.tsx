import { Heading } from "@/components/ui/heading";

export const OrderTotalRow = (props: {
  subtotal: string;
  discount: string;
  total: string;
}) => {
  return (
    <>
      <div className="flex justify-between p-4 py-2">
        <p>Subtotal: </p>
        <p>{props.subtotal}</p>
      </div>
      <div className="flex justify-between p-4 py-2">
        <p>Discount (10%): </p>
        <p>{props.discount}</p>
      </div>
      <div className="flex items-center justify-between p-4 py-2 border-y border-slate-200">
        <Heading size="h4">Total</Heading>
        <p className="text-lg font-semibold">{props.total}</p>
      </div>
    </>
  );
};
