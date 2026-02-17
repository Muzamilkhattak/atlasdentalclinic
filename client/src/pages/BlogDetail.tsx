import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, CheckCircle2, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { getBlogPostBySlug } from "@/data/blogPosts";

type BlogDetailProps = {
  slug: string;
};

const sectionReveal = {
  hidden: { opacity: 1, y: 0 },
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
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const viewport = { once: true, amount: 0.2 };

export default function BlogDetail({ slug }: BlogDetailProps) {
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white text-slate-900">
        <Navbar />
        <section className="pb-24 pt-36">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">Article Not Found</p>
            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">This blog article is not available.</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
              Return to the blog page and choose another patient guide.
            </p>
            <Button asChild className="mt-8 rounded-none bg-black px-8 py-6 text-sm font-bold uppercase tracking-wide text-white hover:bg-black/90">
              <a href="/blog">Back to Blog</a>
            </Button>
          </div>
        </section>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden bg-slate-950 pb-24 pt-32 text-white">
        <div className="absolute inset-0 z-0">
          <img src={post.coverImage} alt={post.title} className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-cyan-900/55" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionReveal}
          className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <motion.p variants={itemReveal} className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-200">
            Atlas Dental Patient Guide
          </motion.p>
          <motion.h1 variants={itemReveal} className="mt-4 max-w-5xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {post.title}
          </motion.h1>
          <motion.p variants={itemReveal} className="mt-6 max-w-4xl text-lg text-slate-100">
            {post.subtitle}
          </motion.p>
          <motion.div variants={itemReveal} className="mt-8 flex flex-wrap gap-3">
            {post.medicallyReviewed && (
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.08em]">
                Medically Reviewed
              </span>
            )}
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.08em]">
              <CalendarDays className="h-4 w-4" />
              Last Updated {post.lastUpdated}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.08em]">
              <Clock3 className="h-4 w-4" />
              {post.readTime}
            </span>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-16">
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={sectionReveal}
          className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"
        >
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <div className="space-y-4">
              {post.intro.map((paragraph) => (
                <motion.p key={paragraph} variants={itemReveal} className="text-lg leading-relaxed text-slate-700">
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>
        </motion.article>
      </section>

      <section className="pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={sectionReveal}
          className="mx-auto max-w-5xl space-y-8 px-4 sm:px-6 lg:px-8"
        >
          {post.sections.map((section) => (
            <motion.article
              key={section.id}
              variants={itemReveal}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10"
            >
              <h2 className="text-3xl font-bold text-slate-900">{section.title}</h2>

              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-base leading-relaxed text-slate-700">
                  {paragraph}
                </p>
              ))}

              {section.quickFact && (
                <div className="mt-5 rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.08em] text-cyan-800">Quick Fact</p>
                  <p className="mt-1 text-sm leading-relaxed text-cyan-900">{section.quickFact}</p>
                </div>
              )}

              {section.bullets && (
                <ul className="mt-5 space-y-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" />
                      <span className="text-sm leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.orderedBullets && (
                <ol className="mt-5 space-y-3">
                  {section.orderedBullets.map((bullet, index) => (
                    <li key={bullet} className="flex items-start gap-3 text-slate-700">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-900 text-[11px] font-bold text-white">
                        {index + 1}
                      </span>
                      <span className="text-sm leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ol>
              )}

              {section.table && (
                <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        {section.table.headers.map((header) => (
                          <th key={header} className="px-4 py-3 text-left text-xs font-bold uppercase tracking-[0.08em]">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {section.table.rows.map((row) => (
                        <tr key={`${section.id}-${row[0]}`}>
                          {row.map((cell) => (
                            <td key={cell} className="px-4 py-3 align-top text-sm leading-relaxed text-slate-700">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {section.contextNote && (
                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm leading-relaxed text-slate-700">{section.contextNote}</p>
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="bg-[#eef3f7] py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={sectionReveal}
          className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={itemReveal} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-4">
              {post.faqs.map((faq) => (
                <article key={faq.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-base font-semibold text-slate-900">Q: {faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">A: {faq.answer}</p>
                </article>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={sectionReveal}
          className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"
        >
          <motion.article variants={itemReveal} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <h2 className="text-3xl font-bold">Conclusion</h2>
            <div className="mt-5 space-y-4">
              {post.conclusion.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-slate-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.article>

          <motion.article variants={itemReveal} className="mt-8 rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h3 className="text-3xl font-bold">{post.ctaTitle}</h3>
                <p className="mt-4 max-w-2xl text-slate-200">{post.ctaDescription}</p>
              </div>
              <Button asChild className="rounded-none bg-cyan-700 px-8 py-6 text-sm font-bold uppercase tracking-wide text-white hover:bg-cyan-800">
                <a href="/contact" className="inline-flex items-center gap-2">
                  Book Appointment <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.article>
        </motion.div>
      </section>

      <SiteFooter />
    </div>
  );
}
