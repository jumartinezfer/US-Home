import { Link } from 'react-router-dom';
import CircularGallery from '../blocks/Components/CircularGallery/CircularGallery';
import { useLanguage } from '../context/LanguageContext';
import { FaDraftingCompass, FaHome } from 'react-icons/fa';
import SocialLinks from '../components/SocialLinks';

export default function NewConstructionPage() {
  const { language } = useLanguage();

  const structureImages = [
    { image: 'https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?q=80&w=800&auto=format&fit=crop', text: 'Framing' },
    { image: 'https://images.unsplash.com/photo-1625156374966-868f43590c91?q=80&w=800&auto=format&fit=crop', text: 'Foundation' },
    { image: 'https://images.unsplash.com/photo-1591588582259-e675bd2e6088?q=80&w=800&auto=format&fit=crop', text: 'Structure' },
    { image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop', text: 'Blueprints' },
  ];

  const finishedImages = [
    { image: 'https://images.unsplash.com/photo-1600596542815-60c37c6525fa?q=80&w=800&auto=format&fit=crop', text: 'Dream Home' },
    { image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop', text: 'Modern Design' },
    { image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop', text: 'New Build' },
    { image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop', text: 'Move-in Ready' },
  ];

  return (
    <div className="min-h-screen bg-us-light">
      
      {/* HEADER */}
      <div className="pt-28 pb-12 px-4 text-center bg-us-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <Link to="/" className="text-us-accent font-bold mb-6 inline-block hover:underline relative z-10">← Home</Link>
        <div className="flex justify-center items-center gap-3 mb-4 relative z-10">
            <FaDraftingCompass className="text-us-accent text-4xl" />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
                {language === 'en' ? 'New Construction' : 'Obra Nueva'}
            </h1>
        </div>
        <p className="text-xl text-us-light/80 max-w-2xl mx-auto relative z-10 leading-relaxed">
          {language === 'en' 
            ? "From the first blueprint to the final key turn. We build your vision from the ground up." 
            : "Desde el primer plano hasta la entrega de llaves. Construimos tu visión desde los cimientos."}
        </p>
      </div>

      {/* SECCIÓN 1: ANTES (Fondo Gris US-GRAY) */}
      <div className="relative w-full h-[600px] bg-us-gray overflow-hidden border-b-4 border-white/20">
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10 bg-us-dark/90 backdrop-blur-md px-8 py-3 rounded-full shadow-lg border border-white/20">
            <span className="text-white font-bold uppercase tracking-widest text-lg md:text-xl flex items-center gap-3">
                <FaDraftingCompass /> 
                {language === 'en' ? 'BEFORE' : 'ANTES'}
            </span>
        </div>
        <CircularGallery items={structureImages} bend={3} textColor="#000000" borderRadius={0.05} />
      </div>

      {/* SECCIÓN 2: DESPUÉS (Fondo Blanco) */}
      <div className="relative w-full h-[600px] bg-white overflow-hidden">
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10 bg-us-accent/90 backdrop-blur-md px-8 py-3 rounded-full shadow-lg">
            <span className="text-white font-bold uppercase tracking-widest text-lg md:text-xl flex items-center gap-3">
                <FaHome className="text-white" /> 
                {language === 'en' ? 'AFTER' : 'DESPUÉS'}
            </span>
        </div>
        <CircularGallery items={finishedImages} bend={-3} textColor="#1a1a1a" borderRadius={0.05} />
      </div>

      {/* CTA */}
      <div className="py-24 bg-us-light text-center px-4 border-t border-us-gray">
        <h2 className="text-3xl md:text-4xl font-bold text-us-dark mb-6">
            {language === 'en' ? "Ready to break ground?" : "¿Listo para empezar la obra?"}
        </h2>
        <p className="text-lg text-us-text mb-10 max-w-xl mx-auto">
            {language === 'en' ? "Let's discuss your blueprints and timeline." : "Hablemos sobre tus planos y cronograma."}
        </p>
        <Link 
            to="/contact" 
            className="inline-block bg-us-accent hover:bg-orange-600 text-white font-bold py-5 px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg uppercase tracking-widest"
        >
            {language === 'en' ? "Start My Project" : "Iniciar Mi Proyecto"}
        </Link>
      </div>

      {/* FOOTER */}
      <footer className="bg-black w-full py-12 px-6 relative z-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-sm text-white/50">
            <div className="font-medium hover:text-us-accent transition-colors cursor-default text-center md:text-left order-3 md:order-1">
                Designed by <span className="text-white">Whyvrix</span>
            </div>
            <div className="flex flex-col items-center gap-3 order-1 md:order-2">
                <p className="text-us-accent text-[10px] uppercase tracking-[0.2em] font-bold">Follow Us</p>
                <div className="flex gap-4 p-2 bg-white/5 rounded-full border border-white/5 backdrop-blur-sm hover:border-us-accent/30 transition-colors">
                    <SocialLinks className="text-white hover:text-us-accent transition-transform hover:scale-110 duration-200" iconSize="text-lg" />
                </div>
            </div>
            <div className="text-center md:text-right order-2 md:order-3 leading-relaxed">
                <p>© 2025 US Home Improvement LLC.</p>
                <p className="text-xs opacity-60">All rights reserved.</p>
            </div>
        </div>
      </footer>
    </div>
  );
}
