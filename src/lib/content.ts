import {
  Hammer,
  Grid3x3,
  Construction,
  PaintRoller,
  type LucideIcon,
} from "lucide-react";

export const company = {
  name: "Eromi Rénovations",
  legal: "Eromi Rénovations Sàrl",
  tagline: "L'excellence au sol, l'esthétique à chaque détail",
  city: "Genève",
  phone: "022 300 07 60",
  phoneHref: "tel:+41223000760",
  email: "contact@eromi.ch",
  address: "Route des Jeunes 4bis, Genève",
  reviews: { rating: 5, count: 17 },
};

export const nav = [
  { label: "Accueil", href: "/" },
  { label: "Histoire", href: "/histoire" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "30", suffix: "+", label: "Ans d'expérience" },
  { value: "1000", suffix: "+", label: "Projets réalisés" },
  { value: "100", suffix: "%", label: "Engagement qualité" },
];

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
};

export const services: Service[] = [
  {
    title: "Maçonnerie",
    description:
      "Tous types de travaux de maçonnerie, des fondations aux finitions, exécutés avec expertise et précision.",
    icon: Hammer,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Carrelage",
    description:
      "Pose de carrelages élégants et durables, avec un soin minutieux, pour des sols et murs faciles à entretenir.",
    icon: Grid3x3,
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Démolition",
    description:
      "Démolitions réalisées en toute sécurité, préparant efficacement le terrain pour vos futurs projets.",
    icon: Construction,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Peinture",
    description:
      "Finitions impeccables et conseils couleur pour rafraîchir et personnaliser vos intérieurs et extérieurs.",
    icon: PaintRoller,
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=80",
  },
];

export const timeline = [
  {
    year: "1987",
    title: "La Fondation",
    text: "Deux frères passionnés posent la première pierre d'EROMI, une entreprise de carrelage bâtie sur le savoir-faire artisanal, la précision et une exigence constante de qualité.",
  },
  {
    year: "2006",
    title: "Naissance d'EROMI Rénovations Sàrl",
    text: "L'entreprise entre dans une nouvelle phase de croissance, renforçant sa réputation de rigueur, de fiabilité et d'exécution maîtrisée à Genève.",
  },
  {
    year: "2021",
    title: "La Nouvelle Ère",
    text: "Nous élargissons notre expertise pour inclure la rénovation complète, offrant des solutions clés en main pour transformer les espaces de vie de nos clients.",
  },
  {
    year: "Aujourd'hui",
    title: "La Référence de l'Excellence",
    text: "Fort de milliers de projets réalisés, EROMI s'impose comme un acteur incontournable de la rénovation haut de gamme, synonyme de qualité, d'innovation et de confiance.",
  },
];

export const story = {
  intro:
    "Tout commence en 1987, lorsque deux frères Miranda, animés par la même passion du travail bien fait, décident de fonder EROMI. Carreleurs de métier, ils bâtissent leur réputation chantier après chantier, sur une promesse simple : la précision du geste et le respect de la parole donnée.",
  founders:
    "Pendant plus de trois décennies, les frères Miranda façonnent l'identité de l'entreprise. Le savoir-faire artisanal se transmet, les équipes grandissent, mais l'exigence reste la même : ne livrer que ce dont on serait fier chez soi. C'est cet héritage, fait de rigueur et de fierté du métier, qui continue d'animer EROMI aujourd'hui.",
};

export const values = [
  {
    title: "Le savoir-faire avant tout",
    text: "Un métier d'artisan transmis depuis 1987, où chaque geste compte et chaque finition se mérite.",
  },
  {
    title: "L'exigence, sans compromis",
    text: "Des matériaux choisis, des plannings respectés et un seul standard : ne livrer que ce dont nous serions fiers chez nous.",
  },
  {
    title: "La confiance qui dure",
    text: "Nous ne bâtissons pas seulement des murs, mais des relations sur le long terme, fondées sur la parole donnée.",
  },
];

export const director = {
  name: "Micael Teixeira de Miranda",
  role: "Directeur",
  initials: "MT",
  quote:
    "J'ai grandi au milieu des chantiers, entre les outils et les conseils de mes aînés. Reprendre la direction d'EROMI, c'est continuer une histoire de famille et honorer ce que mes prédécesseurs ont bâti.",
  text: "Issu de la famille fondatrice, Micael Teixeira de Miranda perpétue aujourd'hui l'héritage des frères Miranda. Sous sa direction, EROMI conjugue la tradition artisanale qui a fait sa réputation et une vision moderne de la rénovation haut de gamme, tournée vers la rénovation complète et les finitions sur mesure.",
};

