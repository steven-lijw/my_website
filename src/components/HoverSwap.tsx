type HoverSwapProps = {
  defaultText: string;
  hoverText: string;
  className?: string;
  as?: "h1" | "h2" | "span";
};

/**
 * Crossfade label on hover — same type styles, only the string changes.
 */
export function HoverSwap({
  defaultText,
  hoverText,
  className = "",
  as: Tag = "span",
}: HoverSwapProps) {
  return (
    <Tag
      className={`group relative inline-grid cursor-default ${className}`.trim()}
    >
      <span className="col-start-1 row-start-1 whitespace-nowrap transition-opacity duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-0">
        {defaultText}
      </span>
      <span
        className="col-start-1 row-start-1 whitespace-nowrap opacity-0 transition-opacity duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
        aria-hidden
      >
        {hoverText}
      </span>
    </Tag>
  );
}
