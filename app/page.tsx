import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Indie UI</h1>
      <p className="text-xl sm:text-3xl md:text-4xl mb-3 font-semibold">
        Cool UI components for free <br />
      </p>
      <Link href="/docs" className="text-lg font-semibold">
        Start Exploring
      </Link>
    </main>
  )
}
