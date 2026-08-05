"use client";

import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type ButtonVariant = "gold" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

type ButtonAsAnchor = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantClasses: Record<ButtonVariant, string> = {
  gold: "bg-gold-500 text-white border border-gold-500 hover:bg-gold-400 hover:border-gold-400 shadow-lg hover:shadow-gold-500/25",
  outline:
    "bg-transparent text-gold-400 border border-gold-500 hover:bg-gold-500 hover:text-white",
  ghost:
    "bg-transparent text-charcoal-200 border border-charcoal-600 hover:border-gold-500 hover:text-gold-400",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-sm",
  md: "px-7 py-3 text-sm",
  lg: "px-9 py-4 text-base",
};

export default function Button({
  variant = "gold",
  size = "md",
  children,
  className = "",
  as,
  ...rest
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 font-semibold tracking-wide rounded-none transition-all duration-300 cursor-pointer",
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].join(" ");

  if (as === "a") {
    return (
      <a
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
