import Image from 'next/image'
import Link from 'next/link'

export default function HeroBanner() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <Image
        src="https://source.unsplash.com/1920x1080/?india,community"
        alt="Voices of Change Hero Banner"
        width={1920}
        height={1080}
        className="absolute z-0 object-cover"
      />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">For a Better India</h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Join us in shaping the future of our nation through positive change and action.</p>
        <Link href="/get-involved" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg text-lg transition duration-300">
          Get Involved
        </Link>
      </div>
    </section>
  )
}