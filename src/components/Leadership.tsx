"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Quote } from "lucide-react";
import { staggerContainer, staggerItem } from "./ui/Reveal";
import { director } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function Leadership() {
  const portraitRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: portraitRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section className="relative overflow-hidden bg-ink py-28 text-paper sm:py-40">
      {/* Animated glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease }}
        className="pointer-events-none absolute -left-40 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-blue/20 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Portrait */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease }}
              ref={portraitRef}
              className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-paper/10 bg-ink-soft"
            >
              <motion.div style={{ y: imgY }} className="absolute inset-[-6%]">
                <Image
                  src="/directeur.png"
                  alt={`${director.name}, ${director.role} d'Eromi Rénovations`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-left"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
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
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="relative lg:col-span-7"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease, delay: 0.2 }}
              className="mb-2"
            >
              <Quote className="h-10 w-10 text-blue" fill="currentColor" />
            </motion.div>

            <motion.span
              variants={staggerItem}
              className="block text-xs font-semibold uppercase tracking-[0.28em] text-blue-light"
            >
              La nouvelle direction
            </motion.span>
            <motion.h2
              variants={staggerItem}
              className="mt-6 font-display text-4xl font-medium leading-[1.1] tracking-tight text-paper sm:text-5xl"
            >
              La relève d&apos;une histoire de famille.
            </motion.h2>

            <motion.blockquote
              variants={staggerItem}
              className="mt-8 border-l-2 border-blue pl-6 font-display text-2xl font-medium italic leading-snug text-paper/90 sm:text-3xl"
            >
              “{director.quote}”
            </motion.blockquote>

            <motion.p
              variants={staggerItem}
              className="mt-8 max-w-xl leading-relaxed text-paper/65"
            >
              {director.text}
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="mt-8 border-t border-paper/10 pt-6"
            >
              <p className="font-display text-xl font-medium text-paper">
                {director.name}
              </p>
              <p className="mt-1 text-sm uppercase tracking-[0.15em] text-blue-light">
                {director.role} · Eromi Rénovations Sàrl
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
