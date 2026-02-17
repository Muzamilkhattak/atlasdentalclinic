import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Microscope,
  ShieldCheck,
  Sparkles,
  Scissors,
  Stethoscope,
  UserRoundCheck,
} from "lucide-react";
import generalDentistryImage from "@/assets/General Dentistry.png";
import orthodonticsImage from "@/assets/Orthodontics.png";
import cosmeticDentistryImage from "@/assets/Cosmetic Dentistry.png";
import dentalImplantsImage from "@/assets/Dental Implants.png";
import periapicalXraysImage from "@/assets/Periapical Xrays.jpeg";
import toothColouredFillingsImage from "@/assets/Tooth Coloured Fillings.jpeg";
import compositeBondingImage from "@/assets/Composite Bonding.png";
import toothExtractionsImage from "@/assets/tooth extraction.png";
import wisdomToothSurgeryImage from "@/assets/Wisdom Tooth Surgery.jfif";
import rootCanalTreatmentImage from "@/assets/Root Canal Treatment.jfif";
import crownBridgeImage from "@/assets/Crown & Bridge.jfif";
import veneersImage from "@/assets/Veneers.jfif";
import clearAlignersImage from "@/assets/Clear Aligners.jfif";
import removableDenturesImage from "@/assets/Removable Dentures.jpg";
import gumsTreatmentImage from "@/assets/Gums Treatment.jfif";
import servicesHeroImage from "@/assets/services hero.png";

const specialties = [
  {
    slug: "periapical-xrays",
    title: "Periapical Xrays",
    description: "Targeted diagnostic X-rays for accurate evaluation of roots and surrounding tissues.",
    icon: Microscope,
    image: periapicalXraysImage,
  },
  {
    slug: "tooth-coloured-fillings",
    title: "Tooth Coloured Fillings",
    description: "Natural-shade restorations designed to repair cavities conservatively.",
    icon: CheckCircle2,
    image: toothColouredFillingsImage,
  },
  {
    slug: "composite-bonding",
    title: "Composite Bonding",
    description: "Aesthetic bonding to improve shape, close minor gaps, and restore chipped teeth.",
    icon: Sparkles,
    image: compositeBondingImage,
  },
  {
    slug: "tooth-extractions",
    title: "Tooth Extractions",
    description: "Safe extractions with comfort-focused protocols and clear post-op guidance.",
    icon: Scissors,
    image: toothExtractionsImage,
  },
  {
    slug: "wisdom-tooth-surgery",
    title: "Wisdom Tooth Surgery",
    description: "Specialist removal of impacted wisdom teeth with structured recovery planning.",
    icon: Scissors,
    image: wisdomToothSurgeryImage,
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    description: "Long-term implant solutions for single or multiple missing teeth.",
    icon: CheckCircle2,
    image: dentalImplantsImage,
  },
  {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    description: "Tooth-preserving treatment for pulpal infection and deep sensitivity.",
    icon: Microscope,
    image: rootCanalTreatmentImage,
  },
  {
    slug: "crown-bridge",
    title: "Crown & Bridge",
    description: "Custom prosthetic restorations for damaged and missing teeth.",
    icon: Sparkles,
    image: crownBridgeImage,
  },
  {
    slug: "veneers",
    title: "Veneers",
    description: "Cosmetic smile correction using conservative veneer-based treatment.",
    icon: Sparkles,
    image: veneersImage,
  },
  {
    slug: "scaling-polishing",
    title: "Scaling & Polishing",
    description: "Professional cleaning to maintain gum health and remove tartar deposits.",
    icon: Stethoscope,
    image: generalDentistryImage,
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    description: "In-clinic whitening protocols for a brighter and cleaner smile tone.",
    icon: Sparkles,
    image: cosmeticDentistryImage,
  },
  {
    slug: "braces",
    title: "Braces",
    description: "Fixed orthodontic mechanics for bite correction and alignment control.",
    icon: UserRoundCheck,
    image: orthodonticsImage,
  },
  {
    slug: "clear-aligners",
    title: "Clear Aligners",
    description: "Transparent removable aligners for discreet orthodontic treatment.",
    icon: UserRoundCheck,
    image: clearAlignersImage,
  },
  {
    slug: "removable-dentures",
    title: "Removable Dentures",
    description: "Removable prosthetic options designed for comfort and chewing function.",
    icon: CheckCircle2,
    image: removableDenturesImage,
  },
  {
    slug: "gums-treatment",
    title: "Gums Treatment",
    description: "Comprehensive periodontal care for bleeding gums and tissue stability.",
    icon: ShieldCheck,
    image: gumsTreatmentImage,
  },
];

const servicePillars = [
  "Digital diagnostics and treatment planning",
  "Sterilization-first clinical protocols",
  "Multi-specialist collaboration in one clinic",
];

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const itemReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const viewport = { once: true, amount: 0.2 };

export default function Services() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <img src={servicesHeroImage} alt="Atlas Dental services" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/92" />
        </div>
        <motion.div
          initial="visible"
          animate="visible"
          variants={sectionReveal}
          className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <motion.p variants={itemReveal} className="text-xs font-bold uppercase tracking-[0.25em] text-slate-600">
            Atlas Dental
          </motion.p>
          <motion.h1 variants={itemReveal} className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Services Built Around Clinical Precision and Patient Comfort
          </motion.h1>
          <motion.p variants={itemReveal} className="mt-6 max-w-2xl text-lg text-slate-600">
            Explore comprehensive dental treatments delivered by specialists, all under one roof in Bahria Town.
          </motion.p>
          <motion.div variants={itemReveal} className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-none bg-black px-8 py-6 text-sm font-bold uppercase tracking-wide text-white hover:bg-black/90">
              <a href="/contact">Book Appointment</a>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24">
        <motion.div
          initial="visible"
          whileInView="visible"
          viewport={viewport}
          variants={sectionReveal}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={itemReveal}>
            <SectionHeader
              title="Our Specialties"
              subtitle="Evidence-based treatment plans with a modern, patient-first delivery model."
            />
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {specialties.map((service) => (
              <motion.article
                key={service.slug}
                variants={itemReveal}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-white">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
                  <a
                    href={`/services/${service.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-900"
                  >
                    View Details <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="bg-[#efefef] py-20">
        <motion.div
          initial="visible"
          whileInView="visible"
          viewport={viewport}
          variants={sectionReveal}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={itemReveal} className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <h2 className="text-4xl font-bold leading-tight">Why Patients Choose Atlas Dental</h2>
              <p className="mt-4 text-lg text-slate-600">
                Our workflow combines specialist collaboration, transparent communication, and digital precision.
              </p>
              <div className="mt-8 space-y-3">
                {servicePillars.map((pillar) => (
                  <div key={pillar} className="flex items-start gap-3 rounded-lg bg-white p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-900" />
                    <p className="text-sm text-slate-700">{pillar}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold">Ready to Start Your Treatment?</h3>
              <p className="mt-3 text-slate-600">
                Share your concern and our team will schedule the right specialist consultation.
              </p>
              <Button asChild className="mt-8 w-full rounded-none bg-black py-6 text-sm font-bold uppercase tracking-wide text-white hover:bg-black/90">
                <a href="/contact" className="inline-flex items-center justify-center gap-2">
                  Request Consultation <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <SiteFooter />
    </div>
  );
}
