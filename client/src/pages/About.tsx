import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeader } from "@/components/SectionHeader";
import { Award, CheckCircle2, Heart, ShieldCheck, Users } from "lucide-react";
import aboutClinicImage from "@/assets/clinic waiting area.jpeg";
import aboutTeamImage from "@/assets/clinic waiting area 2.jpeg";
import drMaazQureshiImage from "@/assets/DrMaazQureshiprofile.jfif";
import drSanaKhanImage from "@/assets/drsanaprofile.jfif";
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
  { label: "Satisfied patients", value: "5000+" },
  { label: "Focus on Preventive Care", value: "100%" },
];

const ceoCredentials = [
  "FCPS in Prosthodontics",
  "Advanced Certification in Restorative Dentistry",
  "Hospital Management, Patient Safety & Quality Assurance",
  "Assistant Professor & Consultant at Fauji Foundation College of Dentistry/Hospital",
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
const ABOUT_HERO_TEXT = "About Us";

export default function About() {
  const [typedHeroText, setTypedHeroText] = useState("");

  useEffect(() => {
    if (typedHeroText.length >= ABOUT_HERO_TEXT.length) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setTypedHeroText(ABOUT_HERO_TEXT.slice(0, typedHeroText.length + 1));
    }, 110);

    return () => clearTimeout(timeoutId);
  }, [typedHeroText]);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="pt-24">
        <div className="relative isolate h-[220px] overflow-hidden bg-black sm:h-[280px] lg:h-[340px]">
          <div className="absolute inset-0 z-20 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-center text-4xl font-bold uppercase tracking-[0.12em] text-white sm:text-5xl lg:text-6xl">
              {typedHeroText}
              <span className="ml-1 inline-block animate-pulse">|</span>
            </h1>
          </div>
        </div>
      </section>

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
            <p className="mt-6 max-w-2xl text-lg leading-7 text-slate-600" style={{ textAlign: "justify" }}>
              Atlas Dental is a multi-speciality dental centre in the heart of TwinCities. We are equipped with
              cutting-edge technology and state-of-the-art equipment to provide specialized dental care to our
              patients under one roof. Founded by leading specialists, our clinic has served the TwinCities
              community for over a decade, treating thousands of patients with the highest standards of care and
              sterilization. Atlas Dental was built to deliver complete oral healthcare in one place. From preventive
              checkups to specialist procedures, we combine modern diagnostics with human-centered care.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-none bg-black px-8 py-6 text-sm font-bold uppercase tracking-wide text-white hover:bg-black/90">
                <a href="/contact">Book Appointment</a>
              </Button>
            </div>
          </motion.div>

          <motion.div variants={itemReveal} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-10 lg:self-start">
            <img src={aboutClinicImage} alt="Clinic interior" loading="lazy" decoding="async" className="h-72 w-full rounded-2xl object-cover object-center sm:h-80" />
            <img src={aboutTeamImage} alt="Dental team area" loading="lazy" decoding="async" className="h-72 w-full rounded-2xl object-cover object-center sm:h-80" />
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-slate-50 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={sectionReveal}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={itemReveal} className="relative z-20 mb-16">
            <SectionHeader
              title="CEO & Founder"
              subtitle="Clinical leadership rooted in advanced specialist training, academics, and quality-focused care."
            />
          </motion.div>

          <motion.article
            variants={itemReveal}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="relative z-10 mx-auto mt-24 max-w-4xl rounded-[28px] border border-black bg-white px-6 pb-10 pt-24 text-center shadow-[0_14px_34px_rgba(15,23,42,0.1)] sm:px-10 sm:pt-28"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[38%]">
              <div className="rounded-full border border-black/10 bg-white p-2 shadow-[0_10px_24px_rgba(15,23,42,0.14)]">
                <img
                  src={drMaazQureshiImage}
                  alt="Dr. Maaz Rasul Qureshi"
                  loading="lazy"
                  decoding="async"
                  className="h-32 w-32 rounded-full border border-black/10 bg-white object-contain object-center p-1 shadow-[0_6px_16px_rgba(15,23,42,0.12)] sm:h-40 sm:w-40"
                />
              </div>
            </div>

            <p className="mx-auto inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-600">
              Atlas Dental Leadership
            </p>

            <h3 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Dr. Maaz Rasul Qureshi
            </h3>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-slate-600">
              CEO & Founder, Atlas Dental | Specialist Dentist & Prosthodontist
            </p>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-700">
              Dr. Maaz Rasul Qureshi, the CEO and Founder of Atlas Dental, is a Specialist Dentist and Prosthodontist.
              He possesses multiple postgraduate qualifications, including advanced certification in Restorative
              Dentistry and FCPS in Prosthodontics.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-700">
              Dr. Qureshi has years of clinical and academic experience with multiple accreditations to his name. In
              addition to his clinical qualifications and achievements, he is certified in Hospital Management,
              Patient Safety, and Quality Assurance, which further strengthens the quality of care offered at Atlas
              Dental. He is currently working as Assistant Professor and Consultant at Fauji Foundation College of
              Dentistry/Hospital.
            </p>

            <div className="mx-auto mt-8 grid max-w-3xl gap-3 text-left sm:grid-cols-2">
              {ceoCredentials.map((credential, index) => (
                <motion.span
                  key={credential}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.3, delay: index * 0.07 }}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold leading-relaxed text-slate-700"
                >
                  {credential}
                </motion.span>
              ))}
            </div>
          </motion.article>
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

      {/* <section className="py-24">
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
      </section> */}

      <section className="bg-slate-900 py-16 text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={sectionReveal}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
