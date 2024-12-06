import React from 'react';
import Logo from './Logo';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
            <div className="space-y-2">
              <p>Tecnología y Servicios Nexcom SAS de CV</p>
              <p>Camino Antguo a metepec, No. 300</p>
              <p>Santa Anna Tlapaltitlan</p>
              <p>Toluca Edo. de México</p>
              <p>+52 55 3697 7811</p>
              <a href="mailto:hola@nexcom.mx" className="text-primary hover:text-primary/90">
                hola@nexcom.mx
              </a>
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary">Vacantes</a></li>
              <li><a href="#" className="hover:text-primary">Nuestra historia</a></li>
              <li><a href="#" className="hover:text-primary">Inversionistas</a></li>
              <li><a href="#" className="hover:text-primary">Programa de partners</a></li>
            </ul>
          </div>

          {/* Information Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Información</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary">Términos y condiciones</a></li>
              <li><a href="#" className="hover:text-primary">Declaración de privacidad</a></li>
              <li><a href="#" className="hover:text-primary">Garantías y Soporte</a></li>
              <li><a href="#" className="hover:text-primary">Contacto</a></li>
            </ul>
          </div>

          {/* About Section */}
          <div className="space-y-6">
            <div className="text-white">
              <Logo isScrolled={false} />
            </div>
            <p className="text-sm">
              Nexcom está revolucionando la manera en que las organizaciones abrazan la transformación digital. 
              Al guiar a nuestros clientes en la modernización de sus infraestructuras tecnológicas y la 
              adopción de soluciones innovadoras.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="hover:text-primary"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="hover:text-primary"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="hover:text-primary"><Youtube className="w-6 h-6" /></a>
              <a href="#" className="hover:text-primary"><Instagram className="w-6 h-6" /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-400">© Nexcom 2024</p>
        </div>
      </div>
    </footer>
  );
}