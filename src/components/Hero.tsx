import { Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 slide-in">
              Hello! I'm Ashan Isuranga
            </h1>
            <p className="text-xl text-gray-600 mb-8 slide-in" style={{ animationDelay: '200ms' }}>
              A Software Engineering Undergraduate with an passion for Enterprise software development
            </p>
            <p className="text-lg text-gray-700 mb-8 italic slide-in" style={{ animationDelay: '400ms' }}>
              "Building elegant solutions to complex problems through code"
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-6 slide-in" style={{ animationDelay: '600ms' }}>
              <a
                href="https://github.com/AshanIsuranga"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors shine"
              >
                <Github size={24} className="hover-lift" />
              </a>
              <a
                href="https://www.linkedin.com/in/ashan-isuranga-9a6a2b246/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors shine"
              >
                <Linkedin size={24} className="hover-lift" />
              </a>
              <a
                href="mailto:uaa.isuranga@gmail.com"
                className="text-gray-600 hover:text-gray-900 transition-colors shine"
              >
                <Mail size={24} className="hover-lift" />
              </a>
            </div>
          </div>
          <div className="flex-1 max-w-md">
            <img
              src="/src/assets/images/me.jpg"
              alt="Ashan Isuranga"
              className="rounded-full shadow-2xl border-4 border-white floating"
            />
          </div>
        </div>
      </div>
    </section>
  )
}