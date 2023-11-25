import Image from "next/image";
import { Mail } from "lucide-react";
import bgImg from "@/assets/bgImg.jpeg";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <main className=" flex items-center justify-center min-h-screen">
      <div className="flex flex-col gap-7 items-center justify-center ">
        <h1 className=" text-[40px] text-white font-bold">
          Welcome to my Blog Site
        </h1>
        <Button>
          <Mail className="mr-2 h-4 w-4" /> Login with Email
        </Button>
      </div>
      <Image
        className=" opacity-60 absolute w-full z-[-1]"
        src={bgImg}
        alt="Bg"
      />
    </main>
  );
}
