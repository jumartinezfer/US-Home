import LiquidEther from '../blocks/Backgrounds/LiquidEther/LiquidEther';
import InfiniteMenu from '../blocks/Components/InfiniteMenu/InfiniteMenu';
import ScrollStack from '../blocks/Components/ScrollStack/ScrollStack'; // Asegúrate de tener este componente
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaCheckCircle, FaHardHat } from 'react-icons/fa';
import SocialLinks from '../components/SocialLinks';

// Tarjeta para el ScrollStack (Diseño mejorado)
const SectionPreview = ({ title, desc, link, image, color }) => (
  <div className="relative w-full h-full flex flex-col md:flex-row overflow-hidden rounded-3xl">
    <div className="w-full md:w-1/2 h-48 md:h-full relative group">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
    </div>
    <div className={`w-full md:w-1/2 p-10 flex flex-col justify-center ${color}`}>
        <h2 className="text-4xl font-bold mb-6 text-us-dark">{title}</h2>
        <p className="text-us-text mb-8 text-lg leading-relaxed font-medium">{desc}</p>
        <Link to={link} className="self-start px-8 py-4 bg-us-dark text-white font-bold rounded-full hover:bg-black transition-all transform hover:scale-105 shadow-xl text-sm uppercase tracking-widest">
            View Details →
        </Link>
    </div>
  </div>
);

export default function Home() {
  const { t, language } = useLanguage();

  const photos = {
    construction: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800", 
    electrical: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800"
  };

  const stackItems = [
    {
      content: <SectionPreview 
        title={language === 'en' ? "Construction & Remodeling" : "Construcción y Remodelación"}
        desc={language === 'en' 
          ? "From strong foundations to exquisite finishing touches. We breathe new life into spaces, ensuring structural integrity meets modern design." 
          : "Desde cimientos sólidos hasta acabados exquisitos. Damos nueva vida a los espacios, asegurando que la integridad estructural se una al diseño moderno."}
        link="/construction"
        image={photos.construction} 
        color="bg-us-light" // Tarjeta clara
      />
    },
    {
      content: <SectionPreview 
        title={language === 'en' ? "Electrical Services" : "Servicios Eléctricos"}
        desc={language === 'en' 
          ? "Powering your home with safety and efficiency. From panel upgrades to smart lighting, we handle the energy that drives your life." 
          : "Energizando tu hogar con seguridad y eficiencia. Desde mejoras de paneles hasta iluminación inteligente, manejamos la energía que impulsa tu vida."}
        link="/electrical"
        image={photos.electrical}
        color="bg-white" // Tarjeta blanca pura para contraste al apilarse
      />
    }
  ];

  const menuItems = [
    { image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600&fit=crop', link: '/electrical', title: 'Electrical', description: 'Projects' },
    { image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&fit=crop', link: '/construction', title: 'Construction', description: 'Projects' },
    { image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=600&fit=crop', link: '/about', title: 'About Us', description: 'Our Story' },
    { image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&fit=crop', link: '/contact', title: 'Contact', description: 'Get Quote' }
  ];

  return (
    // Quitamos overflow-hidden del contenedor principal para permitir que sticky funcione
    <div className="min-h-screen bg-transparent relative">
        
        {/* FONDO LÍQUIDO FIXED */}
        <div id="liquid-canvas-container" style={{position: 'fixed', top:0, left:0, width:'100vw', height:'100vh', zIndex:-1}}>
            <LiquidEther colors={['#676b69', '#f0940b', '#edefee']} mouseForce={30} cursorSize={50} />
            <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
        </div>

        <div className="relative z-10">
            
            {/* HERO */}
            <header className="h-screen flex flex-col items-center justify-center px-4 text-center pointer-events-none">
                <div className="pointer-events-auto max-w-4xl">
                    <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] mb-6 leading-tight">
                        {t.hero_title}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md font-light">
                        {t.hero_subtitle}
                    </p>
                </div>
                
                {/* REDES SOCIALES FLOTANTES */}
                <div className="absolute bottom-10 right-10 pointer-events-auto z-50">
                  <SocialLinks className="text-white/80" iconSize="text-3xl" />
                </div>
            </header>

            {/* SECCIÓN PITCH DE VENTA */}
            <section className="py-20 px-4 flex justify-center pointer-events-none">
                <div className="pointer-events-auto max-w-5xl w-full bg-us-mint/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20 relative overflow-hidden">
                    <div className="text-center relative z-10">
                        <div className="flex justify-center mb-4 text-4xl text-us-accent drop-shadow-md"><FaHardHat /></div>
                        <h2 className="text-3xl md:text-4xl font-bold text-us-dark mb-6">
                            {language === 'en' ? "Why Choose US Home?" : "¿Por qué elegir US Home?"}
                        </h2>
                        <p className="text-lg md:text-xl font-medium mb-10 max-w-3xl mx-auto leading-relaxed text-us-dark/80">
                            {language === 'en' 
                            ? "We don't just fix things; we build relationships based on trust, fair pricing, and unwavering hard work." 
                            : "No solo arreglamos cosas; construimos relaciones basadas en confianza, precios justos y trabajo duro inquebrantable."}
                        </p>
                        
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white/60 p-4 rounded-xl shadow-sm"><h3 className="font-bold text-us-dark">{language === 'en' ? "Transparent Pricing" : "Precios Transparentes"}</h3></div>
                            <div className="bg-white/60 p-4 rounded-xl shadow-sm"><h3 className="font-bold text-us-dark">{language === 'en' ? "Quality Guaranteed" : "Calidad Garantizada"}</h3></div>
                            <div className="bg-white/60 p-4 rounded-xl shadow-sm"><h3 className="font-bold text-us-dark">{language === 'en' ? "Always On Time" : "Siempre A Tiempo"}</h3></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SCROLL STACK RESTAURADO */}
            {/* Importante: Sin overflow-hidden aquí para que sticky funcione */}
            <section className="relative py-10">
                <div className="text-center mb-10 pointer-events-none">
                     <h3 className="text-white text-4xl font-bold drop-shadow-md">{language === 'en' ? "Our Expertise" : "Nuestra Experiencia"}</h3>
                     <p className="text-white/80 mt-2">{language === 'en' ? "Scroll to explore services" : "Desliza para explorar servicios"}</p>
                </div>
                <div className="px-4">
                    <ScrollStack items={stackItems} />
                </div>
            </section>

            {/* MENÚ INFINITO */}
            <section className="h-[700px] w-full bg-black/70 backdrop-blur-md relative border-y border-white/10">
                <div className="absolute top-10 w-full text-center pointer-events-none z-20">
                    <h3 className="text-white text-3xl font-bold tracking-wider drop-shadow-lg">INTERACTIVE GALLERY</h3>
                </div>
                <div className="w-full h-full cursor-grab active:cursor-grabbing">
                    <InfiniteMenu items={menuItems} />
                </div>
            </section>

            <footer className="bg-black py-10 text-center text-white/50 text-sm relative z-20">
                © 2025 US Home Improvement LLC. All rights reserved.
            </footer>
        </div>
    </div>
  );
}
