"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { faq } from "@/lib/content";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-blue">
                FAQ
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl">
                Questions fréquentes.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-line">
              {faq.map((item, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={item.q} delay={i * 0.04} y={16}>
                    <div className="border-b border-line">
                      <button
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="flex w-full items-center justify-between gap-6 py-7 text-left"
                      >
                        <span className="font-display text-xl font-medium text-ink sm:text-2xl">
                          {item.q}
                        </span>
                        <span
                          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                            isOpen
                              ? "rotate-45 border-blue bg-blue text-white"
                              : "border-line text-ink"
                          }`}
                        >
                          <Plus className="h-4 w-4" />
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="max-w-2xl pb-7 leading-relaxed text-mute">
                              {item.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
