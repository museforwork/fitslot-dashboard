'use client'

import { useEffect, useRef } from 'react'

/** Scales the fixed-width desktop design down on narrower viewports without reflowing it. */
export function FitToWidth({ width, children }: { width: number; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fit = () => {
      if (ref.current) ref.current.style.zoom = String(Math.min(1, window.innerWidth / width))
    }
    fit()
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [width])

  return (
    <div ref={ref} style={{ width }}>
      {children}
    </div>
  )
}
