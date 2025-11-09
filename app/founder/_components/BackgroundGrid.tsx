type BackgroundGridProps = {
  coverage?: number;
};

const BackgroundGrid = ({ coverage = 0.9 }: BackgroundGridProps) => {
  const normalizedCoverage = Math.min(Math.max(coverage, 0.1), 0.9);
  const gradientStop = `${Math.round(normalizedCoverage * 100)}%`;
  const blurRadius = `${normalizedCoverage * 80}px`;

  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden bg-[#F3F7F8]">
      <div className="h-full w-full bg-size-[50px_50px] bg-[linear-gradient(to_right,rgba(125,187,255,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(125,187,255,0.4)_1px,transparent_1px)]" />
      <span
        className="absolute left-0 top-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) ${gradientStop})`,
          filter: `blur(${blurRadius})`,
        }}
      />
      <span
        className="absolute right-0 top-1/2 h-[1200px] w-[1200px] translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) ${gradientStop})`,
          filter: `blur(${blurRadius})`,
        }}
      />
      <span
        className="absolute left-1/2 top-0 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) ${gradientStop})`,
          filter: `blur(${blurRadius})`,
        }}
      />
      <span
        className="absolute bottom-0 left-1/2 h-[1200px] w-[1200px] -translate-x-1/2 translate-y-1/2 rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) ${gradientStop})`,
          filter: `blur(${blurRadius})`,
        }}
      />
    </div>
  );
};

export default BackgroundGrid;
