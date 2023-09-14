import { ContentWrapper } from "@/components/molecules/ContentWrapper";
import Image from "next/image";
import logo from "@/components/icons/FootFirst-logos_white.png";

export const Footer = () => {
  return (
    <footer className="p-6 text-primary-foreground bg-primary pb-12">
      <ContentWrapper className="flex items-start md:items-end justify-start md:justify-between gap-2 flex-col md:flex-row">
        <div>
          <Image src={logo} alt={"logo"} width={300} height={50} />
        </div>
        <div className="flex gap-2 items-center justify-start md:justify-end">
          <div className="flex items-start md:items-end justify-center flex-col gap-1 text-secondary text-sm">
            <p>
              Fictional online marketplace built by{" "}
              <a
                href="https://github.com/MaheshBhadane/ecommerce-app"
                className="text-white border-b pb-[1px] border-secondary"
              >
                @maheshbhadane
              </a>
              .
            </p>
          </div>
        </div>
      </ContentWrapper>
    </footer>
  );
};
