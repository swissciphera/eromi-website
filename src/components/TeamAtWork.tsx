"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Reveal } from "./ui/Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

const photos = [
  { src: "/service-1.png", alt: "L'équipe Eromi en plein chantier de rénovation" },
  { src: "/service-2.png", alt: "Pose de carrelage par l'équipe Eromi" },
  { src: "/service-3.png", alt: "Travaux de finition réalisés par Eromi" },
  { src: "/service-4.png", alt: "Un artisan Eromi au travail" },
];

export function TeamAtWork() {
  return (
    <section className="bg-ivory py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-blue">
                Notre équipe
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 max-w-2xl font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl">
                L&apos;équipe à l&apos;œuvre.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="leading-relaxed text-mute lg:col-span-5">
              Des artisans engagés, présents sur chaque chantier, du premier
              geste aux finitions les plus délicates.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: (i % 2) * 0.1, ease }}
              className="group relative aspect-[16/10] overflow-hidden rounded-3xl"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 620px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
