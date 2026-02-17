import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import clinicReceptionImage from "@/assets/clinic reception.jpeg";
import clinicWaitingAreaImage from "@/assets/clinic waiting area.jpeg";
import clinicWaitingAreaTwoImage from "@/assets/clinic waiting area 2.jpeg";
import clinicDentalMachineImage from "@/assets/clinic dental machine.jpeg";
import clinicReceptionWaitingImage from "@/assets/clinic  reception and waiting area.jpeg";
import clinicInternalImage from "@/assets/clinic image internal.webp";
import clinicOutsideImage from "@/assets/image of clinic form outside.webp";
import clinicImageOne from "@/assets/image of clinic 1.webp";
import clinicImageThree from "@/assets/image of clinic 3.webp";
import clinicImageFive from "@/assets/image of clinic 5.webp";
import aboutClinicOneImage from "@/assets/about us 1.jpg";
import aboutClinicTwoImage from "@/assets/about us 2.webp";

type GalleryItem = {
  image: string;
  title: string;
  description: string;
};

const galleryItems: GalleryItem[] = [
  {
    image: clinicOutsideImage,
    title: "Clinic Exterior",
    description: "Street-facing entrance and easy access.",
  },
  {
    image: clinicReceptionImage,
    title: "Reception Desk",
    description: "Clean front desk with guided patient flow.",
  },
  {
    image: clinicWaitingAreaImage,
    title: "Patient Lounge",
    description: "Comfort-focused waiting area.",
  },
  {
    image: clinicWaitingAreaTwoImage,
    title: "Lounge Extension",
    description: "Additional seating and open circulation.",
  },
  {
    image: clinicDentalMachineImage,
    title: "Treatment Unit",
    description: "Modern dental setup for specialist care.",
  },
  {
    image: clinicReceptionWaitingImage,
    title: "Reception View",
    description: "Integrated reception and waiting layout.",
  },
  {
    image: clinicInternalImage,
    title: "Clinical Interior",
    description: "Bright and sterile treatment environment.",
  },
  
  {
    image: clinicImageOne,
    title: "Inside View I",
    description: "Calm interior styling and clear workflow.",
  },
  {
    image: clinicImageThree,
    title: "Inside View II",
    description: "Balanced lighting and patient comfort zones.",
  },
  {
    image: clinicImageFive,
    title: "Inside View III",
    description: "Clinical area with minimalist design language.",
  },
  {
    image: aboutClinicOneImage,
    title: "Clinic Space A",
    description: "Team and patient interaction area.",
  },
  {
    image: aboutClinicTwoImage,
    title: "Clinic Space B",
    description: "Expanded interior for smooth movement.",
  },
];

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
};

const itemReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const cardReveal = {
  hidden: (index: number) => ({
    opacity: 0,
    y: 20,
    x: index % 2 === 0 ? -40 : 40,
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const viewport = { once: true, amount: 0.12 };

export default function ClinicGallery() {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  return (
    <div className="min-h-screen bg-[#f2f4f6] text-slate-900">
      <Navbar />

      <section className="relative isolate flex min-h-[52vh] items-center overflow-hidden bg-black pt-20 sm:min-h-[72vh] sm:items-end sm:pt-32">
        <div className="absolute inset-0 -z-10">
          <img
            src={clinicOutsideImage}
            alt="Atlas Dental clinic exterior"
            className="h-full w-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.12),transparent_46%),radial-gradient(circle_at_82%_28%,rgba(56,189,248,0.18),transparent_42%),linear-gradient(120deg,#020617_0%,#000000_50%,#111827_100%)]" />
          <div className="absolute -left-24 top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-[-8rem] right-[-5rem] h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionReveal}
          className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 sm:pb-20 lg:px-8"
        >
          <motion.div variants={itemReveal} className="max-w-4xl text-white">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/75">Atlas Dental Spaces</p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              Clinic Gallery
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
              Explore our complete clinic environment with a full visual walkthrough of reception, lounge, and treatment areas.
            </p>
            <div className="mt-7 h-[2px] w-28 bg-gradient-to-r from-white/90 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      <section className="-mt-4 pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={sectionReveal}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {galleryItems.map((item, index) => (
              <motion.button
                key={item.title}
                type="button"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardReveal}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.995 }}
                onClick={() => setActiveImage(item)}
                className="group overflow-hidden rounded-2xl shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition-shadow hover:shadow-[0_16px_32px_rgba(15,23,42,0.15)]"
              >
                <div className="relative aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 px-4 py-10 backdrop-blur-sm"
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 16 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="relative w-full max-w-6xl overflow-hidden rounded-2xl border border-white/20 bg-slate-900"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="absolute right-3 top-3 z-10 rounded-full bg-black/60 p-2 text-white transition-colors hover:bg-black/80"
                aria-label="Close image preview"
              >
                <X className="h-5 w-5" />
              </button>
              <img src={activeImage.image} alt={activeImage.title} className="max-h-[80vh] w-full bg-black object-contain p-4 sm:p-6" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <SiteFooter />
    </div>
  );
}
