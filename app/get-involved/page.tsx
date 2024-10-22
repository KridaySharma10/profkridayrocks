import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const involvementOptions = [
  {
    title: "Volunteer",
    description: "Join our team of dedicated volunteers and make a direct impact in your community.",
    link: "/get-involved/volunteer"
  },
  {
    title: "Donate",
    description: "Support our initiatives financially. Every contribution, big or small, makes a difference.",
    link: "/get-involved/donate"
  },
  {
    title: "Spread the Word",
    description: "Share our mission with your network and help us reach more people.",
    link: "/get-involved/spread-the-word"
  },
  {
    title: "Partner with Us",
    description: "Collaborate with Voices of Change to create lasting impact through your organization.",
    link: "/get-involved/partner"
  }
]

export default function GetInvolved() {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Get Involved</h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          There are many ways you can contribute to creating a better India. Choose the option that best suits your interests and capabilities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {involvementOptions.map((option, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold mb-2">{option.title}</h2>
              <p className="text-gray-600 mb-4">{option.description}</p>
              <Link href={option.link} className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h2>
          <Link href="/contact" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg text-lg transition duration-300 inline-flex items-center">
            Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}