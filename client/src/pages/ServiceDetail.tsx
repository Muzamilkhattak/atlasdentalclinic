import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock3, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getServiceDetailBySlug, serviceDetails } from "@/data/serviceDetails";

type ServiceDetailProps = {
  slug: string;
};

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
};

const itemReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const viewport = { once: true, amount: 0.2 };

export default function ServiceDetail({ slug }: ServiceDetailProps) {
  const service = getServiceDetailBySlug(slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-white text-slate-900">
        <Navbar />
        <section className="pt-36 pb-24">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">Service Not Found</p>
            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">This service page is not available.</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
              Please go back to our services overview and choose another treatment.
            </p>
            <Button asChild className="mt-8 rounded-none bg-black px-8 py-6 text-sm font-bold uppercase tracking-wide text-white hover:bg-black/90">
              <a href="/services">Back to Services</a>
            </Button>
          </div>
        </section>
        <SiteFooter />
      </div>
    );
  }

  const relatedServices = serviceDetails.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden bg-slate-950 pb-24 pt-32 text-white">
        <div className="absolute inset-0 z-0">
          <img src={service.heroImage} alt={service.title} loading="eager" fetchPriority="high" decoding="async" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/75 to-cyan-900/60" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionReveal}
          className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <motion.p variants={itemReveal} className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-200">
            Atlas Dental Services
          </motion.p>
          <motion.h1 variants={itemReveal} className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {service.title}
          </motion.h1>
          <motion.p variants={itemReveal} className="mt-6 max-w-3xl text-lg text-slate-100">
            {service.shortDescription}
          </motion.p>
          <motion.div variants={itemReveal} className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-none bg-cyan-700 px-8 py-6 text-sm font-bold uppercase tracking-wide text-white hover:bg-cyan-800">
              <a href="/contact">Book Consultation</a>
            </Button>
            
          </motion.div>
        </motion.div>
      </section>

      <section className="-mt-12 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Session Time</p>
              <p className="mt-2 text-lg font-bold text-slate-900">{service.duration}</p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Visit Frequency</p>
              <p className="mt-2 text-lg font-bold text-slate-900">{service.visitPlan}</p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Comfort</p>
              <p className="mt-2 text-lg font-bold text-slate-900">{service.comfortLevel}</p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Recovery</p>
              <p className="mt-2 text-lg font-bold text-slate-900">{service.recovery}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={sectionReveal}
          className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8"
        >
          <motion.article variants={itemReveal} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <h2 className="text-3xl font-bold">Service Overview</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">{service.intro}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-slate-50 p-5">
                <h3 className="flex items-center gap-2 text-base font-bold text-slate-900">
                  <Stethoscope className="h-5 w-5" /> What This Includes
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  {service.treatments.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-slate-50 p-5">
                <h3 className="flex items-center gap-2 text-base font-bold text-slate-900">
                  <HeartPulse className="h-5 w-5" /> Best For
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  {service.idealFor.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>

          <motion.article variants={itemReveal} className="rounded-3xl border border-slate-200 bg-[#f5f8fb] p-8 shadow-sm md:p-10">
            <h2 className="text-2xl font-bold">Your Treatment Journey</h2>
            <div className="mt-6 space-y-5">
              {service.process.map((phase, index) => (
                <div key={phase.step} className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Step {index + 1}</p>
                  <h3 className="mt-1 text-lg font-bold text-slate-900">{phase.step}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{phase.detail}</p>
                </div>
              ))}
            </div>
          </motion.article>
        </motion.div>
      </section>

      <section className="bg-[#eef3f7] py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={sectionReveal}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={itemReveal}>
            <SectionHeader title="Frequently Asked Questions" subtitle="Quick answers to common concerns about this treatment." />
          </motion.div>
          <motion.div variants={itemReveal} className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-base font-semibold text-slate-900 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-slate-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
          <motion.div variants={itemReveal} className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-bold">Ready to Schedule Your {service.title} Consultation?</h2>
                <p className="mt-4 max-w-2xl text-slate-200">
                  Share your concern and preferred timing. Our team will confirm your appointment with the right specialist.
                </p>
              </div>
              <Button asChild className="rounded-none bg-cyan-700 px-8 py-6 text-sm font-bold uppercase tracking-wide text-white hover:bg-cyan-800">
                <a href="/contact" className="inline-flex items-center gap-2">
                  Book Appointment <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={sectionReveal}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={itemReveal}>
            <SectionHeader title="Explore Other Services" subtitle="Discover other specialist treatments available at Atlas Dental." />
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedServices.map((item) => (
              <motion.article
                key={item.slug}
                variants={itemReveal}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="h-44 overflow-hidden">
                  <img src={item.heroImage} alt={item.title} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.shortDescription}</p>
                  <a href={`/services/${item.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-900">
                    View Details <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <SiteFooter />
    </div>
  );
}
