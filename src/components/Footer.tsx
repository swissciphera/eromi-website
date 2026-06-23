import Link from "next/link";
import { Logo } from "./ui/Logo";
import { nav, company } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-6 leading-relaxed text-mute">
              Rénovation et carrelage haut de gamme à Genève. Précision, design
              moderne et qualité durable dans chaque projet.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-mute">
              Navigation
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-ink/75 transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-mute">
              Contact
            </h4>
            <ul className="mt-5 flex flex-col gap-3 text-ink/75">
              <li>
                <a href={company.phoneHref} className="transition-colors hover:text-blue">
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="transition-colors hover:text-blue">
                  {company.email}
                </a>
              </li>
              <li className="text-mute">{company.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-line pt-8 text-sm text-mute sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.legal}. Tous droits réservés.
          </p>
          <p>L&apos;esthétique à chaque détail.</p>
        </div>
      </div>
    </footer>
  );
}
