import { useForm } from "react-hook-form";
import { memo, useEffect, useMemo, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Navbar } from "@/components/Navbar";
import { SectionHeader } from "@/components/SectionHeader";
import { ReviewCard } from "@/components/ReviewCard";
import { DoctorCard } from "@/components/DoctorCard";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, Mail, MapPin, CheckCircle2, Stethoscope, Heart, ShieldCheck, ArrowRight, X, Users, Star, UserRoundCheck, Microscope, ClipboardCheck } from "lucide-react";
import { contactFormSchema, type ContactFormValues } from "@/lib/contactFormSchema";
import heroClinicImage from "@/assets/clinic reception.jpeg";
import clinicDental from "@/assets/clinic dental machine.jpeg";
import aboutClinicImage from "@/assets/clinic waiting area.jpeg";
import aboutTeamImage from "@/assets/clinic waiting area 2.jpeg";
import serviceCosmeticImage from "@/assets/clinic dental machine.jpeg";
import serviceRootCanalImage from "@/assets/clinic  reception and waiting area.jpeg";
import generalDentistryImage from "@/assets/General Dentistry.png";
import orthodonticsImage from "@/assets/Orthodontics.png";
import oralSurgeryImage from "@/assets/Oral Surgery.png";
import cosmeticDentistryImage from "@/assets/Cosmetic Dentistry.png";
import pediatricDentistryImage from "@/assets/Pediatric Dentistry.png";
import dentalImplantsImage from "@/assets/Dental Implants.png";
import drIrfanAhmedImage from "@/assets/DR. irfan ahmed.jpg";
import drMussabIrfanImage from "@/assets/Dr. Mussab Irfan.jpg";
import drSanaKhanImage from "@/assets/Dr. Sana Khan.jpg";
import drSaadSaudImage from "@/assets/drsaadsaud.jpg";
import drMaazQureshiImage from "@/assets/drmaazqureshi.jpg";
import aboutus1 from "@/assets/about us 1.jpg";
import aboutus2 from "@/assets/about us 2.webp";

const HERO_TYPED_TEXT = "Dental Care";
const ATLAS_PHONE_LINK = "tel:+923035889888";
const ATLAS_PHONE_ALT_LINK = "tel:+92511234567";
const ATLAS_REVIEWS_LINK = "https://www.google.com/maps/search/?api=1&query=Atlas+Dental+Rawalpindi";
const CONTACT_EMAIL = "atlasdentalpk@gmail.com";
const FORM_SUBMIT_ENDPOINT = `https://formsubmit.co/${CONTACT_EMAIL}`;

type Testimonial = {
  name: string;
  subtitle: string;
  text: string;
  rating?: number;
};

