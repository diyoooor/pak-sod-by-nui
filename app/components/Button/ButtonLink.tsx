import Link from "next/link";
import React from "react";

interface ButtonLinkProps {
  href: string;
  label?: string;
  icon?: React.ReactNode;
  className?: string;
  newTab?: boolean;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  label,
  className = "",
  newTab = false,
  icon,
}) => {
  return (
    <Link
      href={href}
      passHref
      type="button"
      className={`py-2 px-4   rounded transition-all flex flex-col  ${className} block rounded-2xl`}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : ""}
    >
      <p className="mx-auto">{icon}</p>
      <p>{label}</p>
    </Link>
  );
};

export default ButtonLink;
