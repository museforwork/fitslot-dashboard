import { cn } from '@/lib/utils'

const data = [
  { day: 'Mon', value: 120 },
  { day: 'Tue', value: 145 },
  { day: 'Wed', value: 132 },
  { day: 'Thu', value: 178 },
  { day: 'Fri', value: 196 },
  { day: 'Sat', value: 230 },
  { day: 'Sun', value: 164 },
]

const ranges = ['Week', 'Month', 'Year']
const ticks = [250, 200, 150, 100, 50, 0]

const WIDTH = 693
const HEIGHT = 272
const TOP = 10
const BOTTOM = 230
const LEFT = 40
const MAX = 250

const y = (value: number) => BOTTOM - (value / MAX) * (BOTTOM - TOP)
const x = (index: number) => 72 + index * 100

export function BookingsOverview() {
  const points = data.map((d, i) => `${x(i)},${y(d.value).toFixed(1)}`).join(' ')

  return (
    <div className="rounded-xl border border-line bg-white p-6">
      <div className="mb-6 flex min-h-8 items-center justify-between">
        <h2 className="text-base font-semibold">Bookings Overview</h2>
        <div
          role="tablist"
          aria-label="Range"
          className="flex gap-1 rounded-lg border border-line bg-page p-1"
        >
          {ranges.map((range, i) => (
            <button
              key={range}
              type="button"
              role="tab"
              aria-selected={i === 0}
              className={cn(
                'h-7 rounded-md px-3 text-[13px] font-medium text-ink-muted',
                i === 0 && 'bg-white font-semibold text-brand ring-1 ring-line',
              )}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <svg
        width={WIDTH}
        height={HEIGHT}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-label={`Bookings per day: ${data.map((d) => `${d.day} ${d.value}`).join(', ')}`}
        className="text-xs"
      >
        {ticks.map((tick) => (
          <g key={tick}>
            <line
              x1={LEFT}
              x2={WIDTH}
              y1={y(tick)}
              y2={y(tick)}
              stroke={tick === 0 ? 'var(--color-line)' : 'var(--color-grid)'}
            />
            <text x={28} y={y(tick) + 4} textAnchor="end" fill="var(--color-ink-subtle)">
              {tick}
            </text>
          </g>
        ))}
        <polyline
          points={points}
          fill="none"
          stroke="var(--color-brand)"
          strokeWidth={2.5}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {data.map((d, i) => (
          <g key={d.day}>
            <circle cx={x(i)} cy={y(d.value)} r={4} fill="#fff" stroke="var(--color-brand)" strokeWidth={2} />
            <text x={x(i)} y={258} textAnchor="middle" fill="var(--color-ink-subtle)">
              {d.day}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}
