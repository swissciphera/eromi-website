"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Reveal } from "./ui/Reveal";
import { director } from "@/lib/content";

export function Leadership() {
  return (
    <section className="bg-ink py-28 text-paper sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Portrait / monogram */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-paper/10 bg-ink-soft"
            >
              <Image
                src="/directeur.png"
                alt={`${director.name}, ${director.role} d'Eromi Rénovations`}
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-left"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-light">
                  {director.role}
                </span>
                <p className="mt-1 font-display text-xl font-medium text-paper">
                  {director.name}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Text */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-light">
                La nouvelle direction
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl font-medium leading-[1.1] tracking-tight text-paper sm:text-5xl">
                La relève d&apos;une histoire de famille.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <blockquote className="mt-8 border-l-2 border-blue pl-6 font-display text-2xl font-medium italic leading-snug text-paper/90 sm:text-3xl">
                “{director.quote}”
              </blockquote>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-8 max-w-xl leading-relaxed text-paper/65">
                {director.text}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 border-t border-paper/10 pt-6">
                <p className="font-display text-xl font-medium text-paper">
                  {director.name}
                </p>
                <p className="mt-1 text-sm uppercase tracking-[0.15em] text-blue-light">
                  {director.role} · Eromi Rénovations Sàrl
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
