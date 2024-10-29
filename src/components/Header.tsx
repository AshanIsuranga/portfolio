import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }

      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-sm' : 'bg-white'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300"
          >
            Ashan Isuranga
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`nav-link text-gray-600 hover:text-gray-900 transition-colors duration-300 ${
                  activeSection === item.href.substring(1) ? 'text-blue-600' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 scale-up-center">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`block py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 rounded-lg transition-all duration-200 ${
                  activeSection === item.href.substring(1) ? 'text-blue-600 bg-blue-50' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}