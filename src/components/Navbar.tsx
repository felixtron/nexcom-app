import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Logo isScrolled={isScrolled} />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a 
                href="#services" 
                className={`transition-colors ${
                  isScrolled ? 'text-secondary hover:text-primary' : 'text-white/90 hover:text-white'
                }`}
              >
                Servicios
              </a>
              <a 
                href="#about" 
                className={`transition-colors ${
                  isScrolled ? 'text-secondary hover:text-primary' : 'text-white/90 hover:text-white'
                }`}
              >
                Nosotros
              </a>
              <a 
                href="https://wa.me/525536977811" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Contáctanos
              </a>
              <a 
                href="/login" 
                className={`transition-colors border-2 px-4 py-1.5 rounded-lg ${
                  isScrolled 
                    ? 'border-primary text-primary hover:bg-primary hover:text-white' 
                    : 'border-white text-white hover:bg-white hover:text-secondary'
                }`}
              >
                Clientes
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={isScrolled ? 'text-secondary' : 'text-white'}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm shadow-lg">
            <a href="#services" className="block px-3 py-2 text-secondary hover:text-primary">
              Servicios
            </a>
            <a href="#about" className="block px-3 py-2 text-secondary hover:text-primary">
              Nosotros
            </a>
            <a 
              href="https://wa.me/525536977811" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block px-3 py-2 text-secondary hover:text-primary"
            >
              Contacto
            </a>
            <a href="/login" className="block px-3 py-2 text-secondary hover:text-primary">
              Clientes
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}