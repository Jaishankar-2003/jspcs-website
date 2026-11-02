import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Schema from '@/components/Schema'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  variable: '--font-space-grotesk',
  weight: ['700'],
})

export const metadata: Metadata = {

  // Add this section to the top of your metadata object
  verification: {
    google: 'C2TtYGnInkXnVSXJtFJxP9m8hgkW0WiDNnp4mgc3t6A',  // Optional if you need it
  },

  metadataBase: new URL('https://jspcs.online'),

  title: 'JSPCS Online | Laptop & PC Repair Service |  Chip-Level Service in Tamil Nadu ',
  description: 'Expert PC Repair, Chip-Level Service, Custom PC Builds, and Laptop Solutions across Tamil Nadu. Genuine parts with pickup & delivery.',
  keywords: [
    'laptop repair tamil nadu',
    'pc repair service',
    'computer repair service',
    'chip level motherboard repair',
    'desktop repair service',
    'custom gaming pc build',
    'gaming pc repair',
    'pc upgrade service',
    'data recovery service',
    'doorstep laptop service',

    // Chennai
    'laptop repair chennai',
    'pc repair chennai',
    'computer service chennai',
    'custom pc build chennai',
    'gaming pc build chennai',
    'computer amc service chennai',

    // Madurai
    'laptop repair madurai',
    'pc repair madurai',
    'computer service madurai',
    'custom pc build madurai',
    'gaming pc build madurai',
    'computer amc service madurai',

    // Business & Support
    'annual maintenance contract',
    'business it support',
    'office computer maintenance',
  ],

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: 'JSPCS Online | Laptop & PC Repair Service | Chip-Level Service in Tamil Nadu ',
    description:
      'Expert Laptop & PC Repair Services in Tamil Nadu',
    url: 'https://jspcs.online',
    siteName: 'JSPCS Online',
    locale: 'en_IN',
    type: 'website',
  },

  twitter: {
    card: 'summary',
    title: 'JSPCS Online',
    description:
      'Expert Laptop & PC Repair Services in Tamil Nadu',
  },
  icons: {
    icon: "/logo.png",
    apple: '/logo.png',
  },
  formatDetection: {
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${inter.className}`}><Schema />{children}</body>
    </html>
  )
}




