interface SectionHeaderProps {
  eyebrow: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'left' | 'center'
  dark?: boolean
  id?: string
}

export default function SectionHeader({ eyebrow, title, description, align = 'left', dark = false, id }: SectionHeaderProps) {
  const centered = align === 'center'
  return (
    <div className={`space-y-3 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}>
      <span
        className={`inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest ${
          dark ? 'text-burnt-400' : 'text-burnt-500'
        }`}
      >
        <span className="w-6 h-[2px] bg-current rounded-full" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2
        id={id}
        className={`text-[1.7rem] leading-tight sm:text-4xl lg:text-[2.75rem] font-black tracking-tight ${
          dark ? 'text-white' : 'text-graphite-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-[15px] sm:text-base leading-relaxed ${dark ? 'text-ivory-300/80' : 'text-warmgrey-500'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
