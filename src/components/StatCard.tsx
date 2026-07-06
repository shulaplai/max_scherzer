interface StatCardProps {
  value: string;
  suffix: string;
  label: string;
}

export default function StatCard({ value, suffix, label }: StatCardProps) {
  return (
    <div className="glow-pulse rounded-xl border border-[#27272a] bg-[#141416]/80 p-5 text-center backdrop-blur-sm">
      <div className="stat-number text-3xl sm:text-4xl font-bold text-[#f0ece4] flex items-baseline justify-center gap-0.5">
        <span>{value}</span>
        <span className="text-lg text-[#1e90ff]">{suffix}</span>
      </div>
      <p className="text-xs text-[#6b7280] mt-2 uppercase tracking-wider font-medium">
        {label}
      </p>
    </div>
  );
}
