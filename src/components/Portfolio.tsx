"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Reveal } from "./ui/Reveal";
import { projects } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function Portfolio() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Intro line */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-10">
          <Reveal>
            <p className="max-w-xl text-lg leading-relaxed text-mute">
              Cinq projets, un même soin du détail. Chaque chantier est mené de
              la première esquisse aux finitions, avec des matériaux choisis et
              une exécution sans compromis.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <span className="font-display text-sm uppercase tracking-[0.2em] text-mute">
              {String(projects.length).padStart(2, "0")} réalisations · Genève
            </span>
          </Reveal>
        </div>

        {/* Editorial list */}
        <div className="mt-20 space-y-24 sm:mt-24 sm:space-y-32">
          {projects.map((project, i) => {
            const reversed = i % 2 === 1;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.85, ease }}
                className="grid items-center gap-8 lg:grid-cols-12 lg:gap-16"
              >
                {/* Image */}
                <div className={`lg:col-span-7 ${reversed ? "lg:order-2" : ""}`}>
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-[1.75rem] shadow-soft">
                    <motion.div
                      initial={{ scale: 1.14 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 1.2, ease }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </motion.div>
                    <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-ink/10" />
                  </div>
                </div>

                {/* Text */}
                <div
                  className={`lg:col-span-5 ${
                    reversed ? "lg:order-1" : ""
                  }`}
                >
                  <span className="block font-display text-6xl font-medium leading-none text-blue/20 sm:text-7xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-5 block text-xs font-medium uppercase tracking-[0.22em] text-blue">
                    {project.tag}
                  </span>
                  <h3 className="mt-3 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-5 max-w-md leading-relaxed text-mute">
                    {project.text}
                  </p>
                  <div className="mt-7 h-px w-16 bg-blue/40" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
