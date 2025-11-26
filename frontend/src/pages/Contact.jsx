import { useLanguage } from '../context/LanguageContext';
import { ContactSection } from '../components/ContactSection';
import SocialLinks from '../components/SocialLinks';

export default function Contact() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-us-light pt-20">
      {/* Encabezado Simple */}
      <div className="bg-us-dark text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {language === 'en' ? "Get in Touch" : "Contáctanos"}
        </h1>
        <p className="text-xl text-us-gray max-w-2xl mx-auto">
          {language === 'en' 
            ? "Ready to start your project? We are here to answer your questions." 
            : "¿Listo para iniciar tu proyecto? Estamos aquí para responder tus dudas."}
        </p>
      </div>

      {/* Reutilizamos tu componente de formulario inteligente */}
      <ContactSection />
      
      <div className="mt-12 text-center">
    <p className="text-us-silver text-sm uppercase tracking-widest mb-4">
        {language === 'en' ? "Follow us" : "Síguenos"}
    </p>
    <div className="flex justify-center">
        <SocialLinks className="text-us-dark" iconSize="text-3xl" />
    </div>
</div>
    </div>
  );
}
