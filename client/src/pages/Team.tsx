import { motion } from "framer-motion";
import { ArrowRight, Heart, Microscope, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { DoctorCard } from "@/components/DoctorCard";
import { Button } from "@/components/ui/button";
import drIrfanAhmedImage from "@/assets/drirfanimage.png";
import drMussabIrfanImage from "@/assets/Dr. Mussab Irfan.jpg";
import drSanaKhanImage from "@/assets/drsanaprofile.jpeg";
import drSaadSaudImage from "@/assets/drsaadsaud.jpg";
import drMaazQureshiImage from "@/assets/DrMaazQureshiprofile.jfif";

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

const teamMembers = [
  {
    name: "Dr. Maaz Rasul Qureshi",
    specialty: "Consultant Prosthodontist",
    imageUrl: drMaazQureshiImage,
    qualifications: "BDS, FCPS, CHM-PS&QA",
    certification: "C-Restorative Dentistry",
    role: "CEO",
  },
  {
    name: "Dr. Sana Khan",
    specialty: "General Dentist",
    imageUrl: drSanaKhanImage,
    qualifications: "BDS, MSPH",
    certification: "Public Health Specialist",
    role: "",
  },
  {
    name: "Dr. Saad Saud",
    specialty: "Consultant Orthodontist",
    imageUrl: drSaadSaudImage,
    qualifications: "BDS, FCPS, C-Orthodontics",
    certification: "",
    role: "",
  },
  {
    name: "Dr. Mussab Irfan",
    specialty: "Consultant Operative Dentistry & Endodontist",
    imageUrl: drMussabIrfanImage,
    qualifications: "BDS, FCPS, C-Endodontics",
    certification: "",
    role: "",
  },
  {
    name: "Dr. Irfan Ahmed",
    specialty: "Consultant Oral & Maxillofacial Surgeon",
    imageUrl: drIrfanAhmedImage,
    qualifications: "BDS, FCPS",
    certification: "",
    role: "",
  },
];

const carePrinciples = [
  {
    icon: ShieldCheck,
    title: "Clinical Safety",
    description: "Sterilization-first workflows with quality checks at every treatment stage.",
  },
  {
    icon: Microscope,
    title: "Precision Dentistry",
    description: "Diagnosis and procedures supported by modern equipment and specialist planning.",
  },
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description: "Clear communication, comfort-focused visits, and treatment transparency.",
  },
];

export default function Team() {
  return (
    <div className="min-h-screen bg-[#f4f5f7] text-slate-900">
      <Navbar />

      <section className="relative isolate overflow-hidden bg-black pb-20 pt-32 sm:pb-24 sm:pt-36">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-[-8rem] top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-[-6rem] right-[-4rem] h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.12),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.18),transparent_40%),linear-gradient(130deg,#020617_0%,#000000_45%,#111827_100%)]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionReveal}
          className="mx-auto max-w-7xl px-4 text-white sm:px-6 lg:px-8"
        >
          <motion.p variants={itemReveal} className="text-xs font-bold uppercase tracking-[0.26em] text-white/75">
            Atlas Dental
          </motion.p>
          <motion.h1 variants={itemReveal} className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Our Specialist Team
          </motion.h1>
          <motion.p variants={itemReveal} className="mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
            Meet our multidisciplinary consultants delivering advanced dental care under one roof in Bahria Town,
            Rawalpindi.
          </motion.p>

        
        </motion.div>
      </section>

      <section className="pb-24 pt-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={sectionReveal}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={itemReveal} className="mb-12 text-center">
            <h2 className="text-4xl font-bold font-display text-slate-900">Meet The Doctors</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Highly qualified consultants with focused expertise across restorative, surgical, and preventive care.
            </p>
          </motion.div>

          <div className="grid justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {teamMembers.map((member) => (
              <motion.div key={member.name} variants={itemReveal} className="w-full">
                <DoctorCard
                  name={member.name}
                  imageUrl={member.imageUrl}
                  specialty={member.specialty}
                  qualifications={member.qualifications}
                  certification={member.certification}
                  role={member.role}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="bg-white py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={sectionReveal}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={itemReveal} className="grid gap-6 lg:grid-cols-3">
            {carePrinciples.map((principle) => (
              <article key={principle.title} className="rounded-2xl border border-slate-200 bg-[#f7f8fa] p-6 shadow-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-black text-white">
                  <principle.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{principle.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{principle.description}</p>
              </article>
            ))}
          </motion.div>

          <motion.div variants={itemReveal} className="mt-12 flex justify-center">
            <Button asChild className="rounded-none bg-black px-10 py-6 text-sm font-bold uppercase tracking-wide text-white hover:bg-black/90">
              <a href="/contact" className="inline-flex items-center gap-2">
                Book Consultation <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <SiteFooter />
    </div>
  );
}
