import { Code, Layout, Database, Users } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function Skills() {
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

  const skillCategories = [
    {
      title: 'Programming',
      icon: <Code className="w-6 h-6" />,
      skills: [
        'Data structures and algorithms',
        'Java, Python, JavaScript, C',
        'Object oriented programming',
        'Software design and design patterns'
      ]
    },
    {
      title: 'Frontend Development',
      icon: <Layout className="w-6 h-6" />,
      skills: [
        'Angular',
        'HTML',
        'CSS',
        'Bootstrap CSS',
        'EJS'
      ]
    },
    {
      title: 'Backend Development',
      icon: <Database className="w-6 h-6" />,
      skills: [
        'Node.js',
        'Express.js',
        'Spring Boot'
      ]
    },
    {
      title: 'Soft Skills',
      icon: <Users className="w-6 h-6" />,
      skills: [
        'Strong problem-solving abilities',
        'Excellent team collaboration',
        'Effective communication',
        'Agile project management',
        'Time management'
      ]
    }
  ]

  return (
    <section id="skills" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`bg-white bg-opacity-90 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 shine ${
                isVisible ? 'slide-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="text-blue-500 transform transition-transform duration-300 hover:scale-110">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold ml-2">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-gray-600 flex items-center hover:text-blue-600 transition-colors duration-200">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}