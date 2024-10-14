import { cn } from "@/lib/utils";

interface GradientBorderButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const GradientBorderButton = ({
  children,
  className,
  ...props
}: GradientBorderButtonProps) => {
  return (
    <button
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-md px-6 py-3 font-medium text-teal-600 transition duration-300 ease-out",
        className,
      )}
      {...props}
    >
      <span className="absolute inset-0">
        <span className="absolute inset-0 rounded-md bg-gradient-to-br from-teal-400 to-teal-200" />
      </span>
      <span className="absolute inset-[2px] rounded-md bg-white" />
      <span className="relative z-10">{children}</span>
    </button>
  );
};
