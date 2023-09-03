import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">welcome to next.js</h1>
      <Button>
        <Link href="/sign-in">Login</Link>
      </Button>
    </>
  );
}
