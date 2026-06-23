import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Portfolio | Eromi Rénovations Sàrl",
  description:
    "Découvrez nos réalisations : rénovations de villas, cuisines sur mesure, agences et appartements à Genève.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        crumb="Portfolio"
        eyebrow="Réalisations"
        title="Nos plus belles réalisations."
        subtitle="De rénovations complètes aux finitions en carrelage sur mesure, un aperçu de projets pensés dans le moindre détail."
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
      />
      <Portfolio />
      <Testimonials />
      <CtaBand />
    </>
  );
}
