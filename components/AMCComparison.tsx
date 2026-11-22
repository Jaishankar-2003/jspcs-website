import { Check, Minus, MessageCircle } from 'lucide-react'
import { AMC_PLANS, AMC_COMPARISON } from '@/lib/amc-data'
import { waLink } from '@/lib/site-config'

function Cell({ value }: { value: string }) {
  if (value === '✓') return <Check className="w-4 h-4 text-sage-600 mx-auto lg:mx-0" aria-label="Included" />
  if (value === '—') return <Minus className="w-4 h-4 text-warmgrey-300 mx-auto lg:mx-0" aria-label="Not included" />
  return <span>{value}</span>
}

const quote = (plan: string) =>
  waLink(`Hi JSPCS, I am interested in the "${plan}" AMC plan. Please share details and a quote for my systems.`)

/**
 * Plan comparison. Phones get one swipeable card per plan (no sideways
 * table scrolling); large screens get a classic comparison table.
 */
export default function AMCComparison() {
  return (
    <div>
      {/* Mobile / tablet: plan cards with every row */}
      <div className="lg:hidden -mx-4 px-4 flex gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2" role="list">
        {AMC_PLANS.map((plan, pi) => (
          <article
            key={plan.id}
            role="listitem"
            className={`snap-center shrink-0 w-[86%] sm:w-[60%] rounded-2xl border p-4 ${
              plan.highlight ? 'bg-graphite-900 text-ivory-100 border-graphite-900' : 'bg-white border-ivory-200'
            }`}
          >
            <header className="flex items-center gap-3 pb-3 border-b border-current/10">
              <span className="w-9 h-9 rounded-xl bg-burnt-500 text-white font-black flex items-center justify-center">
                {plan.letter}
              </span>
              <div>
                <h4 className={`font-bold ${plan.highlight ? 'text-white' : 'text-graphite-900'}`}>{plan.name}</h4>
                <p className={`text-xs ${plan.highlight ? 'text-ivory-300/70' : 'text-warmgrey-500'}`}>{plan.tagline}</p>
              </div>
            </header>
            <dl className="divide-y divide-current/10 text-sm">
              {AMC_COMPARISON.map(row => (
                <div key={row.label} className="flex items-start justify-between gap-3 py-2">
                  <dt className={plan.highlight ? 'text-ivory-300/70' : 'text-warmgrey-500'}>{row.label}</dt>
                  <dd className="font-semibold text-right"><Cell value={row.values[pi]} /></dd>
                </div>
              ))}
            </dl>
            <a
              href={quote(plan.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 min-h-[46px] rounded-xl bg-burnt-500 hover:bg-burnt-600 text-white text-sm font-bold"
            >
              <MessageCircle className="w-4 h-4" /> Get a Custom Quote
            </a>
          </article>
        ))}
      </div>
      <p className="lg:hidden text-xs text-warmgrey-400 mt-2">Swipe to compare plans →</p>

      {/* Desktop table */}
      <div className="hidden lg:block overflow-hidden rounded-2xl border border-ivory-200 bg-white">
        <table className="w-full text-sm">
          <caption className="sr-only">AMC plan comparison</caption>
          <thead>
            <tr className="bg-ivory-100">
              <th scope="col" className="text-left p-4 w-[20%] font-mono text-xs uppercase tracking-wider text-warmgrey-500">Feature</th>
              {AMC_PLANS.map(p => (
                <th
                  key={p.id}
                  scope="col"
                  className={`text-left p-4 align-top ${p.highlight ? 'bg-graphite-900 text-white' : 'text-graphite-900'}`}
                >
                  <span className="block font-mono text-[11px] text-burnt-400">PLAN {p.letter}</span>
                  <span className="block font-bold text-base">{p.name}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {AMC_COMPARISON.map((row, ri) => (
              <tr key={row.label} className={ri % 2 ? 'bg-ivory-50' : 'bg-white'}>
                <th scope="row" className="text-left p-4 font-semibold text-graphite-800">{row.label}</th>
                {row.values.map((v, i) => (
                  <td key={i} className={`p-4 text-graphite-800 ${AMC_PLANS[i].highlight ? 'bg-burnt-500/[0.04]' : ''}`}>
                    <Cell value={v} />
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <td className="p-4" />
              {AMC_PLANS.map(p => (
                <td key={p.id} className="p-4">
                  <a
                    href={quote(p.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 min-h-[44px] px-4 rounded-xl bg-burnt-500 hover:bg-burnt-600 text-white text-xs font-bold"
                  >
                    <MessageCircle className="w-4 h-4" /> Get Quote
                  </a>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-warmgrey-400 mt-3">
        Coverage, visit frequency and response targets are confirmed in your written agreement. Response time is when we start
        working on an issue – it is not a promise of how long the fix will take.
      </p>
    </div>
  )
}
