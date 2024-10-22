import Link from "next/link"
import { ArrowRight, Sun, Shield, Heart, Scale, Trophy } from "lucide-react"

export default function Initiatives() {
  const initiatives = [
    {
      title: "Renewable Energy Revolution",
      description: "Embrace clean energy solutions for a sustainable future.",
      icon: Sun,
      link: "/initiatives/renewable-energy",
    },
    {
      title: "Women's Safety Initiative",
      description: "Create a safer environment through education and action.",
      icon: Shield,
      link: "/initiatives/womens-safety",
    },
    {
      title: "Inclusive Education for Special Needs",
      
      description: "Support and resources for children with special needs.",
      icon: Heart,
      link: "/initiatives/inclusive-education",
    },
    {
      title: "Equality for All",
      description: "Promote equal opportunities and rights for all classes.",
      icon: Scale,
      link: "/initiatives/equality",
    },
    {
      title: "Sports for Development",
      description: "Encourage sports participation for health and unity.",
      icon: Trophy,
      link: "/initiatives/sports",
    },
  ]

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Initiatives</h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Discover the key areas where Voices of Change is making a difference. Each initiative represents our commitment to creating a better, more inclusive India.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <initiative.icon className="w-12 h-12 mb-4 text-emerald-600" />
              <h2 className="text-2xl font-semibold mb-2">{initiative.title}</h2>
              <p className="text-gray-600 mb-4">{initiative.description}</p>
              <Link href={initiative.link} className="inline-flex items-center text-emerald-600 hover:text-emerald-700">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}