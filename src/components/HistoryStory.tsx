"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal, staggerContainer, staggerItem } from "./ui/Reveal";
import { story, timeline } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function HistoryStory() {
  const photoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: photoP } = useScroll({
    target: photoRef,
    offset: ["start end", "end start"],
  });
  const photoY = useTransform(photoP, [0, 1], ["-7%", "7%"]);

  const tlRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: tlP } = useScroll({
    target: tlRef,
    offset: ["start 80%", "end 55%"],
  });

  return (
    <section className="bg-paper py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Narrative + founders photo */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease }}
            className="lg:col-span-5"
          >
            <div
              ref={photoRef}
              className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-soft"
            >
              <motion.div style={{ y: photoY }} className="absolute inset-[-7%]">
                <Image
                  src="/fondateurs.png"
                  alt="Les frères Miranda, fondateurs d'Eromi Rénovations"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-ink/20" />
              <span className="absolute left-5 top-5 rounded-full bg-paper/90 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-ink backdrop-blur-sm">
                Depuis 1987
              </span>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-light">
                  Les fondateurs
                </span>
                <p className="mt-1 font-display text-xl font-medium text-paper">
                  Les frères Miranda
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-7"
          >
            <motion.span
              variants={staggerItem}
              className="block text-xs font-semibold uppercase tracking-[0.28em] text-blue"
            >
              Les origines
            </motion.span>
            <motion.h2
              variants={staggerItem}
              className="mt-6 font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl"
            >
              Deux frères, une même passion du travail bien fait.
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="mt-7 text-lg leading-relaxed text-mute"
            >
              {story.intro}
            </motion.p>
            <motion.p
              variants={staggerItem}
              className="mt-5 leading-relaxed text-mute"
            >
              {story.founders}
            </motion.p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="mt-28 grid gap-12 lg:grid-cols-12 lg:gap-16 sm:mt-32">
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-blue">
                Les grandes étapes
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl">
                Quatre décennies d&apos;excellence.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 leading-relaxed text-mute">
                De nos débuts artisanaux à notre statut de référence à Genève,
                chaque étape a façonné notre savoir-faire.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div ref={tlRef} className="relative pl-11 sm:pl-14">
              {/* Track */}
              <div className="absolute bottom-2 left-1 top-2 w-px bg-line" />
              <motion.div
                style={{ scaleY: tlP }}
                className="absolute bottom-2 left-1 top-2 w-px origin-top bg-blue"
              />

              <div className="flex flex-col gap-14">
                {timeline.map((item) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
                    transition={{ duration: 0.7, ease }}
                    className="relative"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-18% 0px -18% 0px" }}
                      transition={{ duration: 0.45, ease, delay: 0.05 }}
                      className="absolute top-2 -left-[2.65rem] h-3.5 w-3.5 rounded-full bg-blue ring-4 ring-paper sm:-left-[3.65rem]"
                    />
                    <span className="font-display text-3xl font-medium text-blue">
                      {item.year}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-medium text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-xl leading-relaxed text-mute">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
