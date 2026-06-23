"use client";

import { motion } from "motion/react";
import { Hammer, BadgeCheck, Handshake, type LucideIcon } from "lucide-react";
import { Reveal, staggerContainer, staggerItem } from "./ui/Reveal";
import { values } from "@/lib/content";

const icons: LucideIcon[] = [Hammer, BadgeCheck, Handshake];

export function Values() {
  return (
    <section className="bg-ivory py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-blue">
              Ce qui nous anime
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl">
              Trois principes, une même exigence.
            </h2>
          </Reveal>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {values.map((value, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={value.title}
                variants={staggerItem}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-paper p-8 transition-colors duration-300 hover:border-blue/40"
              >
                <span className="pointer-events-none absolute right-6 top-5 font-display text-6xl font-medium leading-none text-blue/[0.08]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue/10 text-blue transition-colors duration-300 group-hover:bg-blue group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </div>
                <h3 className="mt-7 font-display text-2xl font-medium text-ink">
                  {value.title}
                </h3>
                <p className="mt-3 leading-relaxed text-mute">{value.text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
