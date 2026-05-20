import Image from "next/image";

interface LogoProps {
  className?: string;
  height?: number;
}

export function Logo({ className, height = 32 }: LogoProps) {
  const width = Math.round(height * (925 / 205));
  return (
    <span className={className}>
      <Image
        src="/logo-light.svg"
        alt="Norionsoft"
        width={width}
        height={height}
        className="dark:hidden"
        priority
      />
      <Image
        src="/logo-dark.svg"
        alt="Norionsoft"
        width={width}
        height={height}
        className="hidden dark:block"
        priority
      />
    </span>
  );
}
