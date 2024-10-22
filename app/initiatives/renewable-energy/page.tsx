import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sun, Wind, Zap, Leaf } from "lucide-react"

export default function RenewableEnergy() {
  const initiatives = [
    { title: "Solar Power Expansion", icon: Sun, description: "Expand solar power installations in rural areas" },
    { title: "Wind Energy Projects", icon: Wind, description: "Invest in offshore wind energy projects" },
    { title: "Smart Grid Development", icon: Zap, description: "Develop smart grids for efficient energy distribution" },
    { title: "Energy Efficiency", icon: Leaf, description: "Promote energy-efficient appliances and buildings" },
  ]

  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://source.unsplash.com/1920x1080/?renewable,energy"
          alt="Renewable Energy Banner"
          width={1920}
          height={1080}
          className="absolute z-0 object-cover"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Renewable Energy Revolution</h1>
          <p className="text-xl sm:text-2xl">Powering a sustainable future for India</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Embracing Clean Energy Solutions</h2>
              <p className="text-lg mb-6">
                India has made significant strides in renewable energy, but there's still a long way to go. By embracing clean energy solutions, we can combat climate change, reduce air pollution, and ensure a sustainable future for generations to come.
              </p>
              <Link href="https://mnre.gov.in/" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg text-lg transition duration-300 inline-flex items-center">
                Learn More at MNRE <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative h-64 md:h-full min-h-[300px]">
              <Image
                src="https://source.unsplash.com/600x400/?solar,panels"
                alt="Renewable Energy in India"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-100 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <initiative.icon className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
                <h3 className="text-xl font-semibold mb-2">{initiative.title}</h3>
                <p className="text-gray-600">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get Involved in Renewable Energy</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            There are many ways you can contribute to India's renewable energy revolution. From supporting local initiatives to adopting clean energy solutions in your home, every action counts.
          </p>
          <Link href="/get-involved" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg text-lg transition duration-300 inline-flex items-center">
            Join the Movement <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}