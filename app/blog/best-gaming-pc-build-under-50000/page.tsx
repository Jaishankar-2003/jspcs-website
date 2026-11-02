import type { Metadata } from 'next'
import BlogPageLayout from '@/components/BlogPageLayout'
import { generateMetadata } from '@/lib/seo-utils'

export const dynamic = 'force-static'

export const metadata: Metadata = generateMetadata({
  title: 'Best Gaming PC Build Under ₹50,000 in India (2024 Guide) | JSPCS Online',
  description: 'Building a gaming PC under 50k? Check out our ultimate guide on the best CPU, GPU, and RAM combinations for smooth 1080p gaming in India.',
  keywords: ['gaming pc build under 50000','best gaming pc india','pc build guide india','50k pc build 2024','budget gaming pc india'],
  slug: 'blog/best-gaming-pc-build-under-50000',
})

export default function BestGamingPCBuildUnder50000() {
  return (
    <BlogPageLayout
      title="The Ultimate Gaming PC Build Under ₹50,000 (2024 Guide)"
      subtitle="Dominate 1080p Gaming Without Breaking the Bank"
      publishDate="May 15, 2024"
      author="Jai Shankar"
      category="PC Building"
      slug="best-gaming-pc-build-under-50000"
      content={`
        <p>Building a gaming PC under ₹50,000 in India has become much more exciting in 2024. With prices of graphics cards and DDR4 RAM stabilizing, you can now build a machine that handles modern AAA titles at 1080p with impressive frame rates.</p>

        <h3>The "Sweet Spot" Configuration</h3>
        <p>To stay under the 50k mark while maximizing performance, you need to balance your budget between the CPU and GPU. Here is our recommended build:</p>
        
        <ul>
          <li><strong>CPU:</strong> Intel Core i5-12400F (~₹11,000)</li>
          <li><strong>Motherboard:</strong> MSI PRO H610M-E DDR4 (~₹6,500)</li>
          <li><strong>GPU:</strong> AMD Radeon RX 6600 8GB (~₹19,500)</li>
          <li><strong>RAM:</strong> 16GB (8GBx2) DDR4 3200MHz (~₹3,500)</li>
          <li><strong>Storage:</strong> 512GB NVMe SSD (~₹3,000)</li>
          <li><strong>PSU:</strong> 550W 80+ Bronze (~₹3,500)</li>
          <li><strong>Cabinet:</strong> Budget ARGB Cabinet (~₹3,000)</li>
        </ul>

        <h3>Why These Parts?</h3>
        <p>The <strong>Intel i5-12400F</strong> is arguably the best value gaming CPU right now. It provides 6 cores and 12 threads, which is plenty for gaming and even light video editing. Pairing it with the <strong>AMD RX 6600</strong> is a masterstroke—this card beats the RTX 3050 and even rivals the RTX 4060 in pure rasterization value.</p>

        <h3>Performance Expectations</h3>
        <p>At 1080p High settings, you can expect:</p>
        <ul>
          <li><strong>Valorant:</strong> 300+ FPS</li>
          <li><strong>GTA V:</strong> 100+ FPS</li>
          <li><strong>Cyberpunk 2077:</strong> 60+ FPS (Medium-High)</li>
          <li><strong>Forza Horizon 5:</strong> 90+ FPS</li>
        </ul>

        <h3>Conclusion</h3>
        <p>This build represents the absolute best performance you can get for ₹50,000 in Madurai and across India today. It's balanced, power-efficient, and offers a great upgrade path for the future.</p>
      `}
      faqs={[
        { question: 'Is 50k enough for a gaming PC in 2024?', answer: 'Yes, it is the perfect budget for a high-quality 1080p gaming experience.' },
        { question: 'Should I choose NVIDIA or AMD for the GPU?', answer: 'In this budget, AMD (RX 6600) offers significantly better raw performance than NVIDIA alternatives.' },
        { question: 'Can I upgrade this build later?', answer: 'Definitely. You can add more RAM or a more powerful GPU like the RTX 4070 in the future by just upgrading the PSU.' }
      ]}
    />
  )
}
