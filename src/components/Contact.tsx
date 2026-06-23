"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { company } from "@/lib/content";

const details = [
  { icon: Phone, label: "Téléphone", value: company.phone, href: company.phoneHref },
  { icon: Mail, label: "E-mail", value: company.email, href: `mailto:${company.email}` },
  { icon: MapPin, label: "Adresse", value: company.address, href: "#" },
];

export function Contact() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Details */}
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-blue">
                Coordonnées
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl">
                Plusieurs façons de nous joindre.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md leading-relaxed text-mute">
                Appelez-nous, écrivez-nous ou passez nous voir. Nous répondons
                rapidement et établissons votre devis gratuitement.
              </p>
            </Reveal>

            <div className="mt-10 border-t border-line">
              {details.map((d, i) => {
                const Icon = d.icon;
                return (
                  <Reveal key={d.label} delay={0.1 + i * 0.06} y={14}>
                    <a
                      href={d.href}
                      className="group flex items-center gap-5 border-b border-line py-6"
                    >
                      <Icon className="h-5 w-5 text-blue" strokeWidth={1.6} />
                      <span>
                        <span className="block text-xs uppercase tracking-[0.15em] text-mute">
                          {d.label}
                        </span>
                        <span className="text-lg font-medium text-ink transition-colors group-hover:text-blue">
                          {d.value}
                        </span>
                      </span>
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <Reveal delay={0.15}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-3xl border border-line bg-ivory p-8 sm:p-10"
            >
              <h3 className="font-display text-2xl font-medium text-ink">
                Demandez votre devis
              </h3>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <Field label="Nom complet" placeholder="Jean Dupont" />
                <Field label="Téléphone" placeholder="+41 79 000 00 00" />
                <div className="sm:col-span-2">
                  <Field label="E-mail" placeholder="vous@exemple.ch" type="email" />
                </div>
                <div className="sm:col-span-2">
                  <Field label="Type de projet" placeholder="Carrelage, rénovation complète…" />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-mute">
                    Votre message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Décrivez votre projet…"
                    className="w-full resize-none border-b border-line bg-transparent py-2 text-ink outline-none transition-colors placeholder:text-mute/50 focus:border-blue"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-9 w-full rounded-full bg-ink py-4 text-sm font-semibold uppercase tracking-[0.1em] text-paper transition-colors duration-300 hover:bg-blue"
              >
                Envoyer ma demande
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-mute">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border-b border-line bg-transparent py-2 text-ink outline-none transition-colors placeholder:text-mute/50 focus:border-blue"
      />
    </label>
  );
}
