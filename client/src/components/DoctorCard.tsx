interface DoctorCardProps {
  name: string;
  imageUrl: string;
  specialty: string;
  qualifications: string;
  certification?: string;
  role?: string;
}

export function DoctorCard({ name, imageUrl, specialty, qualifications, certification, role }: DoctorCardProps) {
  return (
    <article className="group mx-auto w-full max-w-[300px] overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-slate-800 to-slate-950 shadow-[0_18px_42px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_58px_rgba(0,0,0,0.45)] hover:border-white/25">
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
        <img
          src={imageUrl}
          alt={name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain object-center bg-slate-100 transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/65 to-transparent" />
        <p className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/90">
          Our Specialist
        </p>
      </div>
      <div className="space-y-2 px-5 py-6 text-white">
        <h3 className="font-display text-xl font-bold leading-tight tracking-tight">{name}</h3>
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-cyan-300">{specialty}</p>
        <p className="text-sm font-semibold text-white/90">{qualifications}</p>
        {certification ? <p className="text-sm text-white/80">{certification}</p> : null}
        {role ? (
          <p className="pt-1">
            <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
              {role}
            </span>
          </p>
        ) : null}
      </div>
    </article>
  );
}
