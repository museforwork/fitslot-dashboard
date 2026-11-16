const classes = [
  { name: 'Yoga', value: 92 },
  { name: 'HIIT', value: 85 },
  { name: 'Spin', value: 74 },
  { name: 'Pilates', value: 66 },
  { name: 'Boxing', value: 58 },
]

export function PopularClasses() {
  return (
    <div className="rounded-xl border border-line bg-white p-6">
      <div className="mb-6 flex min-h-8 items-center">
        <h2 className="text-base font-semibold">Popular Classes</h2>
      </div>
      <ul className="flex flex-col gap-6">
        {classes.map(({ name, value }) => (
          <li key={name} className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="font-medium">{name}</span>
              <span className="font-semibold">{value}%</span>
            </div>
            <div
              role="progressbar"
              aria-label={`${name} occupancy`}
              aria-valuenow={value}
              aria-valuemin={0}
              aria-valuemax={100}
              className="h-2 overflow-hidden rounded-full bg-grid"
            >
              <span className="block h-full rounded-full bg-brand" style={{ width: `${value}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
