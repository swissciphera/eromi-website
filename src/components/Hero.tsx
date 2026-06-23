"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-ink">
      <Image
        src="/hero-image-1.png"
        alt="Réalisation architecturale haut de gamme par Eromi"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 sm:px-8 sm:pb-28">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-light"
        >
          Rénovation & Carrelage · Genève
        </motion.span>

        <h1 className="mt-7 max-w-4xl font-display text-[2.9rem] font-medium leading-[1.02] tracking-tight text-paper sm:text-7xl lg:text-[5.5rem]">
          {["L'excellence au sol,", "l'esthétique à"].map((line, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.12 + i * 0.1, ease }}
              className="block"
            >
              {line}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.32, ease }}
            className="block italic text-blue-light"
          >
            chaque détail
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-md text-lg leading-relaxed text-paper/75">
            Un savoir-faire artisanal au service de vos plus belles ambitions,
            depuis plus de 30 ans à Genève.
          </p>

          <div className="flex shrink-0 items-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-paper px-7 py-4 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-blue hover:text-white"
            >
              Obtenir un devis
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-7 py-4 text-sm font-semibold text-paper transition-colors duration-300 hover:bg-paper/10"
            >
              Nos réalisations
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
