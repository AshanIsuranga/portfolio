export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg">
            <p className="mb-6">
              Started coding at age 15 by creating simple games, which evolved into a deep fascination 
              with software architecture and artificial intelligence. Participated in multiple hackathons, 
              winning first place in the University Hackathon 2023 for developing an AI-powered study assistant.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  University of Moratuwa
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  Diploma in Information Technology
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}