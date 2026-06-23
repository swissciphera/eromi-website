"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { company } from "@/lib/content";

type CtaBandProps = {
  title?: string;
  text?: string;
};

export function CtaBand({
  title = "Donnons vie à votre vision.",
  text = "Une rénovation complète ou un simple conseil, notre équipe vous accompagne et établit votre devis gratuitement.",
}: CtaBandProps) {
  return (
    <section className="bg-paper px-6 pb-28 pt-4 sm:px-8 sm:pb-40">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-7xl rounded-[2.5rem] bg-ink px-8 py-20 text-center sm:px-12 sm:py-28"
      >
        <h2 className="mx-auto max-w-3xl font-display text-4xl font-medium leading-[1.08] tracking-tight text-paper sm:text-6xl">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-paper/65">{text}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-paper px-8 py-4 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-blue hover:text-white"
          >
            Obtenir un devis
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <a
            href={company.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-8 py-4 text-sm font-semibold text-paper transition-colors duration-300 hover:bg-paper/10"
          >
            {company.phone}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
