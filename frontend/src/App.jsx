import { useEffect, useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ProjectCard } from './components/ProjectCard';
import { ContactSection } from './components/ContactSection';
import InfiniteMenu from './blocks/Components/InfiniteMenu/InfiniteMenu';
import LiquidEther from './blocks/Backgrounds/LiquidEther/LiquidEther';
import { FaGlobeAmericas } from 'react-icons/fa';
import './blocks/Backgrounds/LiquidEther/LiquidEther.css';

const MainContent = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
    fetch(`${apiUrl}/projects`)
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error connecting to API:", err);
        setLoading(false);
      });
  }, []);

  const constructionProjects = projects.filter(p => p.category === 'construction');
  const electricalProjects = projects.filter(p => p.category === 'electrical');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    {
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600&auto=format&fit=crop',
      link: '#electrical-section',
      title: language === 'en' ? 'Electrical' : 'Electricidad',
      description: language === 'en' ? 'Wiring & Repairs' : 'Cableado y Reparaciones'
    },
    {
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop',
      link: '#construction-section',
      title: language === 'en' ? 'Construction' : 'Construcción',
      description: language === 'en' ? 'Structures & Design' : 'Estructuras y Diseño'
    },
    {
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=600&auto=format&fit=crop',
      link: '#contact',
      title: language === 'en' ? 'Remodeling' : 'Remodelación',
      description: language === 'en' ? 'Interior Updates' : 'Renovación Interior'
    },
    {
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop',
      link: '#contact',
      title: language === 'en' ? 'Planning' : 'Planificación',
      description: language === 'en' ? 'Project Management' : 'Gestión de Proyectos'
    }
  ];

  return (
    <div className="relative min-h-screen font-sans bg-us-dark">
      
      {/* CAPA 1: FONDO LÍQUIDO (FIXED) */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }}>
         <LiquidEther 
            colors={['#676b69', '#f0940b', '#edefee']}
            mouseForce={30}
            cursorSize={50}
         />
      </div>

      {/* CAPA 2: CONTENIDO (SCROLLABLE) */}
      <div className="relative z-10">
        
        {/* NAVBAR */}
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/10 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
              US<span className="text-us-accent">Home</span>
            </h1>
            <div className="flex items-center gap-4">
              <button onClick={() => scrollToSection('contact')} className="hidden md:block text-white hover:text-us-accent font-medium transition-colors">
                {t.nav_contact}
              </button>
              <button onClick={toggleLanguage} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/20">
                <FaGlobeAmericas className="text-us-accent" />
                <span className="font-bold text-sm">{language === 'en' ? 'ES' : 'EN'}</span>
              </button>
            </div>
          </div>
        </nav>

        {/* HERO SECTION */}
        <header className="relative h-screen flex items-center justify-center px-4 pointer-events-none">
          {/* El pointer-events-none permite que el mouse atraviese el texto y mueva el líquido */}
          <div className="text-center max-w-5xl mx-auto pointer-events-auto"> 
            <h2 className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl tracking-tight">
              {t.hero_title}
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light drop-shadow-lg">
              {t.hero_subtitle}
            </p>
            <button 
              onClick={() => scrollToSection('infinite-menu')}
              className="bg-us-accent hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-110 shadow-xl"
            >
              Explore Services
            </button>
          </div>
        </header>

        {/* MENÚ INFINITO */}
        <section id="infinite-menu" className="w-full h-[700px] relative bg-black/50 backdrop-blur-md border-t border-white/10">
          <div className="absolute top-10 w-full text-center z-20 pointer-events-none">
            <h3 className="text-white text-3xl font-bold tracking-wider">INTERACTIVE GALLERY</h3>
          </div>
          <div className="w-full h-full cursor-grab active:cursor-grabbing z-10 relative">
             <InfiniteMenu items={menuItems} />
          </div>
        </section>

        {/* PROYECTOS */}
        <main className="bg-us-light relative z-20 shadow-2xl min-h-screen">
          {loading && (
            <div className="py-20 text-center">
              <div className="inline-block w-12 h-12 border-4 border-us-accent border-t-transparent rounded-full animate-spin mb-4"></div>
            </div>
          )}

          <section id="construction-section" className="max-w-7xl mx-auto px-4 py-24">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-1 w-12 bg-us-accent"></div>
              <h2 className="text-4xl font-bold text-us-dark uppercase">{t.section_construction}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {constructionProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>

          <section id="electrical-section" className="bg-gray-200/60 py-24 border-t border-gray-300">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center gap-4 mb-12">
                <div className="h-1 w-12 bg-us-dark"></div>
                <h2 className="text-4xl font-bold text-us-dark uppercase">{t.section_electrical}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {electricalProjects.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </section>

          <ContactSection />
        </main>

        <footer className="bg-us-dark text-white py-12 text-center border-t border-white/10">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} US Home Services.</p>
        </footer>

      </div>
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}

export default App;
