import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

const serviceList = [
  "Standard Cleaning",
  "Deep Cleaning",
  "Move-in / Move-out Cleaning",
  "Airbnb Cleaning"
];

export function HomePage() {
  return (
    <main className="pb-20">
      <SiteHeader />

      <section id="about" className="shell grid gap-10 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="animate-enter">
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            Exceptional home cleaning, thoughtfully delivered.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            WondaCleans helps homeowners and short-term rental hosts book reliable cleaning services online. Our team
            handles standard cleaning, deep cleaning, move-in and move-out jobs, and Airbnb turnovers with a smooth,
            modern booking experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/booking" className="rounded-full bg-brand-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
              Book Now
            </Link>
          </div>
        </div>

        <div className="glass animate-enter rounded-[2rem] border-brand-100 p-6 shadow-panel [animation-delay:120ms]">
          <div className="rounded-[1.5rem] bg-slate-950 p-8 text-white">
            <h2 className="text-2xl font-semibold">About WondaCleans</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              We focus on dependable residential cleaning with clear scheduling, simple service selection, and a booking
              process customers can complete in just a few minutes.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/10 p-5">
                <div className="text-sm text-slate-400">Services</div>
                <div className="mt-2 font-medium">Standard, deep, move-out, and Airbnb cleaning</div>
              </div>
              <div className="rounded-3xl bg-white/10 p-5">
                <div className="text-sm text-slate-400">Booking</div>
                <div className="mt-2 font-medium">Choose your service, date, time, and confirm online</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="shell py-10">
        <div className="relative isolate rounded-[2rem] border border-white/70 bg-white px-8 py-10 shadow-panel sm:px-10">
          <div className="relative z-10">
            <h2 className="section-title">How the platform works</h2>
            <p className="section-copy mt-4">
              Customers can book a cleaning appointment in a few simple steps.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Choose a service",
                  description: "Select the cleaning type that fits your home and add any extra services you need."
                },
                {
                  title: "Pick your schedule",
                  description: "Enter your address, choose a date, and select an available time slot online."
                },
                {
                  title: "Confirm your booking",
                  description: "Review the details, submit your booking, and receive confirmation for your appointment."
                }
              ].map((step, index) => (
                <div key={step.title} className="rounded-[1.75rem] bg-mist p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                    0{index + 1}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-10">
        <div className="glass rounded-[2rem] px-8 py-10 shadow-panel sm:px-10">
          <h2 className="section-title">Services we offer</h2>
          <p className="section-copy mt-4">
            Choose the cleaning service that best fits your home, move, or rental turnover.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {serviceList.map((service) => (
              <div
                key={service}
                className="flex min-h-28 items-center justify-center rounded-[1.75rem] bg-mist px-6 py-6 text-center text-lg font-semibold leading-snug text-slate-900"
              >
                <span className="max-w-[12rem]">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
