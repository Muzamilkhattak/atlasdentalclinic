import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  Microscope,
  ShieldCheck,
  Sparkles,
  Scissors,
  Stethoscope,
  UserRoundCheck,
} from "lucide-react";
import clinicDental from "@/assets/clinic dental machine.jpeg";
import generalDentistryImage from "@/assets/General Dentistry.png";
import orthodonticsImage from "@/assets/Orthodontics.png";
import oralSurgeryImage from "@/assets/Oral Surgery.png";
import cosmeticDentistryImage from "@/assets/Cosmetic Dentistry.png";
import pediatricDentistryImage from "@/assets/Pediatric Dentistry.png";
import dentalImplantsImage from "@/assets/Dental Implants.png";
import serviceRootCanalImage from "@/assets/clinic  reception and waiting area.jpeg";
import servicesHeroImage from "@/assets/services hero.png";

const specialties = [
  {
    slug: "general-dentistry",
    title: "General Dentistry",
    description: "Routine exams, professional cleaning, and preventive plans for long-term oral health.",
    icon: Stethoscope,
    image: generalDentistryImage,
  },
  {
    slug: "cosmetic-dentistry",
    title: "Prosthodontics",
    description: "Restorative and replacement-focused treatment to rebuild function, comfort, and smile confidence.",
    icon: Sparkles,
    image: cosmeticDentistryImage,
  },
  {
    slug: "orthodontics",
    title: "Orthodontics",
    description: "Braces and aligners designed for functional bite correction and confident smiles.",
    icon: UserRoundCheck,
    image: orthodonticsImage,
  },
  {
    slug: "oral-surgery",
    title: "Oral Surgery",
    description: "Precision extractions and surgical interventions with comfort-focused protocols.",
    icon: Scissors,
    image: oralSurgeryImage,
  },
  {
    slug: "periodontics",
    title: "Periodontology",
    description: "Targeted gum-health diagnosis and treatment for long-term periodontal stability.",
    icon: ShieldCheck,
    image: clinicDental,
  },
  {
    slug: "operative-dentistry",
    title: "Operative Dentistry",
    description: "Conservative tooth-restoration procedures to repair decay and preserve natural structure.",
    icon: CheckCircle2,
    image: serviceRootCanalImage,
  },
  {
    slug: "endodontics",
    title: "Endodontics",
    description: "Root canal therapy and advanced tooth-saving treatments using modern diagnostics.",
    icon: Microscope,
    image: serviceRootCanalImage,
  },
  {
    slug: "pediatric-dentistry",
    title: "Paediatric Dentistry",
    description: "Gentle dental care for children with behavior-friendly and preventive-first methods.",
    icon: Heart,
    image: pediatricDentistryImage,
  },
  {
    slug: "dental-implants",
    title: "Dental Implantology",
    description: "Long-term implant treatment planning and restoration for missing teeth.",
    icon: CheckCircle2,
    image: dentalImplantsImage,
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
          initial="hidden"
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
            <Button asChild variant="outline" className="rounded-none border-slate-900 bg-white/70 px-8 py-6 text-sm font-bold uppercase tracking-wide">
              <a href="/about">Meet Our Team</a>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24">
        <motion.div
          initial="hidden"
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
          initial="hidden"
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
