import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Services } from "@/components/Services";
import { SelectedWork } from "@/components/SelectedWork";
import { CtaBand } from "@/components/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <SelectedWork />
      <CtaBand />
    </>
  );
}
