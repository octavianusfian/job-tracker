import Image from "next/image";
import Logo2 from "@/assets/logo2.png";
import LandingImg from "@/assets/main.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <Image src={Logo2} alt="logo" />
      </header>
      <section
        className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr_400px]
          items-center"
      >
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            job <span className="text-primary">tracking</span> app
          </h1>
          <p className="leading-loose max-w-xl mt-4">
            Our platform simplifies the hiring process by allowing you to track,
            organize, and manage all your job applicants in one place. From
            application submission to final decision, stay updated every step of
            the way with a clear, intuitive interface. Whether you re hiring for
            one position or many, streamline your recruitment process with ease.
          </p>
          <Button asChild className="mt-4">
            <Link href={"/add-job"}>Get Started</Link>
          </Button>
        </div>
        <Image src={LandingImg} alt="landing" className="hidden lg:block" />
      </section>
    </main>
  );
}
