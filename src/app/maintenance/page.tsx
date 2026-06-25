"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Phone, Mail } from "lucide-react";
import { company } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export default function MaintenancePage() {
  return (
    <div className="fixed inset-0 z-[80] flex flex-col items-center justify-center overflow-hidden bg-ink px-6 text-center text-paper">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-48 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-blue/20 blur-[170px]" />
      <div className="pointer-events-none absolute -bottom-48 right-0 h-[28rem] w-[28rem] rounded-full bg-blue-deep/15 blur-[150px]" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
        className="relative"
      >
        <Image
          src="/eromi-logo-light.png"
          alt="Eromi Rénovations Sàrl"
          width={384}
          height={207}
          priority
          className="h-12 w-auto sm:h-14"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease }}
        className="mt-12 inline-flex items-center gap-2.5 rounded-full border border-paper/15 bg-paper/5 px-4 py-2 backdrop-blur-sm"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-light opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-light" />
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-paper/80">
          Maintenance en cours
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.18, ease }}
        className="mt-8 max-w-2xl font-display text-[2.6rem] font-medium leading-[1.05] tracking-tight sm:text-6xl"
      >
        Nous revenons <span className="italic text-blue-light">très vite.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.28, ease }}
        className="mt-6 max-w-lg text-lg leading-relaxed text-paper/65"
      >
        Notre site fait actuellement peau neuve. Il sera de nouveau disponible
        dans quelques instants. Merci de votre patience.
      </motion.p>

      {/* Indeterminate progress shimmer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative mt-10 h-1 w-56 overflow-hidden rounded-full bg-paper/10"
      >
        <motion.span
          animate={{ x: ["-120%", "320%"] }}
          transition={{ repeat: Infinity, duration: 1.9, ease: "easeInOut" }}
          className="absolute inset-y-0 left-0 block w-1/3 rounded-full bg-blue-light"
        />
      </motion.div>

      {/* Contact for urgent matters */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.5, ease }}
        className="mt-14 flex flex-col items-center gap-4 border-t border-paper/10 pt-8 sm:flex-row sm:gap-10"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-paper/40">
          Une question ?
        </span>
        <a
          href={company.phoneHref}
          className="inline-flex items-center gap-2 text-paper/85 transition-colors hover:text-blue-light"
        >
          <Phone className="h-4 w-4 text-blue-light" />
          {company.phone}
        </a>
        <a
          href={`mailto:${company.email}`}
          className="inline-flex items-center gap-2 text-paper/85 transition-colors hover:text-blue-light"
        >
          <Mail className="h-4 w-4 text-blue-light" />
          {company.email}
        </a>
      </motion.div>
    </div>
  );
}