const TestimonialSlider = memo(function TestimonialSlider({ testimonials }: { testimonials: Testimonial[] }) {
  if (!testimonials.length) {
    return null;
  }

  const loopedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <motion.div
        className="flex w-max transform-gpu py-1"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: testimonials.length * 9,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0,
        }}
        style={{ willChange: "transform" }}
      >
        {loopedTestimonials.map((testimonial, index) => (
          <div key={`${testimonial.name}-${index}`} className="mr-6 w-[320px] shrink-0 sm:w-[360px] lg:w-[400px]">
            <ReviewCard
              name={testimonial.name}
              initial={testimonial.name.charAt(0).toUpperCase()}
              text={testimonial.text}
              subtitle={testimonial.subtitle}
              rating={testimonial.rating ?? 5}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
});

export default function Home() {
  const { toast } = useToast();
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      subject: "General Query",
    },
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

      form.reset({
        name: "",
        email: "",
        phone: "",
        message: "",
        subject: "General Query",
      });

      toast({
        title: "Message Sent",
        description: "Your query has been submitted successfully.",
      });
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

  const approachPillars = [
    {
      icon: Users,
      title: "Multidisciplinary Approach",
      description: "Our team of specialists work together to provide comprehensive care tailored to your unique needs.",
    },
    {
      icon: Heart,
      title: "Patient-Centric Care",
      description: "Your comfort and satisfaction are our top priorities. We listen, understand, and deliver personalized treatment.",
    },
    {
      icon: Star,
      title: "Excellence in Quality",
      description: "We maintain the highest standards of clinical excellence using advanced technology and proven techniques.",
    },
  ];

  const approachHighlights = [
    {
      icon: UserRoundCheck,
      title: "Experienced Specialists",
      description: "Our team consists of highly qualified dental specialists with years of expertise.",
    },
    {
      icon: Microscope,
      title: "Modern Equipment",
      description: "State-of-the-art technology ensures accurate diagnosis and effective treatment.",
    },
    {
      icon: ClipboardCheck,
      title: "Comprehensive Care",
      description: "All dental services available under one roof for your convenience.",
    },
  ];

  const services = [
    {
      title: "General Dentistry",
      icon: Stethoscope,
    },
    {
      title: "Prosthodontics",
      icon: Star,
    },
    {
      title: "Orthodontics",
      icon: UserRoundCheck,
    },
    {
      title: "Oral Surgery",
      icon: ClipboardCheck,
    },
    {
      title: "Periodontology",
      icon: ShieldCheck,
    },
    {
      title: "Operative Dentistry",
      icon: CheckCircle2,
    },
    {
      title: "Endodontics",
      icon: Microscope,
    },
    {
      title: "Paediatric Dentistry",
      icon: Heart,
    },
    {
      title: "Dental Implantology",
      icon: CheckCircle2,
    },
  ];

  const testimonials = useMemo<Testimonial[]>(() => [
    {
      name: "Naureen Mansoor",
      subtitle: "5 reviews | a year ago",
      text: "I recently went to Atlas Dental for some long ignored dental issues. Dr Maaz Qureshi was very professional, took his time to explain everything and gave me different treatment options with pros and cons in detail. The doctors are very friendly and approachable. On top of excellent treatment, they are punctual and don't make you wait. Keep up the good work.",
    },
    {
      name: "Atta Rasheed",
      subtitle: "Local Guide | 42 reviews | 143 photos | 5 months ago",
      text: "Finding truly skilled and compassionate dentists is very rare, but Dr. Maaz and his whole team proved otherwise. I came here on a friend's recommendation and it was the perfect decision. They solved some of my most complicated dental issues with great professionalism, skill, and care.",
    },
    {
      name: "Ahsan Nawaz Bhatti",
      subtitle: "6 reviews | 6 years ago",
      text: "My father had swollen gums for 2-3 months and every dentist suggested different treatments, which caused confusion and fear. Dr. Maaz identified the actual issue that others missed: a BP medicine side effect. With consultation from the clinic's medical specialist, the medicine was adjusted and the swelling was gone in 15-20 days.",
    },
    {
      name: "Omar Saeed",
      subtitle: "Local Guide | 33 reviews | 11 photos | 3 years ago",
      text: "Dr Maaz Qureshi is very proficient and professional in his work. I am satisfied and recommend others to get treatment from him. The clinic environment is very clean and up to the mark. Staff is very humble and polite too. Get an appointment before visiting to avoid delay.",
    },
    {
      name: "Hamza Bhatti",
      subtitle: "1 review | 6 years ago",
      text: "I did a lot of research and came all the way from Mangla to fix my dental issues. I had bleeding gums and got gum scaling treatment by Dr. Maaz Qureshi. He explained the disease and treatment in detail before starting, and after one week I was problem free. The clinic environment was comfortable and not phobia inducing.",
    },
    {
      name: "Fatimah Javaid",
      subtitle: "2 reviews | 6 years ago",
      text: "I visited Dr. Maaz for excruciating tooth pain. I couldn't sleep all night, and in the morning I needed a dentist urgently. A colleague suggested Dr. Maaz. He managed my pain quickly and completed my treatment in follow-up appointments very comfortably. If you're looking for the best dentist in Islamabad, visit Dr. Maaz's clinic.",
    },
  ], []);

  const serviceCards = [
    {
      slug: "general-dentistry",
      title: "General Dentistry",
      desc: "Routine checkups, cleanings, and preventive care.",
      img: generalDentistryImage,
    },
    {
      slug: "orthodontics",
      title: "Orthodontics",
      desc: "Braces, aligners, and teeth straightening solutions.",
      img: orthodonticsImage,
    },
    {
      slug: "oral-surgery",
      title: "Oral Surgery",
      desc: "Extractions, wisdom teeth removal, and surgical procedures.",
      img: oralSurgeryImage,
    },
    {
      slug: "cosmetic-dentistry",
      title: "Cosmetic Dentistry",
      desc: "Whitening, veneers, and smile makeovers.",
      img: cosmeticDentistryImage,
    },
    {
      slug: "pediatric-dentistry",
      title: "Pediatric Dentistry",
      desc: "Specialized dental care for children and adolescents.",
      img: pediatricDentistryImage,
    },
    {
      slug: "periodontics",
      title: "Periodontics",
      desc: "Gum health treatments, disease prevention, and supportive therapy.",
      img: clinicDental,
    },
    {
      slug: "dental-implants",
      title: "Dental Implants",
      desc: "Permanent tooth replacement solution.",
      img: dentalImplantsImage,
    },
    {
      slug: "endodontics",
      title: "Endodontics",
      desc: "Root canal treatment and advanced tooth-preservation procedures.",
      img: serviceRootCanalImage,
    },
  ];

  const doctors = [
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

  const [hoveredDoctor, setHoveredDoctor] = useState<(typeof doctors)[number] | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<(typeof doctors)[number] | null>(null);
  const [heroTypedText, setHeroTypedText] = useState("");
  const [typingDirection, setTypingDirection] = useState<"forward" | "backward">("forward");

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (typingDirection === "forward") {
      if (heroTypedText.length < HERO_TYPED_TEXT.length) {
        timeoutId = setTimeout(() => {
          setHeroTypedText(HERO_TYPED_TEXT.slice(0, heroTypedText.length + 1));
        }, 90);
      } else {
        timeoutId = setTimeout(() => {
          setTypingDirection("backward");
        }, 1400);
      }
    } else if (heroTypedText.length > 0) {
      timeoutId = setTimeout(() => {
        setHeroTypedText(HERO_TYPED_TEXT.slice(0, heroTypedText.length - 1));
      }, 55);
    } else {
      timeoutId = setTimeout(() => {
        setTypingDirection("forward");
      }, 350);
    }

    return () => clearTimeout(timeoutId);
  }, [heroTypedText, typingDirection]);

  const handleDoctorSelect = (doctor: (typeof doctors)[number]) => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setSelectedDoctor(doctor);
    }
  };

  const sectionReveal = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.12,
      },
    },
  };

  const itemReveal = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const scrollViewport = { once: true, amount: 0.2 };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={clinicDental}
            alt="Modern Dental Clinic"
            className="w-full h-full object-cover object-center scale-[1.02] saturate-110 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/18 to-white/8 sm:bg-gradient-to-r sm:from-white/18 sm:via-white/14 sm:to-white/10 backdrop-blur-[0.6px]"></div>
        </div>

        <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[560px] pt-28 sm:pt-32 lg:pt-36"
          >
            <div className="bg-white/45 backdrop-blur-sm rounded-xl p-4 sm:bg-transparent sm:backdrop-blur-0 sm:rounded-none sm:p-0">
              <h1 className="text-[42px] sm:text-6xl lg:text-[72px] font-bold text-slate-900 leading-[1.05] mb-6 sm:mb-8 font-display tracking-tight">
                Comprehensive{" "}
                <span className="inline-flex min-w-[11ch] items-end">
                  <span>{heroTypedText}</span>
                  <span
                    aria-hidden="true"
                    className="ml-1 inline-block h-[0.88em] w-[2px] bg-slate-900 animate-pulse"
                  />
                </span>{" "}
                in Bahria Town
              </h1>
              <p className="text-base sm:text-xl text-slate-900 mb-8 sm:mb-10 leading-7 sm:leading-relaxed font-sans font-semibold max-w-[620px]">
                Multidisciplinary dental excellence in Phase 7, Rawalpindi. Your smile deserves the best care.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button asChild className="w-full sm:w-auto h-12 px-10 rounded-none text-base font-bold bg-black hover:bg-black/90 text-white transition-all font-sans uppercase tracking-wider">
                  <a href="/contact">Book an Appointment</a>
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto h-12 px-10 rounded-none text-base font-bold border border-slate-900 bg-white/65 hover:bg-white text-slate-900 transition-all font-sans uppercase tracking-wider flex items-center justify-center gap-2">
                  <a href={ATLAS_PHONE_LINK}>
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Bar */}
      <div className="bg-black text-white py-3 text-center text-sm font-medium tracking-wide">
        <div className="flex items-center justify-center gap-2">
          <MapPin className="w-4 h-4" />
          Bahria Town Phase 7, Rawalpindi
        </div>
      </div>

      {/* Patient Reviews */}
      <section id="reviews" className="py-24 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={sectionReveal}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h2 variants={itemReveal} className="text-3xl font-bold font-display text-slate-900 mb-4">Patient Reviews</motion.h2>
          <motion.p variants={itemReveal} className="text-slate-500 mb-12">Trusted by hundreds of satisfied patients</motion.p>
          
          <motion.div variants={itemReveal} className="mb-12">
            <TestimonialSlider testimonials={testimonials} />
          </motion.div>
          
          <Button asChild variant="outline" className="rounded-none border-slate-900 px-8 uppercase text-xs font-bold tracking-widest">
            <a href={ATLAS_REVIEWS_LINK} target="_blank" rel="noopener noreferrer">See All Reviews</a>
          </Button>
        </motion.div>
      </section>

      {/* Specialties Grid */}
      <section id="services" className="py-24 bg-[#efefef]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold font-display text-slate-900">Our Specialties</h2>
            
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={scrollViewport}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`rounded-lg bg-[#e8e8ea] px-6 py-10 text-center ${
                service.title === "Dental Implantology"
                  ? "sm:col-span-2 sm:justify-self-center sm:w-[calc(50%-0.625rem)] lg:col-start-2 lg:col-span-2"
                  : ""
              }`}
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#17191d] text-white">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-[22px] font-semibold text-slate-900">{service.title}</h3>
            </motion.div>
          ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Button asChild className="rounded-none bg-[#17191d] px-10 py-6 text-sm font-bold uppercase tracking-wide text-white hover:bg-black">
              <a href="/contact">BOOK APPOINTMENT</a>
            </Button>
          </div>
        </div>
      </section>

      

      {/* About Section */}
      <section id="about" className="py-24 px-4 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={sectionReveal}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={itemReveal} className="space-y-8">
            <SectionHeader title="About Atlas Dental" alignment="left" className="mb-6" />
            <p className="text-lg text-slate-600 leading-relaxed">
              Atlas Dental is a multi-speciality dental centre in the heart of TwinCities. We are equipped with cutting-edge technology and state-of-the-art equipment to provide specialized dental care to our patients under one roof.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Founded by leading specialists, our clinic has served the TwinCities community for over a decade, treating thousands of patients with the highest standards of care and sterilization.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-slate-100">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                  <Stethoscope />
                </div>
                <h4 className="font-bold">Multidisciplinary</h4>
                <p className="text-sm text-slate-500">All specialists under one roof</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-4">
                  <Heart />
                </div>
                <h4 className="font-bold">Patient Centric</h4>
                <p className="text-sm text-slate-500">Your comfort is our priority</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-4">
                  <CheckCircle2 />
                </div>
                <h4 className="font-bold">Quality First</h4>
                <p className="text-sm text-slate-500">Premium materials & tools</p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={itemReveal} className="grid grid-cols-2 gap-4">
            {/* dental team professional photo */}
            <img 
              src={aboutus1} 
              alt="Doctor working"
              className="rounded-2xl w-full h-64 object-cover mt-12"
            />
            {/* dental consultation friendly */}
            <img 
              src={aboutus2} 
              alt="Team Meeting"
              className="rounded-2xl w-full h-64 object-cover"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Specialists */}
      <section id="team" className="py-24 bg-slate-900 text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={sectionReveal}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={itemReveal} className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display mb-4">Our Specialists</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Meet our team of highly qualified and experienced dental professionals.
            </p>
            <p className="mt-3 text-sm text-slate-500 lg:hidden">Tap any doctor to view full profile</p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
            {doctors.map((doctor) => (
              <motion.div variants={itemReveal} key={doctor.name}>
                <DoctorCard
                  name={doctor.name}
                  imageUrl={doctor.imageUrl}
                  onHoverStart={() => setHoveredDoctor(doctor)}
                  onHoverEnd={() => setHoveredDoctor(null)}
                  onSelect={() => handleDoctorSelect(doctor)}
                />
              </motion.div>
            ))}
          </div>
          <AnimatePresence>
            {hoveredDoctor && (
              <motion.div
                className="pointer-events-none fixed inset-0 z-50 hidden items-center justify-center px-4 lg:flex"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 18, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 18, scale: 0.92 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="w-full max-w-lg overflow-hidden rounded-3xl border border-white/20 bg-slate-900 shadow-xl shadow-black/30"
                >
                  <div className="relative h-[460px]">
                    <img
                      src={hoveredDoctor.imageUrl}
                      alt={hoveredDoctor.name}
                      className="h-full w-full bg-slate-950 object-contain object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/75">Our Specialist</p>
                      <h3 className="text-3xl font-bold font-display leading-tight">{hoveredDoctor.name}</h3>
                      <p className="mt-2 text-base font-semibold text-white/95">{hoveredDoctor.qualifications}</p>
                      <p className="mt-2 text-sm text-white/85">{hoveredDoctor.specialty}</p>
                      {hoveredDoctor.certification ? (
                        <p className="mt-1 text-sm text-white/85">{hoveredDoctor.certification}</p>
                      ) : null}
                      {hoveredDoctor.role ? (
                        <p className="mt-3 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                          {hoveredDoctor.role}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {selectedDoctor && (
              <motion.div
                className="fixed inset-0 z-50 flex items-end bg-black/70 backdrop-blur-sm lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedDoctor(null)}
              >
                <motion.div
                  className="relative max-h-[88vh] w-full overflow-y-auto rounded-t-3xl bg-slate-950"
                  initial={{ y: 60, opacity: 0.9 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 60, opacity: 0.9 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  onClick={(event) => event.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDoctor(null)}
                    className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white"
                    aria-label="Close doctor profile"
                  >
                    <X className="h-5 w-5" />
                  </button>
                  <div className="relative h-[400px]">
                    <img
                      src={selectedDoctor.imageUrl}
                      alt={selectedDoctor.name}
                      className="h-full w-full bg-slate-950 object-contain object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/75">Our Specialist</p>
                      <h3 className="text-2xl font-bold font-display leading-tight">{selectedDoctor.name}</h3>
                      <p className="mt-2 text-sm font-semibold text-white/95">{selectedDoctor.qualifications}</p>
                      <p className="mt-2 text-sm text-white/85">{selectedDoctor.specialty}</p>
                      {selectedDoctor.certification ? (
                        <p className="mt-1 text-sm text-white/85">{selectedDoctor.certification}</p>
                      ) : null}
                      {selectedDoctor.role ? (
                        <p className="mt-3 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                          {selectedDoctor.role}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>


      {/* Services Cards */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Our Services" subtitle="World-class dental treatments tailored to your needs" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={scrollViewport}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group rounded-2xl overflow-hidden shadow-lg border border-slate-100"
            >
              <div className="h-48 overflow-hidden">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.desc}</p>
                <a
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-black cursor-pointer group-hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* Clinic Gallery */}
      <section id="clinic" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={sectionReveal}
        >
          <motion.div variants={itemReveal}>
            <SectionHeader title="Our Clinic" subtitle="Designed for your comfort and safety" />
          </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[500px]">
          {/* clinic reception area modern */}
          <motion.div variants={itemReveal} className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
            <img src={serviceRootCanalImage} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Reception" />
          </motion.div>
          {/* dental chair modern equipment */}
          <motion.div variants={itemReveal} className="col-span-1 row-span-1 rounded-2xl overflow-hidden">
            <img src={serviceCosmeticImage} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Dental Chair" />
          </motion.div>
          {/* waiting area comfortable */}
          <motion.div variants={itemReveal} className="col-span-1 row-span-2 rounded-2xl overflow-hidden">
            <img src={aboutClinicImage} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Waiting Area" />
          </motion.div>
          {/* sterilization room clean */}
          <motion.div variants={itemReveal} className="col-span-1 row-span-1 rounded-2xl overflow-hidden">
            <img src={heroClinicImage} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Sterilization" />
          </motion.div>
        </div>
        <motion.div variants={itemReveal} className="mt-10 flex justify-center">
          <Button asChild className="rounded-none bg-[#17191d] px-10 py-6 text-sm font-bold uppercase tracking-wide text-white hover:bg-black">
            <a href="/clinic-gallery">View Full Gallery</a>
          </Button>
        </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={sectionReveal}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div variants={itemReveal}>
              <h2 className="text-4xl font-bold font-display mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-slate-600">
                      <a href={ATLAS_PHONE_LINK} className="hover:underline">+92 303 5889888</a>
                    </p>
                    <p className="text-slate-600">
                      <a href={ATLAS_PHONE_ALT_LINK} className="hover:underline">+92 51 1234567</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-slate-600">
                      <a href={`mailto:${CONTACT_EMAIL}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{CONTACT_EMAIL}</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Location</h3>
                    <p className="text-slate-600 max-w-xs">
                      Lower Ground Floor, Plaza 100-C, Spring North Commercial, Bahria Town Phase 7, Bahria Town Intellectual Village, Rawalpindi, 46620.
                    </p>
                  </div>
                </div>

                <div className="h-64 rounded-2xl overflow-hidden bg-slate-200 mt-8 relative">
                   <iframe
                    title="Atlas Dental location map"
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.4007600882856!2d73.0847816!3d33.5169646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf8ee92ec4e3%3A0xd5613671c683ea39!2sAtlas%20Dental!5e0!3m2!1sen!2s!4v1770884755406!5m2!1sen!2s"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemReveal} className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100">
              <h3 className="text-2xl font-bold font-display mb-2">Send a General Query</h3>
              <p className="mb-6 text-sm text-slate-600">Share your question and our team will get back to you.</p>
              
              <Form {...form}>
                <form action={FORM_SUBMIT_ENDPOINT} method="POST" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="Atlas Dental - General Query" />
                  <input type="hidden" name="subject" value="General Query" />
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="h-12 bg-slate-50 border-slate-200" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid md:grid-cols-2 gap-6">
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
                          <Textarea placeholder="Type your general query..." className="min-h-[120px] bg-slate-50 border-slate-200 resize-none" {...field} />
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
          </div>
        </motion.div>
      </section>
      <SiteFooter />
    </div>
  );
}
