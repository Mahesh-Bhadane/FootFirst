import { ContentWrapper } from "@/components/molecules/Content-wrapper";
import { PropsWithChildren } from "react";

export default function Layout(props: PropsWithChildren) {
  return <ContentWrapper>{props.children}</ContentWrapper>;
}
