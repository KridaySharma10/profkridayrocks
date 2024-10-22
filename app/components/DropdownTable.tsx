'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const initiatives = [
  {
    title: "Renewable Energy Revolution",
    description: "Embrace clean energy solutions for a sustainable future.",
    details: "Our renewable energy initiative focuses on promoting solar, wind, and other clean energy sources across India. We work with communities to implement sustainable energy projects and educate people about the benefits of renewable energy."
  },
  {
    title: "Women's Safety Initiative",
    description: "Create a safer environment through education and action.",
    details: "This initiative aims to improve women's safety in public spaces, workplaces, and homes. We conduct awareness programs, self-defense training, and work with local authorities to implement safety measures."
  },
  {
    title: "Inclusive Education for Special Needs",
    description: "Support and resources for children with special needs.",
    details: "We strive to make education accessible for all children, especially those with special needs. Our program includes teacher training, resource development, and advocacy for inclusive education policies."
  },
  {
    title: "Equality for All",
    description: "Promote equal opportunities and rights for all classes.",
    details: "This initiative focuses on addressing social inequalities and promoting equal opportunities for marginalized communities. We work on awareness campaigns, skill development programs, and policy advocacy."
  },
  {
    title: "Sports for Development",
    description: "Encourage sports participation for health and unity.",
    details: "Through this initiative, we promote sports as a tool for personal development, community building, and national unity. We organize grassroots sports programs and advocate for better sports infrastructure in underserved areas."
  },
]

export default function DropdownTable() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="w-full max-w-4xl mx-auto">
      {initiatives.map((initiative, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            className="flex justify-between items-center w-full py-4 px-6 text-left focus:outline-none"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="font-medium">{initiative.title}</span>
            {openIndex === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4">
              <p className="text-gray-600 mb-2">{initiative.description}</p>
              <p className="text-sm">{initiative.details}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}