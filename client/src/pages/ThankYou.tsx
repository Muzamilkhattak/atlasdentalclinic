import { CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main className="mx-auto flex min-h-[calc(100vh-220px)] max-w-4xl items-center px-4 pb-16 pt-36 sm:px-6 lg:px-8">
        <section className="w-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
              <CheckCircle2 className="h-9 w-9" />
            </div>
            <h1 className="text-3xl font-bold font-display sm:text-4xl">Form Submitted Successfully</h1>
            <p className="mt-4 text-slate-600">
              Thank you for contacting Atlas Dental. Our team has received your request and will get back to you soon.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild className="rounded-full bg-black px-7 text-white hover:bg-black/85">
                <a href="/">Back to Home</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-7">
                <a href="/contact">Submit Another Request</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
