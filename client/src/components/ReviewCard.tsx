import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  initial: string;
  text: string;
  subtitle?: string;
  rating?: number;
}

export function ReviewCard({ name, initial, text, subtitle, rating = 5 }: ReviewCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-b from-white to-slate-50/80 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_18px_42px_rgba(0,0,0,0.18)]">
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-black/5 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-8 h-24 w-24 rounded-full bg-slate-400/10 blur-2xl" />

      <div className="relative">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex gap-1 rounded-full bg-amber-50 px-3 py-1 text-amber-500 ring-1 ring-amber-100">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black text-xl font-semibold text-white/90">
            "
          </span>
        </div>

        <p className="text-slate-700 mb-7 text-[15px] italic leading-relaxed">"{text}"</p>

        <div className="flex items-center gap-3 border-t border-black/10 pt-4">
          <div className="flex h-11 w-11 rounded-full bg-black text-sm font-bold text-white items-center justify-center shadow-sm">
            {initial}
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-slate-900">{name}</p>
            {subtitle ? <p className="text-xs text-slate-600">{subtitle}</p> : null}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-8 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-black/25 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}
