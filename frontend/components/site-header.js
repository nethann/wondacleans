import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="shell pt-5 sm:pt-6">
      <div className="glass rounded-[2rem] px-4 py-4 shadow-panel sm:rounded-full sm:px-5 sm:py-3">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center gap-3 text-slate-950">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
              WC
            </span>
            <div className="min-w-0">
              <div className="text-base font-semibold leading-none sm:text-lg">WondaCleans</div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.24em] text-slate-500 sm:text-xs">
                Cleaning platform
              </div>
            </div>
          </Link>

          <Link
            href="/booking"
            className="flex w-full items-center justify-center rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 sm:w-auto sm:px-5 sm:py-2"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
