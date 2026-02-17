import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";

const sectionReveal = {
  hidden: { opacity: 1, y: 0 },
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
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const viewport = { once: true, amount: 0.2 };

export default function Blog() {
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
            Atlas Dental Blog
          </motion.p>
          <motion.h1 variants={itemReveal} className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Dental Education You Can Trust
          </motion.h1>
          <motion.p variants={itemReveal} className="mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
            Practical guides written for patients, built around specialist clinical experience, and designed to make
            treatment decisions clearer.
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
          <motion.div variants={itemReveal}>
            <SectionHeader
              title="Latest Patient Guides"
              subtitle="Explore reliable dental articles in a clear, reader-friendly format."
            />
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post) => (
              <motion.article
                key={post.slug}
                variants={itemReveal}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {post.medicallyReviewed && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white">
                        Medically Reviewed
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-700">
                      <CalendarDays className="h-3.5 w-3.5" />
                      Updated {post.lastUpdated}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-700">
                      <Clock3 className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold leading-tight text-slate-900">{post.title}</h2>
                  <p className="mt-2 text-sm font-medium text-slate-500">{post.subtitle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{post.cardSummary}</p>

                  <a
                    href={`/blog/${post.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-slate-900"
                  >
                    Read Full Guide <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div variants={itemReveal} className="mt-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h3 className="text-3xl font-bold">Need Personalized Advice?</h3>
                <p className="mt-3 max-w-2xl text-slate-600">
                  Blog content is educational. For symptoms or treatment decisions, book a consultation with our team.
                </p>
              </div>
              <Button asChild className="rounded-none bg-black px-8 py-6 text-sm font-bold uppercase tracking-wide text-white hover:bg-black/90">
                <a href="/contact">Book Consultation</a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <SiteFooter />
    </div>
  );
}
