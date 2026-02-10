import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import { Navbar } from "@/components/Navbar";
import { SectionHeader } from "@/components/SectionHeader";
import { ReviewCard } from "@/components/ReviewCard";
import { DoctorCard } from "@/components/DoctorCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, CheckCircle2, Stethoscope, Heart, ShieldCheck, ArrowRight, Instagram, Facebook, Twitter } from "lucide-react";

export default function Home() {
  const submitContact = useSubmitContact();
  
  const form = useForm({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      subject: "New Website Inquiry"
    },
  });

  const onSubmit = (data: any) => {
    submitContact.mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  const specialties = [
    { icon: Stethoscope, label: "General Dentistry" },
    { icon: Heart, label: "Orthodontics" },
    { icon: ShieldCheck, label: "Endodontics" },
    { icon: CheckCircle2, label: "Implantology" },
    { icon: Heart, label: "Pediatric" },
    { icon: ShieldCheck, label: "Periodontics" },
    { icon: CheckCircle2, label: "Dental Implants" },
    { icon: Stethoscope, label: "Prosthodontics" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
            alt="Modern Dental Clinic"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-8 font-display">
              Comprehensive Dental Care in Bahria Town
            </h1>
            <p className="text-xl text-slate-700 mb-10 leading-relaxed font-sans font-medium">
              Multidisciplinary dental excellence in Phase 7, Rawalpindi. Your smile deserves the best care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="h-12 px-10 rounded-none text-base font-bold bg-black hover:bg-black/90 text-white transition-all font-sans uppercase tracking-wider">
                Book an Appointment
              </Button>
              <Button variant="outline" className="h-12 px-10 rounded-none text-base font-bold border border-slate-900 bg-white/50 hover:bg-white text-slate-900 transition-all font-sans uppercase tracking-wider flex items-center gap-2">
                <Phone className="w-4 h-4" /> Call Now
              </Button>
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

      {/* Specialties Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Our Specialties" subtitle="Comprehensive care covering every aspect of modern dentistry" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {specialties.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-4 shadow-sm hover:shadow-md transition-shadow cursor-default group"
              >
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <spec.icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-slate-900">{spec.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <SectionHeader title="About Atlas Dental" alignment="left" className="mb-6" />
            <p className="text-lg text-slate-600 leading-relaxed">
              At Atlas Dental, we believe that a healthy smile is the foundation of confidence. Our state-of-the-art facility combines cutting-edge technology with a compassionate, patient-centered approach.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Founded by leading specialists, our clinic has served the Bahria Town community for over a decade, treating thousands of patients with the highest standards of care and sterilization.
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
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* dental team professional photo */}
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop" 
              alt="Doctor working"
              className="rounded-2xl w-full h-64 object-cover mt-12"
            />
            {/* dental consultation friendly */}
            <img 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1974&auto=format&fit=crop" 
              alt="Team Meeting"
              className="rounded-2xl w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Specialists */}
      <section id="team" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display mb-4">Our Specialists</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Meet our team of highly qualified and experienced dental professionals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <DoctorCard 
              name="Dr. Ahmed Khan" 
              specialty="Orthodontist" 
              /* male doctor portrait professional */
              imageUrl="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
            />
            <DoctorCard 
              name="Dr. Sarah Ali" 
              specialty="Endodontist" 
              /* female doctor portrait smiling */
              imageUrl="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
            />
            <DoctorCard 
              name="Dr. Faryal Shah" 
              specialty="Pediatric Dentist" 
              /* female dentist with child patient */
              imageUrl="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop"
            />
            <DoctorCard 
              name="Dr. Hassan Raza" 
              specialty="Implantologist" 
              /* male dentist in surgery scrubs */
              imageUrl="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Our Services" subtitle="World-class dental treatments tailored to your needs" />
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Cosmetic Dentistry", desc: "Veneers, whitening, and smile makeovers.", img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f72?q=80&w=1974&auto=format&fit=crop" },
            { title: "Root Canal Therapy", desc: "Pain-free advanced endodontic treatments.", img: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop" },
            { title: "Dental Implants", desc: "Permanent solutions for missing teeth.", img: "https://images.unsplash.com/photo-1445527697940-617d0ee0f553?q=80&w=2076&auto=format&fit=crop" }
          ].map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="group rounded-2xl overflow-hidden shadow-lg border border-slate-100"
            >
              <div className="h-48 overflow-hidden">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.desc}</p>
                <div className="flex items-center text-sm font-semibold text-black cursor-pointer group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Patient Reviews */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Patient Reviews" subtitle="What our community says about us" />
          
          <div className="grid md:grid-cols-3 gap-8">
            <ReviewCard 
              name="Kevin Walker" 
              initial="K" 
              text="The most professional dental clinic I've ever visited. Dr. Ahmed explained everything clearly and the procedure was painless."
            />
            <ReviewCard 
              name="Sarah Bennett" 
              initial="S" 
              text="I was terrified of dentists until I came here. The staff is so welcoming and the environment is very relaxing."
            />
            <ReviewCard 
              name="Michael Chang" 
              initial="M" 
              text="Excellent service and state of the art equipment. Highly recommended for anyone looking for quality dental work."
            />
          </div>
        </div>
      </section>

      {/* Clinic Gallery */}
      <section id="clinic" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Our Clinic" subtitle="Designed for your comfort and safety" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[500px]">
          {/* clinic reception area modern */}
          <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Reception" />
          </div>
          {/* dental chair modern equipment */}
          <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Dental Chair" />
          </div>
          {/* waiting area comfortable */}
          <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=2071&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Waiting Area" />
          </div>
          {/* sterilization room clean */}
          <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=2012&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Sterilization" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold font-display mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-slate-600">+92 300 1234567</p>
                    <p className="text-slate-600">+92 51 1234567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-slate-600">appointments@atlasdental.com</p>
                    <p className="text-slate-600">info@atlasdental.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Location</h3>
                    <p className="text-slate-600 max-w-xs">
                      Shop #12, Plot 45, Civic Center, Phase 4, Bahria Town, Islamabad.
                    </p>
                  </div>
                </div>

                <div className="h-64 rounded-2xl overflow-hidden bg-slate-200 mt-8 relative">
                   <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Bahria%20Town%20Civic%20Center%20Islamabad+(Atlas%20Dental)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100">
              <h3 className="text-2xl font-bold font-display mb-6">Book an Appointment</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="How can we help you?" className="min-h-[120px] bg-slate-50 border-slate-200 resize-none" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full h-14 text-lg bg-black hover:bg-black/80 rounded-xl"
                    disabled={submitContact.isPending}
                  >
                    {submitContact.isPending ? "Sending..." : "Submit Request"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                 <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-black">
                  <span className="font-display font-bold text-xl">A</span>
                </div>
                <span className="font-display font-bold text-2xl">Atlas Dental</span>
              </div>
              <p className="text-slate-400 max-w-sm leading-relaxed">
                Providing world-class dental care with a focus on patient comfort and clinical excellence. Your smile is our priority.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#team" className="hover:text-white transition-colors">Our Team</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>© 2024 Atlas Dental. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
