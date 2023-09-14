import { ContentWrapper } from "@/components/molecules/ContentWrapper";
import { PropsWithChildren } from "react";

export default function Layout(props: PropsWithChildren) {
  return <ContentWrapper>{props.children}</ContentWrapper>;
}
