import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logoIcon from "@/assets/logoicon.jfif";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Team", href: "/team" },
    { label: "Clinic", href: "/clinic-gallery" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 py-3 sm:py-4"
    >
      <div className="mx-auto max-w-[1380px] px-3 sm:px-5 lg:px-8">
        <div
          className={`rounded-[2.25rem] border border-slate-200/80 bg-white/95 backdrop-blur-md transition-all duration-300 ${
            isScrolled
              ? "shadow-[0_12px_32px_rgba(0,0,0,0.14)]"
              : "shadow-[0_8px_24px_rgba(0,0,0,0.10)]"
          }`}
        >
          <div className="flex h-[76px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <Link href="/" className="group flex min-w-0 items-center gap-3 cursor-pointer lg:w-[250px]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-white">
                <img src={logoIcon} alt="Atlas Dental logo" className="h-8 w-8 rounded-md object-cover" />
              </div>
              <div className="min-w-0">
                <span className="block font-display text-xl font-bold tracking-tight text-black transition-opacity group-hover:opacity-80">
                  ATLAS DENTAL
                </span>
                <span className="block whitespace-nowrap text-[9px] font-medium leading-tight tracking-[0.04em] text-black sm:text-[11px]">
                  SPECIALIZED DENTISTRY CENTER
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden flex-1 items-center justify-center gap-10 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-semibold uppercase tracking-[0.08em] text-black transition-all hover:underline underline-offset-4 decoration-2"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden items-center justify-end lg:flex lg:w-[250px]">
              <Button asChild className="h-10 rounded-full bg-black px-7 text-xs font-bold uppercase tracking-[0.08em] text-white hover:bg-black/85">
                <a href="/contact">Book Appointment</a>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="rounded-full p-2 text-slate-700 transition-colors hover:bg-slate-100 lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden border-t border-slate-200 lg:hidden"
              >
                <nav className="flex flex-col gap-2 p-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="rounded-lg p-2 text-sm font-semibold uppercase tracking-[0.08em] text-black transition-all hover:bg-slate-50 hover:underline underline-offset-4 decoration-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                  <Button asChild className="mt-3 w-full rounded-full bg-black text-white hover:bg-black/85">
                    <a href="/contact">Book Appointment</a>
                  </Button>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
