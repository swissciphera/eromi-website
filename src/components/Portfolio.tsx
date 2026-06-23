"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { projects } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function Portfolio() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: (i % 2) * 0.1, ease }}
              className={i % 3 === 0 ? "sm:col-span-2" : ""}
            >
              <div
                className={`relative overflow-hidden rounded-3xl ${
                  i % 3 === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                } group`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-6 flex items-baseline justify-between gap-6">
                <div>
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue">
                    {project.tag}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-medium text-ink sm:text-3xl">
                    {project.title}
                  </h3>
                </div>
              </div>
              <p className="mt-3 max-w-2xl leading-relaxed text-mute">
                {project.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
