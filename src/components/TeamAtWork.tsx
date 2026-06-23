"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Reveal } from "./ui/Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

const photos = [
  { src: "/service-1.png", alt: "Un artisan Eromi en plein chantier", rot: -13, ty: 38 },
  { src: "/service-2.png", alt: "Pose de carrelage par l'équipe Eromi", rot: -5, ty: 4 },
  { src: "/service-3.png", alt: "Travaux de finition réalisés par Eromi", rot: 5, ty: 4 },
  { src: "/service-4.png", alt: "Application de peinture par l'équipe Eromi", rot: 13, ty: 38 },
];

const zBase = ["z-10", "z-20", "z-20", "z-10"];

function Card({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 50vw, 260px"
        className="object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-ink/80 to-transparent px-3 pb-2.5 pt-8">
        <span className="text-xs font-semibold tracking-wide text-paper">
          EROMI
        </span>
        <span className="text-[0.65rem] font-medium text-paper/70">
          Sur le chantier
        </span>
      </div>
    </div>
  );
}

export function TeamAtWork() {
  return (
    <section className="overflow-hidden bg-ivory py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Header */}
        <div className="grid gap-y-6 gap-x-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-blue">
                Notre équipe
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                L&apos;équipe à l&apos;œuvre.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-4">
            <p className="max-w-sm leading-relaxed text-mute lg:pb-2">
              Des artisans engagés, présents sur chaque chantier, du premier
              geste aux finitions les plus délicates.
            </p>
          </Reveal>
        </div>

        {/* Fanned card showcase (lg+) */}
        <div className="mt-24 hidden items-end justify-center lg:flex">
          {photos.map((p, i) => (
            <motion.div
              key={p.src}
              initial={{ opacity: 0, rotate: 0, y: 90 }}
              whileInView={{ opacity: 1, rotate: p.rot, y: p.ty }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: i * 0.1, ease }}
              whileHover={{ rotate: 0, y: p.ty - 30, scale: 1.05 }}
              className={`relative -ml-16 w-[16rem] shrink-0 cursor-pointer rounded-[1.4rem] bg-paper p-2.5 shadow-[0_30px_60px_-20px_rgba(19,31,51,0.5)] first:ml-0 hover:z-50 ${zBase[i]}`}
            >
              <Card src={p.src} alt={p.alt} />
            </motion.div>
          ))}
        </div>

        {/* Mobile / tablet fallback grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:hidden">
          {photos.map((p, i) => (
            <motion.div
              key={p.src}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: (i % 2) * 0.1, ease }}
              className="rounded-[1.4rem] bg-paper p-2 shadow-soft"
            >
              <Card src={p.src} alt={p.alt} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
