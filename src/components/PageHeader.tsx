"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image?: string;
  crumb: string;
};

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  image,
  crumb,
}: PageHeaderProps) {
  return (
    <section className="relative flex min-h-[58vh] items-end overflow-hidden bg-ink pb-16 pt-40 sm:min-h-[64vh] sm:pb-20">
      {image && (
        <>
          <Image src={image} alt="" fill priority className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/50" />
        </>
      )}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8">
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease }}
          className="mb-7 flex items-center gap-2 text-sm text-paper/55"
        >
          <Link href="/" className="transition-colors hover:text-paper">
            Accueil
          </Link>
          <span className="text-paper/30">/</span>
          <span className="text-paper/90">{crumb}</span>
        </motion.nav>

        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease }}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-light"
        >
          {eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.12, ease }}
          className="mt-6 max-w-4xl font-display text-[2.6rem] font-medium leading-[1.04] tracking-tight text-paper sm:text-7xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.22, ease }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-paper/70"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
