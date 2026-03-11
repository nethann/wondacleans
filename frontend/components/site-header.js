import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="shell pt-6">
      <div className="glass flex flex-wrap items-center justify-between gap-4 rounded-full px-5 py-3 shadow-panel">
        <Link href="/" className="flex items-center gap-3 font-semibold text-slate-950">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
            WC
          </span>
          <div>
            <div>WondaCleans</div>
            <div className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">Cleaning platform</div>
          </div>
        </Link>

        <Link
          href="/booking"
          className="rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          Book Now
        </Link>
      </div>
    </header>
  );
}
