"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { projects } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function SelectedWork() {
  const featured = projects[0];
  const rest = projects.slice(1, 3);

  return (
    <section className="bg-paper py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
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

        {/* Featured */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease }}
          className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-center"
        >
          <Link href="/portfolio" className="group block lg:col-span-7">
            <div className="relative aspect-[16/11] overflow-hidden rounded-3xl">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </Link>
          <div className="lg:col-span-5">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue">
              {featured.tag}
            </span>
            <h3 className="mt-4 font-display text-3xl font-medium text-ink sm:text-4xl">
              {featured.title}
            </h3>
            <p className="mt-5 leading-relaxed text-mute">{featured.text}</p>
          </div>
        </motion.div>

        {/* Pair */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {rest.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease }}
            >
              <Link href="/portfolio" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
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
