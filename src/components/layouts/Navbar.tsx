import Link from "next/link";
import { Truck } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { currentUser } from "@clerk/nextjs";
import { ContentWrapper } from "@/components/molecules/Content-wrapper";
import { Logo } from "@/components/molecules/Logo";
import { IconWithText } from "@/components/molecules/Icon-with-text";
import { Line } from "@/components/molecules/Line";
import { MenuItems } from "@/components/molecules/Menu-items";
import { MobileNavigation } from "@/components/molecules/Mobile-navigation";
import { ShoppingCartHeader } from "@/components/molecules/Shopping-cart-header";
import logo from "@/components/icons/FootFirst-logos_black.png";

export const NavBar = async () => {
  const user = await currentUser();
  return (
    <div className={cn("sticky top-0  z-10")}>
      <nav
        className={cn(
          "pb-1 sticky top-0 bg-white shadow-sm",
          "border-b border-border"
        )}
      >
        <ContentWrapper className="flex justify-between items-center md:hidden flex-wrap gap-4">
          <Link href="/">
            <Image src={logo} alt={"logo"} width={200} height={100} />
          </Link>
          <div className="ml-auto flex items-center gap-8">
            <ShoppingCartHeader />
            <MobileNavigation />
          </div>
        </ContentWrapper>
        <ContentWrapper className="hidden md:block">
          <ul className="flex items-center justify-between gap-12 py-2">
            <li>
              <Link href="/">
                <Logo />
              </Link>
            </li>
            <li className="flex-1"></li>
            <li className="hidden lg:block">
              <Link href="/">
                <IconWithText
                  icon={<Truck size="36" strokeWidth={2} />}
                  headingText="Fast Dispatch"
                  description="Get your order in 2-3 days"
                />
              </Link>
            </li>
            <li>
              <ShoppingCartHeader />
            </li>
          </ul>
        </ContentWrapper>
        <Line className="hidden md:block" />
        <ContentWrapper className="hidden md:block py-0">
          <div className="-ml-4 mt-1">
            <MenuItems user={user} />
          </div>
        </ContentWrapper>
      </nav>
      <Line />
    </div>
  );
};
