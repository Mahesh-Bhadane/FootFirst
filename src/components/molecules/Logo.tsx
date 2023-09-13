import Image from "next/image";
import logo from "@/components/icons/FootFirst-logos_black.png";
export const Logo = () => {
  return (
    <p className="scroll-m-20 text-2xl md:text-3xl font-semibold tracking-tight transition-colors first:mt-0">
      <Image src={logo} alt={"logo"} width={300} height={50} />
    </p>
  );
};
