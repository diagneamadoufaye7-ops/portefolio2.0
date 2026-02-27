// ===== components/ui/Badge.tsx =====
// Badge de compétence technique réutilisable

interface BadgeProps {
  label: string;
  variant?: "default" | "outline" | "glow";
  size?: "sm" | "md" | "lg";
  color?: string;
}

export default function Badge({
  label,
  variant = "default",
  size = "md",
  color,
}: BadgeProps) {
  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base",
  };

  const variantClasses = {
    default: "bg-white/10 text-gray-300 border border-white/10 hover:bg-white/20",
    outline: "bg-transparent border text-gray-300 hover:bg-white/5",
    glow: "bg-blue-500/20 text-blue-300 border border-blue-500/30 hover:bg-blue-500/30",
  };

  return (
    <span
      className={`
        inline-flex items-center rounded-full font-medium transition-colors duration-200 cursor-default
        ${sizeClasses[size]}
        ${variantClasses[variant]}
      `}
      style={color ? { borderColor: `${color}40`, backgroundColor: `${color}15`, color } : {}}
    >
      {label}
    </span>
  );
}
