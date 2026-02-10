interface DoctorCardProps {
  name: string;
  specialty: string;
  imageUrl: string;
}

export function DoctorCard({ name, specialty, imageUrl }: DoctorCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <div className="aspect-[3/4] overflow-hidden bg-slate-100">
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-20">
        <h3 className="text-white font-bold text-lg font-display">{name}</h3>
        <p className="text-white/80 text-sm">{specialty}</p>
      </div>
    </div>
  );
}
