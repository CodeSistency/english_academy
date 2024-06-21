import Hero from "@/components/hero/Hero";
import NavbarHero from "@/components/hero/NavbarHero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-[100vh]">
      <NavbarHero />
      <Hero />
    </main>
  );
}
