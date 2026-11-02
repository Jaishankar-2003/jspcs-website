import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#171918] text-[#F5F3EE] p-6 text-center">
      <h1 className="text-6xl font-black text-[#E66A35] mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
      <p className="text-[#A7B5A0] mb-6 max-w-md">
        The hardware component or page you are looking for does not exist or has been relocated.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-[#E66A35] text-[#F5F3EE] font-mono text-sm uppercase tracking-wider hover:bg-[#d05724] transition-colors"
      >
        Return to Home
      </Link>
    </div>
  )
}
