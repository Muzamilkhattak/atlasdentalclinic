import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema, type ContactFormValues } from "@/lib/contactFormSchema";
import clinicReception from "@/assets/clinic reception.jpeg";

const CONTACT_EMAIL = "atlasdentalpk@gmail.com";
const FORM_SUBMIT_ENDPOINT = `https://formsubmit.co/${CONTACT_EMAIL}`;
const CONTACT_PHONE_LINK = "tel:+923035889888";
const CONTACT_PHONE_DISPLAY = "0303 5889888";
const CONTACT_WHATSAPP_LINK = `https://wa.me/923035889888?text=${encodeURIComponent(
  "Hello Atlas Dental, I want to discuss my dental concern."
)}`;

const contactCards = [
  {
    title: "Call Us",
    lines: [{ text: CONTACT_PHONE_DISPLAY, href: CONTACT_PHONE_LINK }],
    icon: Phone,
  },
  {
    title: "Email",
    lines: [{ text: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` }],
    icon: Mail,
  },
  {
    title: "Location",
    lines: [
      { text: "Lower Ground Floor, Plaza 100-C, Spring North Commercial" },
      { text: "Bahria Town Phase 7, Bahria Town Intellectual Village, Rawalpindi, 46620" },
    ],
    icon: MapPin,
  },
  {
    title: "Working Hours",
    lines: [{ text: "Mon - Sat: 2:00 pM - 9:00 PM" }, { text: "Sun: closed" }],
    icon: Clock3,
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
      staggerChildren: 0.1,
    },
  },
};

const itemReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const viewport = { once: true, amount: 0.2 };

export default function Contact() {
  const { toast } = useToast();
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [, setLocation] = useLocation();

  const defaultFormValues: ContactFormValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "General Query",
  };

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: defaultFormValues,
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmittingForm(true);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("subject", data.subject);
      formData.append("message", data.message);
      formData.append("_subject", `Atlas Dental - ${data.subject}`);
      formData.append("_captcha", "false");

      const response = await fetch(FORM_SUBMIT_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit message");
      }

      form.reset(defaultFormValues);
      setLocation("/thank-you");
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit message",
        variant: "destructive",
      });
    } finally {
      setIsSubmittingForm(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24 text-white">
        <div className="absolute inset-0 z-0">
          <img src={clinicReception} alt="Atlas Dental contact" loading="eager" fetchPriority="high" decoding="async" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-900/70 to-cyan-900/70" />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionReveal}
          className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <motion.p variants={itemReveal} className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-200">
            Contact Atlas Dental
          </motion.p>
          <motion.h1 variants={itemReveal} className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Book your Appointment using WhatsApp
          </motion.h1>
          <motion.p variants={itemReveal} className="mt-6 max-w-2xl text-lg text-slate-100">
            Reach us by phone, email, or use the contatc form below for any query . We will connect you with the right specialist quickly.
          </motion.p>
          <motion.div variants={itemReveal} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="h-12 rounded-none bg-[#25D366] px-8 text-sm font-bold uppercase tracking-wide text-white hover:bg-[#1fb458]">
              <a href={CONTACT_WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Us
              </a>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-none border-white/80 bg-white/10 px-8 text-sm font-bold uppercase tracking-wide text-white hover:bg-white/20">
              <a href={CONTACT_PHONE_LINK}>
                <Phone className="mr-2 h-4 w-4" /> Call Now
              </a>
            </Button>
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((item) => (
              <motion.article
                key={item.title}
                variants={itemReveal}
                className="rounded-xl border border-cyan-100 bg-gradient-to-b from-white to-cyan-50/40 p-6 shadow-sm"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-cyan-700 text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-bold">{item.title}</h2>
                <div className="mt-3 space-y-1 text-sm text-slate-600">
                  {item.lines.map((line) => (
                    <p key={line.text}>
                      {"href" in line ? (
                        <a
                          href={line.href}
                          target={line.href.startsWith("mailto:") ? "_blank" : undefined}
                          rel={line.href.startsWith("mailto:") ? "noopener noreferrer" : undefined}
                          className="hover:underline"
                        >
                          {line.text}
                        </a>
                      ) : (
                        line.text
                      )}
                    </p>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="bg-gradient-to-b from-[#eef4f7] via-[#f7fbfd] to-[#f2f6f8] py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={sectionReveal}
          className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"
        >
          <motion.div variants={itemReveal} className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100">
            <h3 className="text-2xl font-bold font-display mb-2">Send a General Query</h3>
            <p className="mb-6 text-sm text-slate-600">Share your question and our team will get back to you.</p>

            <Form {...form}>
              <form action={FORM_SUBMIT_ENDPOINT} method="POST" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="subject" value="General Query" />
                <input
                  type="hidden"
                  name="_subject"
                  value="Atlas Dental - General Query"
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="h-12 border-slate-200 bg-slate-50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" className="h-12 bg-slate-50 border-slate-200" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="+92..." className="h-12 bg-slate-50 border-slate-200" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Query</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Type your general query..."
                          className="min-h-[120px] bg-slate-50 border-slate-200 resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full h-14 text-lg bg-black hover:bg-black/80 rounded-xl"
                  disabled={isSubmittingForm}
                >
                  {isSubmittingForm ? "Sending..." : "Send Query"}
                </Button>
              </form>
            </Form>
          </motion.div>

          <motion.div variants={itemReveal} className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
              <h2 className="text-3xl font-bold">Visit Our Clinic</h2>
              <p className="mt-3 text-slate-200">
                Conveniently located in Bahria Town with easy parking and a comfortable waiting area.
              </p>
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <iframe
                title="Atlas Dental location map"
                width="100%"
                height="420"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.4007600882856!2d73.0847816!3d33.5169646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf8ee92ec4e3%3A0xd5613671c683ea39!2sAtlas%20Dental!5e0!3m2!1sen!2s!4v1770884755406!5m2!1sen!2s"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      <SiteFooter />
    </div>
  );
}
