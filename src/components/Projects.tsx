import { Github, ExternalLink } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: 'Computer Accessories Shop',
      description: 'Full stack web application for computer shop where users can add items to the cart, submit review. Created with latest security implementations',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'CSS', 'EJS'],
      github: 'https://github.com/AshanIsuranga/G-REC-computer-shop',
      demo: '#'
    },
    {
      title: 'Cloud Note',
      description: 'Full stack web applications for provide a platform for university students can upload search and download educational materials',
      technologies: ['Spring Boot', 'Angular', 'PostgreSQL', 'CSS'],
      github: '#',
      demo: '#'
    },
    {
      title: 'library management system',
      description: 'web application library management systems utilizing basic data structures and algorithms. ',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'CSS', 'EJS'],
      github: 'https://github.com/AshanIsuranga/library-management-system-with-algorithms',
    },
    {
      title: 'AR Sales assistant project',
      description: 'chat application created using python language for integrate a 3D animation character.',
      technologies: ['Python', 'MongoDB'],
      github: 'https://github.com/AshanIsuranga/chat-application',
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-gray-50 rounded-lg p-6 hover:shadow-xl transition-all duration-300 ${
                isVisible ? 'slide-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="font-medium mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full hover:bg-blue-200 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
