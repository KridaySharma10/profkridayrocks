import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Scale, Briefcase, GraduationCap, Heart } from "lucide-react"

export default function Equality() {
  const initiatives = [
    { title: "Equal Opportunities", icon: Scale, description: "Promote fairness in education and employment" },
    { title: "Skill Development", icon: Briefcase, description: "Empower marginalized groups with valuable skills" },
    { title: "Education Access", icon: GraduationCap, description: "Ensure quality education for all social classes" },
    { title: "Healthcare Equity", icon: Heart, description: "Advocate for equal access to healthcare services" },
  ]

  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://source.unsplash.com/1920x1080/?equality,diversity"
          alt="Equality for All Banner"
          width={1920}
          height={1080}
          className="absolute z-0 object-cover"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Equality for All</h1>
          <p className="text-xl sm:text-2xl">Building a fair and inclusive society for every Indian</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Championing Equal Rights and Opportunities</h2>
              <p className="text-lg mb-6">
                Our Equality for All initiative is dedicated to breaking down barriers and promoting equal opportunities for all sections of society. We believe that a truly prosperous India is one where every citizen has the chance to succeed, regardless of their background.
              </p>
              <Link href="/get-involved" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg text-lg transition duration-300 inline-flex items-center">
                Join Our Cause <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative h-64 md:h-full min-h-[300px]">
              <Image
                src="https://source.unsplash.com/600x400/?equality,community"
                alt="Equality in Action"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our Key Focus Areas</h2>
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
          <h2 className="text-3xl font-bold mb-8">Be a Champion for Equality</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Everyone has a role to play in creating a more equal society. Whether you want to volunteer, support our programs, or spread awareness, your contribution can make a significant impact in promoting equality for all.
          </p>
          <Link href="/get-involved" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg text-lg transition duration-300 inline-flex items-center">
            Take Action Now <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}