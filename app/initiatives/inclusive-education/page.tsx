import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen, Users, Puzzle, Lightbulb } from "lucide-react"

export default function InclusiveEducation() {
  const initiatives = [
    { title: "Teacher Training", icon: BookOpen, description: "Equip educators with skills for inclusive classrooms" },
    { title: "Community Awareness", icon: Users, description: "Promote understanding and acceptance of diverse learners" },
    { title: "Resource Development", icon: Puzzle, description: "Create tailored learning materials for special needs" },
    { title: "Policy Advocacy", icon: Lightbulb, description: "Push for inclusive education policies at all levels" },
  ]

  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://source.unsplash.com/1920x1080/?education,inclusive"
          alt="Inclusive Education Initiative Banner"
          width={1920}
          height={1080}
          className="absolute z-0 object-cover"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Inclusive Education for Special Needs</h1>
          <p className="text-xl sm:text-2xl">Ensuring every child has the opportunity to learn and grow</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Education for All, Without Exception</h2>
              <p className="text-lg mb-6">
                Our Inclusive Education Initiative is committed to creating learning environments that welcome and support all children, regardless of their abilities. We believe that every child deserves the chance to reach their full potential.
              </p>
              <Link href="/get-involved" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg text-lg transition duration-300 inline-flex items-center">
                Support Our Cause <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative h-64 md:h-full min-h-[300px]">
              <Image
                src="https://source.unsplash.com/600x400/?classroom,diversity"
                alt="Inclusive Education in Action"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our Focus Areas</h2>
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
          <h2 className="text-3xl font-bold mb-8">Help Us Create Inclusive Classrooms</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Your support can help us create more inclusive learning environments across India. Whether you're an educator, parent, or concerned citizen, there are many ways to contribute to this important cause.
          </p>
          <Link href="/get-involved" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg text-lg transition duration-300 inline-flex items-center">
            Get Involved Today <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}