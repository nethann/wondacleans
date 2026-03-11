import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { adminStats, formatCurrency, initialBookings, notificationFeed, paymentQueue, staffSchedule, team } from "@/components/product-data";

const statusTone = {
  confirmed: "bg-emerald-50 text-emerald-700",
  assigned: "bg-amber-50 text-amber-700",
  completed: "bg-slate-100 text-slate-700"
};

export function AdminPage() {
  return (
    <main className="pb-20">
      <SiteHeader />

      <section className="shell py-10">
        <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
          <div>
            <Link href="/booking" className="text-sm font-medium text-brand-700">
              Open booking flow
            </Link>
            <h1 className="mt-3 text-4xl font-semibold text-slate-950">Admin scheduling and operations</h1>
            <p className="mt-3 max-w-3xl text-slate-600">
              Track schedules, assign cleaners, follow payments, and monitor automated customer notifications from one
              central dashboard.
            </p>
          </div>
          <div className="rounded-[1.75rem] bg-slate-950 px-5 py-4 text-white shadow-panel">
            <div className="text-sm text-slate-300">Automation health</div>
            <div className="mt-2 text-3xl font-semibold">99.2%</div>
            <div className="mt-1 text-sm text-slate-400">Reminder jobs delivered this week</div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {adminStats.map((item) => (
            <div key={item.label} className="glass rounded-[2rem] p-6 shadow-panel">
              <div className="text-sm uppercase tracking-[0.18em] text-slate-500">{item.label}</div>
              <div className="mt-4 text-4xl font-semibold text-slate-950">{item.value}</div>
              <div className="mt-2 text-sm text-slate-500">{item.detail}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-8 xl:grid-cols-[1.25fr_0.75fr]">
          <div className="space-y-8">
            <section className="glass rounded-[2rem] p-8">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold text-slate-950">Upcoming bookings</h2>
                <span className="rounded-full bg-brand-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                  Live dispatch board
                </span>
              </div>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[640px] text-left text-sm">
                  <thead>
                    <tr className="text-slate-500">
                      <th className="pb-3 font-medium">Customer</th>
                      <th className="pb-3 font-medium">Service</th>
                      <th className="pb-3 font-medium">When</th>
                      <th className="pb-3 font-medium">Cleaner</th>
                      <th className="pb-3 font-medium">Payment</th>
                      <th className="pb-3 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {initialBookings.map((booking) => (
                      <tr key={booking.id} className="border-t border-slate-200 text-slate-700">
                        <td className="py-4">
                          <div className="font-medium text-slate-900">{booking.customer}</div>
                          <div className="text-xs text-slate-500">{booking.address}</div>
                        </td>
                        <td className="py-4">{booking.service}</td>
                        <td className="py-4">{booking.date} / {booking.time}</td>
                        <td className="py-4">{booking.cleaner}</td>
                        <td className="py-4">{booking.paymentStatus}</td>
                        <td className="py-4">
                          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusTone[booking.status] ?? "bg-slate-100 text-slate-700"}`}>
                            {booking.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="glass rounded-[2rem] p-8">
              <h2 className="text-2xl font-semibold text-slate-950">Schedule capacity</h2>
              <div className="mt-6 space-y-4">
                {staffSchedule.map((day) => {
                  const total = day.assigned + day.open;
                  const fill = Math.max(12, Math.round((day.assigned / total) * 100));
                  return (
                    <div key={day.day} className="rounded-3xl bg-mist p-5">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <div className="font-medium text-slate-950">{day.day}</div>
                          <div className="mt-1 text-sm text-slate-500">{day.onCall} on-call cleaners available</div>
                        </div>
                        <div className="text-sm text-slate-600">{day.assigned} assigned / {day.open} open</div>
                      </div>
                      <div className="mt-4 h-3 rounded-full bg-white">
                        <div className="h-3 rounded-full bg-slate-950" style={{ width: `${fill}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section className="glass rounded-[2rem] p-8">
              <h2 className="text-2xl font-semibold text-slate-950">Staff board</h2>
              <div className="mt-6 space-y-4">
                {team.map((member) => (
                  <div key={member.id} className="rounded-3xl border border-slate-200 bg-white p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="font-medium text-slate-950">{member.name}</div>
                        <div className="mt-1 text-sm text-slate-500">{member.zone}</div>
                      </div>
                      <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">{member.status}</span>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
                      <span>{member.jobsToday} jobs today</span>
                      <span>{member.rating.toFixed(1)} rating</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="glass rounded-[2rem] p-8">
              <h2 className="text-2xl font-semibold text-slate-950">Payments and invoices</h2>
              <div className="mt-6 space-y-4">
                {paymentQueue.map((invoice) => (
                  <div key={invoice.id} className="rounded-3xl bg-mist p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="font-medium text-slate-950">{invoice.customer}</div>
                        <div className="mt-1 text-sm text-slate-500">{invoice.id} / due {invoice.due}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-slate-950">{invoice.amount}</div>
                        <div className="mt-1 text-sm text-slate-500">{invoice.status}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-3xl bg-slate-950 px-5 py-5 text-white">
                <div className="text-sm text-slate-300">Outstanding scheduled revenue</div>
                <div className="mt-2 text-3xl font-semibold">{formatCurrency(5230)}</div>
              </div>
            </section>

            <section className="glass rounded-[2rem] p-8">
              <h2 className="text-2xl font-semibold text-slate-950">Notification queue</h2>
              <div className="mt-6 space-y-4">
                {notificationFeed.map((item) => (
                  <div key={item.id} className="rounded-3xl bg-mist p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="font-medium text-slate-950">{item.title}</div>
                        <div className="mt-1 text-sm text-slate-500">{item.channel} / {item.audience}</div>
                      </div>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700">{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
