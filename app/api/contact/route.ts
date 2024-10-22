import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  
  // Here you would typically send an email or save to a database
  console.log('Received contact form submission:', body)

  // For now, we'll just return a success message
  return NextResponse.json({ message: 'Thank you for your message. We will be in touch soon.' })
}