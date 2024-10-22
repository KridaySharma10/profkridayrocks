import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Shield, Book, Users, Megaphone } from "lucide-react"

export default function WomensSafety() {
  const initiatives = [
    { title: "Self-Defense Training", icon: Shield, description: "Empower women with practical self-defense skills" },
    { title: "Education Programs", icon: Book, description: "Raise awareness about women's rights and safety" },
    { title: "Community Outreach", icon: Users, description: "Engage local communities in creating safer environments" },
    { title: "Advocacy Campaigns", icon: Megaphone, description: "Push for stronger laws and policies to protect women" },
  ]

  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://source.unsplash.com/1920x1080/?women,empowerment"
          alt="Women's Safety Initiative Banner"
          width={1920}
          height={1080}
          className="absolute z-0 object-cover"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Women's Safety Initiative</h1>
          <p className="text-xl sm:text-2xl">Creating a safer India for women</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Empowering Women, Ensuring Safety</h2>
              <p className="text-lg mb-6">
                Our Women's Safety Initiative is dedicated to creating a safer environment for women across India. Through education, advocacy, and community engagement, we're working to build a society where women can live and thrive without fear.
              </p>
              <Link href="/get-involved" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg text-lg transition duration-300 inline-flex items-center">
                Get Involved <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative h-64 md:h-full min-h-[300px]">
              <Image
                src="https://source.unsplash.com/600x400/?women,safety"
                alt="Women's Safety in India"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our Approach</h2>
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
          <h2 className="text-3xl font-bold mb-8">Join the Movement for Women's Safety</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Everyone has a role to play in creating a safer society for women. Whether you're interested in volunteering, supporting our programs, or spreading awareness, your contribution can make a significant impact.
          </p>
          <Link href="/get-involved" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg text-lg transition duration-300 inline-flex items-center">
            Take Action Now <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}