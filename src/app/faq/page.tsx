import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "FAQ | Eromi Rénovations Sàrl",
  description:
    "Réponses aux questions fréquentes sur nos services de rénovation et de carrelage à Genève : devis, délais, garanties et zones d'intervention.",
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        crumb="FAQ"
        eyebrow="Foire aux questions"
        title="Vos questions, nos réponses."
        subtitle="Tout ce qu'il faut savoir sur notre processus, nos services et ce à quoi vous attendre en collaborant avec nous."
        image="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2000&q=80"
      />
      <Faq />
      <CtaBand
        title="Toujours une question ?"
        text="Notre équipe vous répond rapidement et vous accompagne dès la première prise de contact."
      />
    </>
  );
}
