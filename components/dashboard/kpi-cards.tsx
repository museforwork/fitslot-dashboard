import { CalendarDays, DollarSign, PieChart, Users, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const kpis: { label: string; value: string; change: string; up: boolean; icon: LucideIcon }[] = [
  { label: 'Total Bookings', value: '1,284', change: '+12.5%', up: true, icon: CalendarDays },
  { label: 'Active Members', value: '862', change: '+4.2%', up: true, icon: Users },
  { label: 'Class Occupancy', value: '78%', change: '-2.1%', up: false, icon: PieChart },
  { label: 'Revenue', value: '$24,560', change: '+8.3%', up: true, icon: DollarSign },
]

export function KpiCards() {
  return (
    <section aria-label="Key metrics" className="grid grid-cols-4 gap-6">
      {kpis.map(({ label, value, change, up, icon: Icon }) => (
        <div key={label} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-6">
          <div className="flex items-center justify-between">
            <span className="font-medium text-ink-muted">{label}</span>
            <span className="grid size-8 place-items-center rounded-lg border border-line text-ink-muted">
              <Icon className="size-4" strokeWidth={1.75} aria-hidden="true" />
            </span>
          </div>
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-[28px] leading-10 font-bold tracking-tight">{value}</span>
            <span
              className={cn(
                'inline-flex h-6 items-center rounded-full px-2 text-xs font-semibold',
                up ? 'bg-ok-bg text-ok' : 'bg-bad-bg text-bad',
              )}
            >
              {change}
            </span>
          </div>
          <span className="text-xs text-ink-subtle">vs last month</span>
        </div>
      ))}
    </section>
  )
}
