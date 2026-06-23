"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Logo } from "./ui/Logo";
import { nav } from "@/lib/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onDark = !scrolled;
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-paper/90 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
          <Link href="/" aria-label="Accueil">
            <Logo variant={onDark ? "light" : "dark"} />
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`link-underline text-[0.82rem] font-medium uppercase tracking-[0.12em] transition-colors ${
                  onDark ? "text-paper/80 hover:text-paper" : "text-ink/70 hover:text-ink"
                } ${isActive(item.href) ? (onDark ? "!text-white" : "!text-ink") : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className={`hidden rounded-full px-5 py-2.5 text-[0.82rem] font-semibold uppercase tracking-[0.1em] transition-all duration-300 sm:inline-block ${
                onDark
                  ? "bg-paper text-ink hover:bg-blue hover:text-white"
                  : "bg-ink text-paper hover:bg-blue"
              }`}
            >
              Devis gratuit
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Ouvrir le menu"
              className={`lg:hidden ${onDark ? "text-paper" : "text-ink"}`}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div className="absolute inset-0 bg-ink/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 280 }}
              className="absolute right-0 top-0 flex h-full w-[84%] max-w-sm flex-col bg-paper px-7 py-6"
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button onClick={() => setOpen(false)} aria-label="Fermer" className="text-ink">
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="mt-14 flex flex-col">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block border-b border-line py-5 font-display text-3xl ${
                        isActive(item.href) ? "text-blue" : "text-ink"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-auto rounded-full bg-ink py-4 text-center font-semibold uppercase tracking-[0.1em] text-paper"
              >
                Devis gratuit
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
