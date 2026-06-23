import Image from "next/image";

type LogoProps = {
  className?: string;
  variant?: "dark" | "light";
};

export function Logo({ className = "", variant = "dark" }: LogoProps) {
  const src = variant === "light" ? "/eromi-logo-light.png" : "/eromi-logo.png";
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src={src}
        alt="Eromi Rénovations Sàrl"
        width={384}
        height={207}
        priority
        className="h-9 w-auto sm:h-10"
      />
    </span>
  );
}
