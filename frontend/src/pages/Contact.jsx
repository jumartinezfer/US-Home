import { useLanguage } from '../context/LanguageContext';
import { ContactSection } from '../components/ContactSection';
import ReviewsCarousel from '../components/ReviewsCarousel'; 
import SocialLinks from '../components/SocialLinks';

export default function Contact() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-us-light pt-20">
      {/* Encabezado Simple */}
      <div className="bg-us-dark text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === 'en' ? "Get in Touch" : "Contáctanos"}
            </h1>
            <p className="text-xl text-us-gray max-w-2xl mx-auto">
            {language === 'en' 
                ? "Ready to start your project? Let's build something great together." 
                : "¿Listo para iniciar tu proyecto? Construyamos algo genial juntos."}
            </p>
        </div>
        {/* Decoración de fondo sutil */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,#f0940b15,transparent)] pointer-events-none"></div>
      </div>

      {/* --- 1. RESEÑAS (AHORA ARRIBA) --- */}
      {/* Fondo blanco para separar visualmente del header oscuro y del formulario gris */}
      <div className="bg-white py-8 border-b border-gray-200">
         <ReviewsCarousel />
      </div>

      {/* --- 2. FORMULARIO --- */}
      <ContactSection />
      
      {/* Footer de Redes Sociales */}
      <div className="py-16 bg-us-light text-center border-t border-gray-200">
        <p className="text-us-silver text-sm uppercase tracking-widest mb-6 font-bold">
            {language === 'en' ? "Follow us on Social Media" : "Síguenos en Redes Sociales"}
        </p>
        <div className="flex justify-center">
            <SocialLinks className="text-us-dark hover:text-us-accent transition-colors" iconSize="text-3xl" />
        </div>
      </div>
<footer className="bg-black w-full py-6 px-6 relative z-20 border-t border-white/10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
                    
                    {/* IZQUIERDA: TU CRÉDITO */}
                    <div className="font-medium hover:text-us-accent transition-colors cursor-default">
                        Designed by <span className="text-white">Whyvrix</span>
                    </div>

                    {/* DERECHA: COPYRIGHT */}
                    <div className="text-center md:text-right">
                        © 2025 US Home Improvement LLC. All rights reserved.
                    </div>
                </div>
            </footer>

    </div>
  );
}
