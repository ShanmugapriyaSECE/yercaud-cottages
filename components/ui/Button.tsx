type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300";

  const variants = {
    primary:
      "bg-amber-500 text-stone-950 hover:bg-amber-400 shadow-sm hover:shadow-md",

    secondary:
      "bg-stone-900 text-white hover:bg-stone-800 shadow-sm hover:shadow-md",

    outline:
      "border border-stone-300 bg-white text-stone-900 hover:bg-stone-900 hover:text-white",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={styles}>
      {children}
    </button>
  );
}