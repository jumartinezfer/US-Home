import { Link } from 'react-router-dom';
import CircularGallery from '../blocks/Components/CircularGallery/CircularGallery';
import { ContactSection } from '../components/ContactSection';
import { useLanguage } from '../context/LanguageContext';
import { FaBolt, FaExclamationTriangle } from 'react-icons/fa';

export default function Electrical() {
  const { language } = useLanguage();

  // FOTOS DEL "ANTES" (Enfoque: Peligro, Desorden, Antiguo)
  // Reemplaza estas URLs con tus fotos reales de tableros viejos o cables sueltos
  const beforeImages = [
    { image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=800&auto=format&fit=crop', text: 'Messy Wiring' },
    { image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop', text: 'Old Panel' },
    { image: 'https://images.unsplash.com/photo-1518349619113-03114f06ac3a?q=80&w=800&auto=format&fit=crop', text: 'Risk' },
    { image: 'https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?q=80&w=800&auto=format&fit=crop', text: 'Dim Light' },
  ];

  // FOTOS DEL "DESPUÉS" (Enfoque: Seguridad, Orden, Tecnología)
  // Reemplaza con fotos de trabajos terminados, iluminación LED, paneles nuevos
  const afterImages = [
    { image: 'https://images.unsplash.com/photo-1558402529-d2638a7023e9?q=80&w=800&auto=format&fit=crop', text: 'Smart Panel' },
    { image: 'https://images.unsplash.com/photo-1565514020176-db073741d3d4?q=80&w=800&auto=format&fit=crop', text: 'LED Lighting' },
    { image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop', text: 'Clean Setup' },
    { image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3dab?q=80&w=800&auto=format&fit=crop', text: 'Automation' },
  ];

  return (
    <div className="min-h-screen bg-us-light">
      
      {/* HEADER - Estilo "Electricidad" (Más oscuro y vibrante) */}
      <div className="pt-28 pb-12 px-4 text-center bg-us-dark text-white relative overflow-hidden">
        
        {/* Efecto de fondo sutil */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_50%_50%,#f0940b,transparent)]"></div>

        <Link to="/" className="text-us-accent font-bold mb-6 inline-block hover:underline relative z-10">← Home</Link>
        
        <div className="flex justify-center items-center gap-3 mb-4 relative z-10">
            <FaBolt className="text-yellow-400 text-4xl animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
                {language === 'en' ? 'Electrical Solutions' : 'Soluciones Eléctricas'}
            </h1>
        </div>
        
        <p className="text-xl text-gray-300 max-w-2xl mx-auto relative z-10 leading-relaxed">
          {language === 'en' 
            ? "Powering safety and efficiency. We turn hazardous wiring into state-of-the-art energy systems and provide a great service to our clients while focusing on the best user experience."
            : "Potenciando seguridad y eficiencia. Convertimos instalaciones antiguas en sistemas de energía seguros y modernos brindando un excelente servicio a nuestro clientes y enfocandonos en la mejor experiencia de nuestros usuarios."}
        </p>
      </div>

      {/* SECCIÓN 1: EL PROBLEMA (Antes) */}
      <div className="relative w-full h-[600px] bg-gray-900 overflow-hidden border-b-4 border-red-500">
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10 bg-red-900/90 backdrop-blur-md px-8 py-3 rounded-full shadow-lg border border-red-500/50">
            <span className="text-red-100 font-bold uppercase tracking-widest text-lg md:text-xl flex items-center gap-3">
                <FaExclamationTriangle className="text-red-400" /> 
                {language === 'en' ? 'BEFORE' : 'ANTES'}
            </span>
        </div>
        {/* Bend positivo: Sensación de "cerrado" o problema */}
        <CircularGallery 
            items={beforeImages} 
            bend={3} 
            textColor="#ffffff" 
            borderRadius={0.05}
        />
      </div>

      {/* SECCIÓN 2: LA SOLUCIÓN (Después) */}
      <div className="relative w-full h-[600px] bg-us-dark overflow-hidden">
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10 bg-us-mint/20 backdrop-blur-md px-8 py-3 rounded-full shadow-lg border border-us-mint/50">
            <span className="text-us-mint font-bold uppercase tracking-widest text-lg md:text-xl flex items-center gap-3">
                <FaBolt /> 
                {language === 'en' ? 'AFTER' : 'DESPUÉS'}
            </span>
        </div>
        {/* Bend negativo: Sensación de "apertura" y solución */}
        <CircularGallery 
            items={afterImages} 
            bend={-3} 
            textColor="#ffffff" 
            borderRadius={0.05} 
        />
      </div>

      {/* NUEVO FINAL SIMPLE (Reemplaza <ContactSection />) */}
      <div className="py-20 bg-us-light text-center px-4">
        <h2 className="text-3xl font-bold text-us-dark mb-6">
            {language === 'en' ? "Ready to transform your space?" : "¿Listo para transformar tu espacio?"}
        </h2>
        <Link 
            to="/contact" 
            className="inline-block bg-us-accent hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg"
        >
            {language === 'en' ? "Get Information" : "Solicita Información"}
        </Link>
      </div>
    </div>
  );
}