export type Project = {
  tag: string;
  title: string;
  text: string;
  image: string;
  size?: "tall" | "wide" | "normal";
};

export const projects: Project[] = [
  {
    tag: "Rénovations",
    title: "Rénovation de Villas",
    text: "Rénovation complète de quatre villas, soit près de 600 m² transformés. Plus de 25 références de carrelages posées avec soin, chaque détail maîtrisé.",
    image:
      "/portfolio-1/image-1.png",
    size: "tall",
  },
  {
    tag: "Rénovations",
    title: "Rénovation de Cuisine",
    text: "Cuisine personnalisée en FENIX noir et chêne massif, îlot sur mesure et plan de travail DEKTON pour une atmosphère unique.",
    image:
      "/portfolio-2/image-1.png",
    size: "normal",
  },
  {
    tag: "Sur mesure",
    title: "Rénovation Sur Mesure",
    text: "Réaménagement d'un appartement pour agrandir le séjour et créer une chambre d'amis. Le parquet d'origine a été conservé et restauré.",
    image:
      "/portfolio-3/image-1.png",
    size: "normal",
  },
  {
    tag: "Commercial",
    title: "Rénovation d'Agence",
    text: "Agence de 170 m² entièrement repensée pour un espace moderne et fonctionnel : zones de travail, de détente et d'accueil.",
    image:
      "/portfolio-4/image-1.png",
    size: "wide",
  },
  {
    tag: "Rénovations",
    title: "Rénovation Complète",
    text: "Appartement rénové avec des matériaux de qualité : sol en parquet, murs en béton ciré et menuiseries sur mesure pour une atmosphère élégante et moderne.",
    image:
      "/portfolio-5/image-1.png",
    size: "tall",
  },
];

export const testimonials = [
  {
    name: "Jordan Enzo",
    text: "Tous mes clients me remercient pour votre travail, alors c'est à mon tour de remercier Eromi. Vous avez tout géré parfaitement. Je ne fais confiance qu'à vous pour les nombreux projets à venir.",
  },
  {
    name: "L.B Do Carmo",
    text: "Équipe professionnelle, à l'écoute et minutieuse du début jusqu'à la fin du projet. Je ne peux que conseiller. Merci et à bientôt.",
  },
  {
    name: "Lara Vieira",
    text: "Une entreprise sérieuse avec une qualité et un suivi parfait !",
  },
  {
    name: "Olivier",
    text: "Super... très professionnel, très agréable et sympathique. Je recommande vivement. Merci.",
  },
  {
    name: "Debeugny Yannick",
    text: "Travail propre et soigné, j'adore.",
  },
  {
    name: "Valteir Borges",
    text: "Grande qualité. Un travail remarquable du début à la fin.",
  },
];

export const faq = [
  {
    q: "Comment puis-je demander un devis ?",
    a: "C'est simple et sans engagement. Contactez-nous par téléphone, e-mail ou via le formulaire de contact en décrivant votre projet. Nous organisons une visite sur place pour évaluer vos besoins, puis vous remettons un devis détaillé et transparent, entièrement gratuit.",
  },
  {
    q: "Quels services proposez-vous ?",
    a: "Nous couvrons l'ensemble de votre projet de rénovation : maçonnerie, pose de carrelage, démolition et peinture. De la rénovation complète clés en main aux finitions sur mesure, nous gérons chaque étape avec un seul interlocuteur.",
  },
  {
    q: "Combien de temps dure une rénovation typique ?",
    a: "La durée dépend de l'ampleur et de la complexité du chantier. Une pose de carrelage peut prendre quelques jours, tandis qu'une rénovation complète s'étale sur plusieurs semaines. Nous établissons un planning précis dès le départ et le respectons scrupuleusement.",
  },
  {
    q: "Quelles sont les garanties sur vos constructions ?",
    a: "Tous nos travaux sont couverts par les garanties légales suisses. Nous utilisons exclusivement des matériaux de qualité et un savoir-faire artisanal pour assurer un résultat durable. Votre satisfaction et la longévité de l'ouvrage sont notre priorité absolue.",
  },
  {
    q: "Dans quelles régions intervenez-vous ?",
    a: "Nous intervenons principalement à Genève et dans toute sa région. Pour les projets situés en dehors de ce périmètre, n'hésitez pas à nous contacter : nous étudions chaque demande avec attention.",
  },
];
