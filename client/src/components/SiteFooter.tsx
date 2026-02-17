import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import logoIcon from "@/assets/logoicon.jfif";
const CONTACT_EMAIL = "atlasdentalpk@gmail.com";
const CONTACT_PHONE = "0303 5889888";
const CONTACT_PHONE_LINK = "tel:+923035889888";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/atlasdentalpk/", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/atlasdentalpk", icon: Facebook },
 
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-black">
                <img src={logoIcon} alt="Atlas Dental logo" className="h-8 w-8 rounded-md object-cover" />
              </div>
              <div>
                <span className="block font-display text-2xl font-bold">Atlas Dental</span>
                <span className="block whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.08em] text-slate-400 sm:text-[11px]">
                  SPECIALIZED DENTISTRY CENTER
                </span>
              </div>
            </div>
            <p className="max-w-sm leading-relaxed text-slate-400">
              Specialist dental care focused on comfort, precision, and long-term oral health for every patient.
            </p>
            <div className="mt-6 space-y-2 text-sm text-slate-300">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />{" "}
                <a href={CONTACT_PHONE_LINK} className="hover:underline">
                  {CONTACT_PHONE}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Lower Ground Floor, Plaza 100-C, Spring North Commercial, Bahria Town Phase 7, Rawalpindi, 46620
              </p>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-white hover:text-black"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row text">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <p>(c) 2026 Atlas Dental. All rights reserved.</p>
            <p>
              Designed by{" "}
              <a
                href="https://ftzdigital.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 transition-colors hover:text-white"
              >
                FTZDigital
              </a>
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
