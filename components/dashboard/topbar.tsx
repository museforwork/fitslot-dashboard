import { Bell, CalendarDays, ChevronDown, Plus, Search } from 'lucide-react'

export function Topbar() {
  return (
    <header className="flex h-[72px] items-center gap-4 border-b border-line bg-white px-8">
      <h1 className="mr-auto text-[22px] font-bold tracking-tight">Dashboard</h1>

      <label className="flex h-10 w-[280px] items-center gap-2 rounded-lg border border-line bg-white px-3 text-ink-muted focus-within:border-brand">
        <Search className="size-4 flex-none" strokeWidth={1.75} aria-hidden="true" />
        <span className="sr-only">Search members</span>
        <input
          type="search"
          placeholder="Search members..."
          className="w-full bg-transparent text-ink outline-none placeholder:text-ink-subtle"
        />
      </label>

      <button
        type="button"
        className="flex h-10 items-center gap-2 rounded-lg border border-line bg-white px-3 font-medium text-ink"
      >
        <CalendarDays className="size-4 text-ink-muted" strokeWidth={1.75} aria-hidden="true" />
        Nov 1 - Nov 30
        <ChevronDown className="size-4 text-ink-muted" strokeWidth={1.75} aria-hidden="true" />
      </button>

      <button
        type="button"
        aria-label="Notifications, unread"
        className="relative grid size-10 place-items-center rounded-lg border border-line bg-white text-ink-muted"
      >
        <Bell className="size-5" strokeWidth={1.75} aria-hidden="true" />
        <span className="absolute top-2 right-2.5 size-2 rounded-full border-2 border-white bg-alert box-content" />
      </button>

      <button
        type="button"
        className="flex h-10 items-center gap-2 rounded-lg bg-brand px-4 font-semibold text-white hover:bg-brand/90"
      >
        <Plus className="size-4" strokeWidth={2} aria-hidden="true" />
        New Booking
      </button>
    </header>
  )
}
