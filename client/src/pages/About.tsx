import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeader } from "@/components/SectionHeader";
import { Award, CheckCircle2, Heart, ShieldCheck, Users } from "lucide-react";
import aboutClinicImage from "@/assets/clinic waiting area.jpeg";
import aboutTeamImage from "@/assets/clinic waiting area 2.jpeg";
import drMaazQureshiImage from "@/assets/drmaazqureshi.jpg";
import drSanaKhanImage from "@/assets/Dr. Sana Khan.jpg";
import drSaadSaudImage from "@/assets/drsaadsaud.jpg";

const values = [
  {
    title: "Clinical Excellence",
    description: "Every treatment plan is built on evidence-based dentistry and specialist-led execution.",
    icon: Award,
  },
  {
    title: "Patient-Centered Care",
    description: "We design every visit around comfort, transparency, and clear communication.",
    icon: Heart,
  },
  {
    title: "Safety Protocols",
    description: "Strict sterilization and quality checks are embedded in our daily operations.",
    icon: ShieldCheck,
  },
  {
    title: "Collaborative Team",
    description: "Our multidisciplinary specialists coordinate care so patients get seamless outcomes.",
    icon: Users,
  },
];

const teamHighlights = [
  {
    name: "Dr. Maaz Rasul Qureshi",
    role: "Consultant Prosthodontist",
    image: drMaazQureshiImage,
  },
  {
    name: "Dr. Sana Khan",
    role: "General Dentist",
    image: drSanaKhanImage,
  },
  {
    name: "Dr. Saad Saud",
    role: "Consultant Orthodontist",
    image: drSaadSaudImage,
  },
];

const stats = [
  { label: "Years Serving Community", value: "10+" },
  { label: "Specialists In-House", value: "8+" },
  { label: "Patients Treated", value: "5000+" },
  { label: "Focus on Preventive Care", value: "100%" },
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

export default function About() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="pt-32 pb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionReveal}
          className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"
        >
          <motion.div variants={itemReveal}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-600">Who We Are</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              A Multidisciplinary Dental Team Focused on Better Outcomes
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Atlas Dental was built to deliver complete oral healthcare in one place. From preventive checkups to
              specialist procedures, we combine modern diagnostics with human-centered care.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-none bg-black px-8 py-6 text-sm font-bold uppercase tracking-wide text-white hover:bg-black/90">
                <a href="/contact">Book Appointment</a>
              </Button>
              <Button asChild variant="outline" className="rounded-none border-slate-900 px-8 py-6 text-sm font-bold uppercase tracking-wide">
                <a href="/services">Explore Services</a>
              </Button>
            </div>
          </motion.div>

          <motion.div variants={itemReveal} className="grid grid-cols-2 gap-4">
            <img src={aboutClinicImage} alt="Clinic interior" className="h-72 w-full rounded-2xl object-cover object-center" />
            <img src={aboutTeamImage} alt="Dental team area" className="mt-10 h-72 w-full rounded-2xl object-cover object-center" />
          </motion.div>
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
          <motion.div variants={itemReveal}>
            <SectionHeader
              title="Our Core Values"
              subtitle="A modern clinic culture built on quality, empathy, and consistency."
            />
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <motion.article
                key={value.title}
                variants={itemReveal}
                whileHover={{ y: -5 }}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-white">
                  <value.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{value.description}</p>
              </motion.article>
            ))}
          </div>
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
            <SectionHeader title="Team Highlights" subtitle="Experienced specialists committed to trusted care." />
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {teamHighlights.map((member) => (
              <motion.article
                key={member.name}
                variants={itemReveal}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="h-72 bg-slate-100">
                  <img src={member.image} alt={member.name} className="h-full w-full object-contain object-center" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="mt-2 text-slate-600">{member.role}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <CheckCircle2 className="h-4 w-4" /> Atlas Specialist
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={sectionReveal}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={itemReveal} className="rounded-xl border border-white/15 bg-white/5 p-6">
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="mt-2 text-sm text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <SiteFooter />
    </div>
  );
}
