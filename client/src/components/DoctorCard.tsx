interface DoctorCardProps {
  name: string;
  imageUrl: string;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  onSelect?: () => void;
}

export function DoctorCard({ name, imageUrl, onHoverStart, onHoverEnd, onSelect }: DoctorCardProps) {
  return (
    <div
      className="group relative mx-auto w-full max-w-[280px] cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-slate-800/30 transition-all duration-500 lg:hover:-translate-y-2 lg:hover:scale-[1.05] lg:hover:shadow-2xl lg:hover:shadow-black/40 lg:hover:z-20"
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if ((event.key === "Enter" || event.key === " ") && onSelect) {
          event.preventDefault();
          onSelect();
        }
      }}
    >
      <div className="aspect-[4/5] overflow-hidden bg-slate-100">
        <img 
          src={imageUrl} 
          alt={name}
          className="h-full w-full object-contain object-center bg-slate-100 transition-transform duration-500"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 via-black/20 to-transparent pt-20">
        <h3 className="text-white font-bold text-lg font-display">{name}</h3>
      </div>
    </div>
  );
}
