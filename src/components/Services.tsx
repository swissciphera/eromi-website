"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { services } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function Services() {
  return (
    <section className="bg-ivory py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left intro */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-blue">
                Nos services
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl">
                Des solutions sur mesure.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 leading-relaxed text-mute">
                Chaque projet est unique. Nous gérons l&apos;ensemble de votre
                chantier avec un seul interlocuteur, pour un résultat impeccable
                et durable.
              </p>
            </Reveal>
          </div>

          {/* Right list */}
          <div className="lg:col-span-8">
            <div className="border-t border-line">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, delay: i * 0.06, ease }}
                  >
                    <Link
                      href="/contact"
                      className="group flex items-start gap-6 border-b border-line py-8 transition-colors duration-300 sm:gap-10 sm:py-10"
                    >
                      <span className="mt-1 w-8 shrink-0 font-display text-lg text-blue/70">
                        0{i + 1}
                      </span>

                      <span className="flex-1">
                        <span className="flex items-center gap-4">
                          <Icon className="h-6 w-6 text-ink transition-colors group-hover:text-blue" strokeWidth={1.5} />
                          <span className="font-display text-2xl font-medium text-ink transition-colors group-hover:text-blue sm:text-3xl">
                            {service.title}
                          </span>
                        </span>
                        <span className="mt-3 block max-w-xl leading-relaxed text-mute">
                          {service.description}
                        </span>
                      </span>

                      <ArrowUpRight className="mt-1 h-6 w-6 shrink-0 text-mute transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
