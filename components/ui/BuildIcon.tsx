import {
  Gamepad2,
  Clapperboard,
  Code2,
  LineChart,
  BrainCircuit,
  Ruler,
  Map,
  Server,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import type { BuildIconKey } from '@/lib/pc-builds-data'

const ICONS: Record<BuildIconKey, LucideIcon> = {
  gamepad: Gamepad2,
  video: Clapperboard,
  code: Code2,
  chart: LineChart,
  brain: BrainCircuit,
  ruler: Ruler,
  map: Map,
  server: Server,
  sparkles: Sparkles,
}

export default function BuildIcon({ icon, className = 'w-5 h-5' }: { icon: BuildIconKey; className?: string }) {
  const Icon = ICONS[icon]
  return <Icon className={className} aria-hidden="true" />
}
