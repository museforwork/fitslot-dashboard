import { ChevronLeft, ChevronRight, Download, MoreVertical } from 'lucide-react'
import { cn } from '@/lib/utils'

type Status = 'Confirmed' | 'Pending' | 'Cancelled'

const bookings: { member: string; cls: string; trainer: string; date: string; status: Status }[] = [
  { member: 'Emily Wong', cls: 'Yoga', trainer: 'Sarah Lee', date: 'Nov 18, 09:00', status: 'Confirmed' },
  { member: 'Jason Lam', cls: 'HIIT', trainer: 'Mike Ho', date: 'Nov 18, 10:30', status: 'Pending' },
  { member: 'Chloe Ng', cls: 'Spin', trainer: 'Sarah Lee', date: 'Nov 18, 12:00', status: 'Confirmed' },
  { member: 'Daniel Cheung', cls: 'Boxing', trainer: 'Ken Yip', date: 'Nov 19, 18:00', status: 'Cancelled' },
  { member: 'Grace Chan', cls: 'Pilates', trainer: 'Amy Tsang', date: 'Nov 19, 19:30', status: 'Confirmed' },
  { member: 'Ryan Lau', cls: 'HIIT', trainer: 'Mike Ho', date: 'Nov 20, 07:00', status: 'Pending' },
]

const filters = ['All', 'Confirmed', 'Pending', 'Cancelled']

const statusStyles: Record<Status, string> = {
  Confirmed: 'bg-ok-bg text-ok',
  Pending: 'bg-warn-bg text-warn',
  Cancelled: 'bg-bad-bg text-bad',
}

const th = 'h-10 border-t border-line bg-[#FAFAFB] px-6 text-left text-xs font-semibold tracking-wide text-ink-muted uppercase'
const td = 'h-14 border-t border-line px-6'
const pageBtn = 'grid h-8 min-w-8 place-items-center rounded-lg border border-line bg-white px-2 font-medium text-ink'

export function RecentBookings() {
  return (
    <section className="rounded-xl border border-line bg-white">
      <div className="flex items-center gap-4 px-6 pt-6 pb-4">
        <h2 className="mr-auto text-base font-semibold">Recent Bookings</h2>
        <div role="tablist" aria-label="Filter by status" className="flex gap-1">
          {filters.map((filter, i) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={i === 0}
              className={cn(
                'h-8 rounded-lg px-3 font-medium text-ink-muted',
                i === 0 && 'bg-brand-soft font-semibold text-brand',
              )}
            >
              {filter}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="flex h-8 items-center gap-2 rounded-lg border border-line bg-white px-3 font-medium"
        >
          <Download className="size-4" strokeWidth={1.75} aria-hidden="true" />
          Export
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className={th}>Member</th>
            <th className={th}>Class</th>
            <th className={th}>Trainer</th>
            <th className={th}>Date &amp; Time</th>
            <th className={th}>Status</th>
            <th className={cn(th, 'w-24 text-right')}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={`${b.member}-${b.date}`}>
              <td className={cn(td, 'font-semibold')}>{b.member}</td>
              <td className={td}>{b.cls}</td>
              <td className={cn(td, 'text-ink-muted')}>{b.trainer}</td>
              <td className={cn(td, 'text-ink-muted')}>{b.date}</td>
              <td className={td}>
                <span
                  className={cn(
                    'inline-flex h-6 items-center gap-1.5 rounded-full px-2.5 text-xs font-semibold',
                    statusStyles[b.status],
                  )}
                >
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />
                  {b.status}
                </span>
              </td>
              <td className={cn(td, 'w-24 text-right')}>
                <button
                  type="button"
                  aria-label={`More actions for ${b.member}`}
                  className="inline-grid size-8 place-items-center rounded-lg text-ink-muted hover:bg-page"
                >
                  <MoreVertical className="size-4" strokeWidth={1.75} aria-hidden="true" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between border-t border-line px-6 py-4">
        <span className="text-ink-muted">Showing 1-6 of 128</span>
        <nav aria-label="Pagination" className="flex items-center gap-2">
          <button type="button" aria-label="Previous page" className={cn(pageBtn, 'text-ink-muted')}>
            <ChevronLeft className="size-4" strokeWidth={1.75} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-current="page"
            className={cn(pageBtn, 'border-brand bg-brand font-semibold text-white')}
          >
            1
          </button>
          <button type="button" className={pageBtn}>2</button>
          <button type="button" className={pageBtn}>3</button>
          <span aria-hidden="true" className="grid h-8 min-w-8 place-items-center text-ink-muted">
            ...
          </span>
          <button type="button" className={pageBtn}>22</button>
          <button type="button" aria-label="Next page" className={cn(pageBtn, 'text-ink-muted')}>
            <ChevronRight className="size-4" strokeWidth={1.75} aria-hidden="true" />
          </button>
        </nav>
      </div>
    </section>
  )
}
