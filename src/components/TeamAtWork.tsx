"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Reveal } from "./ui/Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

const photos = [
  { src: "/service-1.png", alt: "Un artisan Eromi en plein chantier de rénovation" },
  { src: "/service-2.png", alt: "Pose de carrelage par l'équipe Eromi" },
  { src: "/service-3.png", alt: "Travaux de finition réalisés par Eromi" },
  { src: "/service-4.png", alt: "Application de peinture par l'équipe Eromi" },
];

export function TeamAtWork() {
  return (
    <section className="bg-ivory py-28 sm:py-40">
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

        {/* Staggered gallery */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 sm:gap-6">
          {photos.map((photo, i) => (
            <motion.figure
              key={photo.src}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: (i % 2) * 0.12, ease }}
              className={`group relative overflow-hidden rounded-[1.75rem] shadow-soft ${
                i % 2 === 1 ? "sm:mt-14" : ""
              }`}
            >
              <div className="relative aspect-[3/2]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 620px"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Corner index */}
              <span className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-paper/85 text-sm font-semibold text-ink backdrop-blur-sm transition-all duration-500 group-hover:bg-blue group-hover:text-white">
                0{i + 1}
              </span>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
