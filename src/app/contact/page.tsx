import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact | Eromi Rénovations Sàrl",
  description:
    "Contactez Eromi Rénovations Sàrl à Genève. Devis gratuit pour vos travaux de carrelage, maçonnerie, démolition et peinture.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumb="Contact"
        eyebrow="Parlons-en"
        title="Donnons vie à votre vision."
        subtitle="Une rénovation complète ou un simple conseil : notre équipe vous répond et établit votre devis gratuitement."
        image="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=2000&q=80"
      />
      <Contact />
    </>
  );
}
