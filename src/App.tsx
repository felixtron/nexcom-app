import React from 'react';
import { Shield, Network, Radio, Camera, MonitorSpeaker } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ServiceArea from './components/ServiceArea';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-custom overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Technology Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Transformando desafíos en<br />oportunidades digitales
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Conectividad y Seguridad para impulsar el futuro de su empresa
          </p>
          <a href="#contact" className="btn">
            Comienza Ahora
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary mb-4">Nuestras Áreas de Enfoque</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Soluciones integrales que transforman la manera en que las empresas gestionan su seguridad y conectividad
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <ServiceArea
              title="Control de Acceso"
              description="Sistemas avanzados de control de acceso para proteger sus instalaciones y activos."
              features={[
                { icon: Shield, text: "Control biométrico avanzado" },
                { icon: Network, text: "Gestión centralizada" },
                { icon: Radio, text: "Integración con sistemas existentes" }
              ]}
            />
            <ServiceArea
              title="Conectividad y Comunicaciones"
              description="Soluciones de red robustas y seguras para mantener su negocio conectado."
              features={[
                { icon: Network, text: "Redes empresariales" },
                { icon: Radio, text: "Comunicación unificada" },
                { icon: Shield, text: "Seguridad de red" }
              ]}
            />
            <ServiceArea
              title="CCTV Analítico"
              description="Vigilancia inteligente con análisis avanzado para una seguridad predictiva."
              features={[
                { icon: Camera, text: "Análisis de video en tiempo real" },
                { icon: Shield, text: "Detección de anomalías" },
                { icon: Network, text: "Almacenamiento seguro" }
              ]}
            />
            <ServiceArea
              title="Audio y Video Control"
              description="Sistemas audiovisuales profesionales para espacios modernos."
              features={[
                { icon: MonitorSpeaker, text: "Automatización audiovisual" },
                { icon: Radio, text: "Control centralizado" },
                { icon: Network, text: "Integración IoT" }
              ]}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-secondary">¿Por Qué Elegirnos?</h2>
                <p className="text-gray-600 text-lg">
                  Transformamos la seguridad y conectividad empresarial con soluciones 
                  innovadoras y personalizadas para cada sector.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold text-secondary mb-2">Soluciones Tecnológicas Integrales</h3>
                  <p className="text-gray-600">
                    Ofrecemos un ecosistema completo de soluciones que se integran perfectamente 
                    para maximizar la eficiencia y seguridad de su organización.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold text-secondary mb-2">Adaptabilidad Sectorial</h3>
                  <p className="text-gray-600">
                    Nuestras soluciones se adaptan a las necesidades específicas de cada industria, 
                    desde comercio hasta infraestructura crítica.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold text-secondary mb-2">Últimas Tendencias Tecnológicas</h3>
                  <p className="text-gray-600">
                    Implementamos tecnologías de vanguardia para mantener su empresa 
                    a la delantera en seguridad y conectividad.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold text-secondary mb-2">Seguridad Predictiva</h3>
                  <p className="text-gray-600">
                    Utilizamos análisis avanzado de datos e IA para anticipar y prevenir 
                    incidentes antes de que ocurran.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold text-secondary mb-2">Personalización de Servicios</h3>
                  <p className="text-gray-600">
                    Desarrollamos soluciones a medida que se alinean perfectamente con sus 
                    objetivos y requerimientos específicos.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[600px] rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1451187863213-d1bcbaae3fa3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Technology and Nature"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-custom opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-custom">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">¿Listo para transformar su seguridad digital?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Contáctenos hoy para descubrir cómo nuestras soluciones pueden potenciar su empresa
          </p>
          <a 
            href="https://wa.me/525536977811" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Solicitar Consulta
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;