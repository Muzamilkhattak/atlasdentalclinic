import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  initial: string;
  text: string;
  rating?: number;
}

export function ReviewCard({ name, initial, text, rating = 5 }: ReviewCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
      <div className="flex gap-1 mb-4 text-yellow-400">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
      </div>
      <p className="text-slate-600 mb-6 italic leading-relaxed">"{text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-700">
          {initial}
        </div>
        <span className="font-semibold text-slate-900">{name}</span>
      </div>
    </div>
  );
}
