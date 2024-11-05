import { Mail, Linkedin, Github, FileText } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function Contact() {
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

  const contactLinks = [
    {
      icon: <Mail className="w-6 h-6 text-blue-500" />,
      title: 'Email',
      subtitle: 'uaa.isuranga@gmail.com',
      href: 'mailto:uaa.isuranga@gmail.com'
    },
    {
      icon: <Linkedin className="w-6 h-6 text-blue-500" />,
      title: 'LinkedIn',
      subtitle: 'Connect with me',
      href: 'https://www.linkedin.com/in/ashan-isuranga-9a6a2b246/'
    },
    {
      icon: <Github className="w-6 h-6 text-blue-500" />,
      title: 'GitHub',
      subtitle: 'View my repositories',
      href: 'https://github.com/AshanIsuranga'
    },
    {
      icon: <FileText className="w-6 h-6 text-blue-500" />,
      title: 'Resume',
      subtitle: 'Download PDF',
      href: 'https://drive.google.com/file/d/1Vtk5M9lJLBTp81K-biHfzpXN-9kqJm4A/view?usp=sharing'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactLinks.map((link, index) => (
              <a
                key={link.title}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`flex items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-50 ${
                  isVisible ? 'slide-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="transform transition-transform duration-300 hover:scale-110">
                  {link.icon}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">{link.title}</h3>
                  <p className="text-gray-600">{link.subtitle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}