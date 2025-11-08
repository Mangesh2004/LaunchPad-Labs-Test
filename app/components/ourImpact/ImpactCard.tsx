import { cn } from "@/lib/utils";

type ImpactCardProps = {
  value: string;
  description: string;
  fillGradient: string;
  borderGradient: string;
  className?: string;
};

export const ImpactCard = ({
  value,
  description,
  fillGradient,
  borderGradient,
  className,
}: ImpactCardProps) => {
  return (
    <div
      className={cn("rounded-[23px] p-[5px]", className)}
      style={{
        background: borderGradient,
      }}
    >
      <div
        className="flex h-full min-h-[246px] flex-col items-center justify-center rounded-[18px] px-8 py-10 text-center shadow-[0px_16px_40px_rgba(15,94,255,0.08)]"
        style={{
          background: fillGradient,
          backgroundRepeat: "no-repeat",
        }}
      >
        <span
          className="font-semibold text-[58px] leading-[73px] text-[#0766DB]"
          style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
        >
          {value}
        </span>
        <p
          className="mt-4 text-[16px] font-medium leading-[28px] text-[#505050]"
          style={{ fontFamily: '"Plus Jakarta Sans", var(--font-sans)' }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ImpactCard;
