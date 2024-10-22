import HeroBanner from './components/HeroBanner'
import DropdownTable from './components/DropdownTable'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <HeroBanner />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Initiatives</h2>
          <DropdownTable />
        </div>
      </section>

      <section className="bg-emerald-100 py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Make a Difference Today</h2>
              <p className="text-lg mb-6">Your voice matters. Join our community of changemakers and help build a brighter future for India.</p>
              <Link href="/get-involved" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg text-lg transition duration-300">
                Get Involved Now
              </Link>
            </div>
            <div className="relative h-64 md:h-full min-h-[300px]">
              <Image
                src="https://source.unsplash.com/600x400/?volunteer,community"
                alt="Volunteers working together"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <Image
                  src={`https://source.unsplash.com/200x200/?success,story${index + 1}`}
                  alt={`Success Story ${index + 1}`}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Success Story {index + 1}</h3>
                <p className="text-gray-600 mb-4">A brief description of the success story and its impact on the community.</p>
                <Link href="/success-stories" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}