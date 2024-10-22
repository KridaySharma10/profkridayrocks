'use client'

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Initiatives", href: "/initiatives" },
  { name: "Success Stories", href: "/success-stories" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-emerald-700">Voices of Change</Link>
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <NavLink key={item.name} href={item.href}>{item.name}</NavLink>
            ))}
          </nav>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-2 py-4 px-4 bg-white">
            {navItems.map((item) => (
              <NavLink key={item.name} href={item.href} onClick={() => setIsOpen(false)}>{item.name}</NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link 
      href={href} 
      className="text-gray-600 hover:text-emerald-700 font-medium transition duration-150 ease-in-out px-3 py-2 rounded-md hover:bg-emerald-100"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}