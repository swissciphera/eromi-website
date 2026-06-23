"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { CountUp } from "./ui/CountUp";
import { stats } from "@/lib/content";

export function Intro() {
  return (
    <section className="bg-paper py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-blue">
                Notre savoir-faire
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 max-w-2xl font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl">
                L&apos;expertise et la passion au cœur de vos projets.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:pt-2">
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-mute">
                Depuis plus de 30 ans, Eromi Rénovations transforme les espaces
                de vie à Genève avec un savoir-faire artisanal et une exigence de
                qualité constante. Nous ne construisons pas seulement des murs,
                nous bâtissons des relations de confiance.
              </p>
              <Link
                href="/portfolio"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em] text-ink"
              >
                <span className="link-underline">Découvrir nos réalisations</span>
                <ArrowRight className="h-4 w-4 text-blue transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-16 aspect-[16/8] overflow-hidden rounded-3xl sm:mt-20"
        >
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80"
            alt="Espace de vie rénové par Eromi"
            fill
            className="object-cover"
          />
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="bg-paper px-8 py-10">
                <div className="font-display text-5xl font-medium text-ink">
                  <CountUp value={Number(s.value)} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-sm font-medium uppercase tracking-[0.12em] text-mute">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
