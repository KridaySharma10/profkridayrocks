import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Trophy, Users, School, Heart } from "lucide-react"

export default function Sports() {
  const initiatives = [
    { title: "Grassroots Programs", icon: Trophy, description: "Develop sports at the community level" },
    { title: "Inclusive Sports", icon: Users, description: "Promote participation for all abilities" },
    { title: "School Partnerships", icon: School, description: "Enhance sports education in schools" },
    { title: "Health and Wellness", icon: Heart, description: "Use sports to promote overall well-being" },
  ]

  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://source.unsplash.com/1920x1080/?sports,india"
          alt="Sports for Development Banner"
          width={1920}
          height={1080}
          className="absolute z-0 object-cover"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Sports for Development</h1>
          <p className="text-xl sm:text-2xl">Harnessing the power of sports to build a stronger India</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Empowering Communities Through Sports</h2>
              <p className="text-lg mb-6">
                Our Sports for Development initiative believes in the transformative power of sports. We're working to create opportunities for all Indians to participate in sports, promoting health, unity, and personal growth.
              </p>
              <Link href="/get-involved" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg text-lg transition duration-300 inline-flex items-center">
                Get Involved <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative h-64 md:h-full min-h-[300px]">
              <Image
                src="https://source.unsplash.com/600x400/?sports,community"
                alt="Sports in Community"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our Initiatives</h2>
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
          <h2 className="text-3xl font-bold mb-8">Join the Sports Movement</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether you're an athlete, coach, or sports enthusiast, there are many ways to contribute to our Sports for Development initiative. Help us create a healthier, more united India through the power of sports.
          </p>
          <Link href="/get-involved" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg text-lg transition duration-300 inline-flex items-center">
            Participate Now <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}