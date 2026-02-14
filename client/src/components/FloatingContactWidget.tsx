import { CalendarCheck2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const whatsappNumber = "923035889888";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Hello Atlas Dental, I want to book an appointment."
)}`;

export function FloatingContactWidget() {
  return (
    <div className="fixed right-3 top-1/2 z-[60] -translate-y-1/2">
      <div className="flex flex-col items-center gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          title="WhatsApp 0303 5889888"
          className="group flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-[#25D366] text-white shadow-sm transition-all duration-300 hover:w-40 hover:justify-start hover:px-3 hover:bg-[#1fb458]"
        >
          <FaWhatsapp className="h-5 w-5 shrink-0" />
          <span className="ml-0 max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:max-w-[120px] group-hover:opacity-100">
            Chat us now
          </span>
          <span className="sr-only">WhatsApp 0303 5889888</span>
        </a>

        <a
          href="/contact"
          aria-label="Book appointment"
          title="Book Appointment"
          className="group flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-black text-white shadow-sm transition-all duration-300 hover:w-36 hover:justify-start hover:px-3 hover:bg-black/85"
        >
          <CalendarCheck2 className="h-5 w-5 shrink-0" />
          <span className="ml-0 max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:max-w-[90px] group-hover:opacity-100">
            Book now
          </span>
          <span className="sr-only">Book Appointment</span>
        </a>
      </div>
    </div>
  );
}
