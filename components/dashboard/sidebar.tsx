import {
  CalendarDays,
  Dumbbell,
  LayoutDashboard,
  Settings,
  UserRoundCheck,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems: { label: string; icon: LucideIcon; active?: boolean }[] = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Bookings', icon: CalendarDays },
  { label: 'Classes', icon: Dumbbell },
  { label: 'Members', icon: Users },
  { label: 'Trainers', icon: UserRoundCheck },
  { label: 'Settings', icon: Settings },
]

export function Sidebar() {
  return (
    <aside
      aria-label="Primary"
      className="flex w-60 flex-none flex-col border-r border-line bg-white px-4 py-6"
    >
      <div className="mb-8 flex h-10 items-center gap-2 px-2">
        <div aria-hidden="true" className="grid size-8 place-items-center rounded-lg bg-brand text-white">
          <Dumbbell className="size-[18px]" strokeWidth={1.75} />
        </div>
        <span className="text-lg font-bold tracking-tight">FitSlot</span>
      </div>

      <nav className="flex flex-col gap-1">
        {navItems.map(({ label, icon: Icon, active }) => (
          <a
            key={label}
            href="#"
            aria-current={active ? 'page' : undefined}
            className={cn(
              'flex h-10 items-center gap-3 rounded-lg px-3 font-medium text-ink-muted transition-colors hover:bg-page',
              active && 'bg-brand-soft font-semibold text-brand hover:bg-brand-soft',
            )}
          >
            <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
            {label}
          </a>
        ))}
      </nav>

      <div className="mt-auto flex items-center gap-3 border-t border-line px-2 pt-4">
        <div
          aria-hidden="true"
          className="grid size-10 flex-none place-items-center rounded-full bg-brand-soft font-semibold text-brand"
        >
          AC
        </div>
        <div>
          <div className="font-semibold">Alex Chan</div>
          <div className="text-xs text-ink-muted">Admin</div>
        </div>
      </div>
    </aside>
  )
}
