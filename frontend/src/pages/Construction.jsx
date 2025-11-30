import { Link } from 'react-router-dom';
import CircularGallery from '../blocks/Components/CircularGallery/CircularGallery';
import { ContactSection } from '../components/ContactSection';
import { useLanguage } from '../context/LanguageContext';

export default function Construction() {
  const { language } = useLanguage();

  // FOTOS DEL "ANTES" (Cloudinary)
  const beforeImages = [
    { image: 'https://picsum.photos/seed/const_before1/800/600', text: 'Old Structure' },
    { image: 'https://picsum.photos/seed/const_before2/800/600', text: 'Demolition' },
    { image: 'https://picsum.photos/seed/const_before3/800/600', text: 'Rough Work' },
    { image: 'https://picsum.photos/seed/const_before4/800/600', text: 'Site Prep' },
  ];

  // FOTOS DEL "DESPUÉS" (Cloudinary)
  const afterImages = [
    { image: 'https://picsum.photos/seed/const_after1/800/600', text: 'Final Facade' },
    { image: 'https://picsum.photos/seed/const_after2/800/600', text: 'Interior Finish' },
    { image: 'https://picsum.photos/seed/const_after3/800/600', text: 'Modern Kitchen' },
    { image: 'https://picsum.photos/seed/const_after4/800/600', text: 'Luxury Bath' },
  ];

  return (
    <div className="min-h-screen bg-us-light">
      
      {/* 1. HEADER */}
      <div className="pt-28 pb-10 px-4 text-center bg-us-dark text-white">
        <Link to="/" className="text-us-accent font-bold mb-4 inline-block hover:underline">← Home</Link>
        <h1 className="text-5xl font-bold mb-4">{language === 'en' ? 'Construction Projects' : 'Proyectos de Construcción'}</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          {language === 'en' 
            ? "Witness the transformation. From groundwork to masterpiece." 
            : "Testimonio de la transformación. Desde los cimientos hasta la obra maestra."}
        </p>
      </div>

      {/* 2. SECCIÓN ANTES (CARRUSEL 1) */}
      <div className="relative w-full h-[600px] bg-gray-900 overflow-hidden border-b-8 border-us-accent">
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 bg-red-600 px-6 py-2 rounded-full shadow-lg">
            <span className="text-white font-bold uppercase tracking-widest text-xl">
                {language === 'en' ? 'BEFORE' : 'ANTES'}
            </span>
        </div>
        {/* Carrusel con curvatura positiva */}
        <CircularGallery 
            items={beforeImages} 
            bend={3} 
            textColor="#ffffff" 
            borderRadius={0.05}
        />
      </div>

      {/* 3. SECCIÓN DESPUÉS (CARRUSEL 2) */}
      <div className="relative w-full h-[600px] bg-us-dark overflow-hidden">
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 bg-green-600 px-6 py-2 rounded-full shadow-lg">
            <span className="text-white font-bold uppercase tracking-widest text-xl">
                {language === 'en' ? 'AFTER' : 'DESPUÉS'}
            </span>
        </div>
        {/* Carrusel con curvatura negativa para variar el estilo */}
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
