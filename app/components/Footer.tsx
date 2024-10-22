import Link from "next/link"

const initiatives = [
  { name: "Renewable Energy", href: "/initiatives/renewable-energy" },
  { name: "Women's Safety", href: "/initiatives/womens-safety" },
  { name: "Inclusive Education", href: "/initiatives/inclusive-education" },
  { name: "Equality", href: "/initiatives/equality" },
  { name: "Sports", href: "/initiatives/sports" },
]

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-semibold mb-4">Voices of Change</h3>
            <p className="mb-4">Dedicated to creating a better India through grassroots initiatives and community engagement.</p>
            <Link href="/get-involved" className="bg-white text-emerald-900 hover:bg-emerald-100 font-bold py-2 px-4 rounded-lg transition duration-300">
              Join Us Today
            </Link>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {initiatives.map((initiative) => (
                <li key={initiative.href}>
                  <Link href={initiative.href} className="hover:underline">{initiative.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link href="/success-stories" className="hover:underline">Success Stories</Link></li>
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-emerald-800 text-center">
          <p>&copy; 2023 Voices of Change. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}