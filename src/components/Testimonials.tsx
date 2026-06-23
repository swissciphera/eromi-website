"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { testimonials, company } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function Testimonials() {
  const featured = testimonials.slice(0, 3);

  return (
    <section className="bg-ivory py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-blue">
                Témoignages
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 max-w-xl font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl">
                La confiance de plus de 1000 clients.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-blue text-blue" />
                ))}
              </span>
              <span className="text-sm font-medium text-mute">
                {company.reviews.rating}/5 · {company.reviews.count} avis Google
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {featured.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
              className="flex flex-col rounded-3xl border border-line bg-paper p-8"
            >
              <span className="flex">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-blue text-blue" />
                ))}
              </span>
              <blockquote className="mt-5 flex-1 font-display text-lg leading-relaxed text-ink">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold uppercase tracking-[0.1em] text-mute">
                {t.name}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
