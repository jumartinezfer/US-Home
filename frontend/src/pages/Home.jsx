import LiquidEther from '../blocks/Backgrounds/liquidEther/LiquidEther'; 
import InfiniteMenu from '../blocks/Components/InfiniteMenu/InfiniteMenu';
import ScrollStack from '../blocks/Components/ScrollStack/ScrollStack'; 
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { FaHardHat } from 'react-icons/fa';
import SocialLinks from '../components/SocialLinks';

// Tarjeta para el ScrollStack
const SectionPreview = ({ title, desc, link, image, color, textColor = "text-us-dark" }) => (
  <div className="relative w-full h-full flex flex-col md:flex-row overflow-hidden rounded-3xl">
    <div className="w-full md:w-1/2 h-48 md:h-full relative group">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
    </div>
    <div className={`w-full md:w-1/2 p-10 flex flex-col justify-center ${color}`}>
        <h2 className={`text-4xl font-bold mb-6 ${textColor}`}>{title}</h2>
        <p className={`${textColor === 'text-white' ? 'text-gray-300' : 'text-us-text'} mb-8 text-lg leading-relaxed font-medium`}>{desc}</p>
        <Link to={link} className={`self-start px-8 py-4 ${textColor === 'text-white' ? 'bg-white text-us-dark hover:bg-gray-200' : 'bg-us-dark text-white hover:bg-black'} font-bold rounded-full transition-all transform hover:scale-105 shadow-xl text-sm uppercase tracking-widest`}>
            {textColor === 'text-white' ? 'Get Started →' : 'View Details →'}
        </Link>
    </div>
  </div>
);

export default function Home() {
  const { t, language } = useLanguage();

  const photos = {
    construction: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800", 
    electrical: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800",
    newBuild: "https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?auto=format&fit=crop&w=800" // Foto nueva
  };

  // --- AQUÍ ESTÁ LA INTEGRACIÓN DE LA NUEVA TARJETA ---
  const stackItems = [
    {
      // Tarjeta 1: Construcción General
      content: <SectionPreview 
        title={language === 'en' ? "Construction & Remodeling" : "Construcción y Remodelación"}
        desc={language === 'en' 
          ? "From strong foundations to exquisite finishing touches. We breathe new life into spaces, ensuring structural integrity meets modern design." 
          : "Desde cimientos sólidos hasta acabados exquisitos. Damos nueva vida a los espacios, asegurando que la integridad estructural se una al diseño moderno."}
        link="/construction"
        image={photos.construction} 
        color="bg-us-light" 
      />
    },
    {
      // Tarjeta 2: Electricidad
      content: <SectionPreview 
        title={language === 'en' ? "Electrical Services" : "Servicios Eléctricos"}
        desc={language === 'en' 
          ? "Powering your home with safety and efficiency. From panel upgrades to smart lighting, we handle the energy that drives your life." 
          : "Energizando tu hogar con seguridad y eficiencia. Desde mejoras de paneles hasta iluminación inteligente, manejamos la energía que impulsa tu vida."}
        link="/electrical"
        image={photos.electrical}
        color="bg-white" 
      />
    },
    {
      // Tarjeta 3: New Construction (NUEVA)
      content: <SectionPreview 
        title={language === 'en' ? "New Construction" : "Construcción desde Cero"}
        desc={language === 'en' 
          ? "Building your dream home from the ground up. We specialize in framing, structural integrity, and turning empty lots into completed masterpieces." 
          : "Construyendo la casa de tus sueños desde el suelo. Nos especializamos en estructuras, integridad y convertir lotes vacíos en obras maestras."}
        link="/new-constructions"
        image={photos.newBuild}
        color="bg-us-accent" // Fondo Naranja para destacar
        textColor="text-white" // Texto Blanco para contraste
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
    <div className="min-h-screen bg-transparent relative">
        
        {/* FONDO LÍQUIDO FIXED */}
        <div id="liquid-canvas-container" style={{position: 'fixed', top:0, left:0, width:'100vw', height:'100vh', zIndex:-1}}>
            <LiquidEther colors={['#676b69', '#f0940b', '#edefee']} mouseForce={30} cursorSize={50} />
            <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
        </div>

        <div className="relative z-10">
            
            {/* HERO */}
            <header className="h-screen flex flex-col items-center justify-center px-4 text-center pointer-events-none relative">
                <div className="pointer-events-auto max-w-4xl">
                    <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] mb-6 leading-tight">
                        {t.hero_title}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md font-light">
                        {t.hero_subtitle}
                    </p>
                </div>
                {/* Eliminamos los iconos flotantes de aquí para evitar solapamientos */}
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

            {/* SCROLL STACK */}
            <section className="relative py-10">
                <div className="text-center mb-10 pointer-events-none">
                      <h3 className="text-white text-4xl font-bold drop-shadow-md">{language === 'en' ? "Our Expertise" : "Nuestra Experiencia"}</h3>
                      <p className="text-white/80 mt-2">{language === 'en' ? "Scroll to explore services" : "Desliza para explorar servicios"}</p>
                </div>
                <div className="px-4">
                    {/* Pasamos los 3 items ahora */}
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

            {/* FOOTER MEJORADO */}
                  <footer className="bg-black w-full py-12 px-6 relative z-20 border-t border-white/10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-sm text-white/50">
                    
                    {/* 1. IZQUIERDA: CRÉDITOS (Alineado a la izquierda en Desktop) */}
                    <div className="font-medium hover:text-us-accent transition-colors cursor-default text-center md:text-left order-3 md:order-1">
                        Designed by <span className="text-white">Whyvrix</span>
                    </div>

                    {/* 2. CENTRO: REDES SOCIALES (Bloque destacado) */}
                    <div className="flex flex-col items-center gap-3 order-1 md:order-2">
                        <p className="text-us-accent text-[10px] uppercase tracking-[0.2em] font-bold">
                            Follow Us
                        </p>
                        <div className="flex gap-4 p-2 bg-white/5 rounded-full border border-white/5 backdrop-blur-sm hover:border-us-accent/30 transition-colors">
                            <SocialLinks className="text-white hover:text-us-accent transition-transform hover:scale-110 duration-200" iconSize="text-lg" />
                        </div>
                    </div>

                    {/* 3. DERECHA: COPYRIGHT (Alineado a la derecha en Desktop) */}
                    <div className="text-center md:text-right order-2 md:order-3 leading-relaxed">
                        <p>© 2025 US Home Improvement LLC.</p>
                        <p className="text-xs opacity-60">All rights reserved.</p>
                    </div>
                </div>
            </footer>


        </div>
    </div>
  );
}
