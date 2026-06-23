"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Reveal } from "./ui/Reveal";
import { story, timeline } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function HistoryStory() {
  return (
    <section className="bg-paper py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Narrative + founders photo */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
              <Image
                src="/fondateurs.png"
                alt="Les frères Miranda, fondateurs d'Eromi Rénovations"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
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

          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-blue">
                Les origines
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl">
                Deux frères, une même passion du travail bien fait.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 text-lg leading-relaxed text-mute">
                {story.intro}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 leading-relaxed text-mute">{story.founders}</p>
            </Reveal>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
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
          </div>

          <div className="lg:col-span-8">
            <div className="relative border-l border-line pl-8 sm:pl-12">
              {timeline.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.05}>
                  <div className="relative pb-12 last:pb-0">
                    <span className="absolute -left-[2.05rem] top-1.5 h-2.5 w-2.5 rounded-full bg-blue sm:-left-[3.3rem]" />
                    <span className="font-display text-3xl font-medium text-blue">
                      {item.year}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-medium text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-xl leading-relaxed text-mute">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
