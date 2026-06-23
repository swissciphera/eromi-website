import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { HistoryStory } from "@/components/HistoryStory";
import { Leadership } from "@/components/Leadership";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Notre histoire | Eromi Rénovations Sàrl",
  description:
    "De deux frères Miranda fondateurs en 1987 à la direction de Micael Teixeira de Miranda, découvrez l'histoire familiale d'Eromi Rénovations à Genève.",
};

export default function HistoirePage() {
  return (
    <>
      <PageHeader
        crumb="Histoire"
        eyebrow="Notre histoire"
        title="Une histoire de famille, depuis 1987."
        subtitle="Trois décennies de savoir-faire transmis, d'un frère à l'autre et d'une génération à la suivante."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80"
      />
      <HistoryStory />
      <Leadership />
      <CtaBand
        title="Perpétuons cette exigence chez vous."
        text="Confiez votre projet à une équipe portée par plus de 30 ans de savoir-faire familial."
      />
    </>
  );
}
