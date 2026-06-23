"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { projects } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function SelectedWork() {
  return (
    <section className="bg-paper py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-blue">
                Réalisations
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl">
                Une sélection de projets.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em] text-ink"
            >
              <span className="link-underline">Tout voir</span>
              <ArrowRight className="h-4 w-4 text-blue transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        {/* Interactive accordion (lg+) */}
        <div className="mt-14 hidden gap-3 lg:flex lg:h-[36rem]">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
              className="group relative h-full min-w-0 flex-1 cursor-pointer overflow-hidden rounded-3xl transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:grow-[3.5]"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1280px) 40vw, 640px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />

              {/* Collapsed vertical label */}
              <div className="absolute bottom-7 left-7 transition-opacity duration-300 group-hover:opacity-0">
                <span
                  className="font-display text-xl font-medium text-paper"
                  style={{ writingMode: "vertical-rl" }}
                >
                  {project.title}
                </span>
              </div>

              {/* Expanded content */}
              <div className="pointer-events-none absolute bottom-0 left-0 w-[26rem] max-w-full p-8 opacity-0 transition-opacity duration-500 group-hover:pointer-events-auto group-hover:opacity-100 group-hover:delay-150">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-light">
                  {project.tag}
                </span>
                <h3 className="mt-2 font-display text-3xl font-medium text-paper">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-md leading-relaxed text-paper/75">
                  {project.text}
                </p>
                <Link
                  href="/portfolio"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-paper"
                >
                  Voir le projet
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile / tablet fallback */}
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:hidden">
          {projects.slice(0, 4).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: (i % 2) * 0.1, ease }}
            >
              <Link href="/portfolio" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <span className="mt-5 block text-xs font-medium uppercase tracking-[0.2em] text-blue">
                  {project.tag}
                </span>
                <h3 className="mt-2 font-display text-2xl font-medium text-ink">
                  {project.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
