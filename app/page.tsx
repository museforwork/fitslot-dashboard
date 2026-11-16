import { BookingsOverview } from '@/components/dashboard/bookings-overview'
import { FitToWidth } from '@/components/dashboard/fit-to-width'
import { KpiCards } from '@/components/dashboard/kpi-cards'
import { PopularClasses } from '@/components/dashboard/popular-classes'
import { RecentBookings } from '@/components/dashboard/recent-bookings'
import { Sidebar } from '@/components/dashboard/sidebar'
import { Topbar } from '@/components/dashboard/topbar'

export default function DashboardPage() {
  return (
    <FitToWidth width={1440}>
      <div className="flex min-h-[1024px] w-[1440px] bg-page">
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar />
          <main className="flex flex-col gap-6 p-8">
            <KpiCards />
            <section className="grid grid-cols-[2fr_1fr] gap-6">
              <BookingsOverview />
              <PopularClasses />
            </section>
            <RecentBookings />
          </main>
        </div>
      </div>
    </FitToWidth>
  )
}
