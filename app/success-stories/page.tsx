import Image from 'next/image'
import Link from 'next/link'

const successStories = [
  {
    title: "Empowering Rural Communities with Solar Energy",
    description: "How a small village in Rajasthan transformed its economy with renewable energy.",
    image: "https://source.unsplash.com/400x300/?solar,village"
  },
  {
    title: "Breaking Barriers: Women in STEM",
    description: "The journey of young women pursuing careers in science and technology.",
    image: "https://source.unsplash.com/400x300/?women,technology"
  },
  {
    title: "Inclusive Classrooms: A New Era of Education",
    description: "How schools in Mumbai are adapting to support children with special needs.",
    image: "https://source.unsplash.com/400x300/?classroom,inclusive"
  },
  {
    title: "From Slums to Sports Stars",
    description: "The inspiring story of underprivileged youth excelling in national sports.",
    image: "https://source.unsplash.com/400x300/?sports,youth"
  },
  {
    title: "Bridging the Digital Divide",
    description: "How technology is bringing education to remote areas of India.",
    image: "https://source.unsplash.com/400x300/?technology,education"
  },
  {
    title: "Green Entrepreneurs",
    description: "Young innovators creating sustainable solutions for urban challenges.",
    image: "https://source.unsplash.com/400x300/?entrepreneur,sustainability"
  }
]

export default function SuccessStories() {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Success Stories</h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Discover the inspiring stories of change and progress from across India. These stories showcase the impact of our initiatives and the power of community action.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={story.image}
                alt={story.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{story.title}</h2>
                <p className="text-gray-600 mb-4">{story.description}</p>
                <Link href={`/success-stories/${index + 1}`} className="text-emerald-600 hover:text-emerald-700 font-medium">
                  Read Full Story
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}