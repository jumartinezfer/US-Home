import { useEffect, useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ProjectCard } from './components/ProjectCard';
import { ContactSection } from './components/ContactSection';
import { FaGlobeAmericas } from 'react-icons/fa';

// Componente interno para usar el contexto
const MainContent = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Cargar datos del Backend usando variable de entorno
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000'; // Fallback por seguridad
    
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

  // 2. Separar por categorías
  const constructionProjects = projects.filter(p => p.category === 'construction');
  const electricalProjects = projects.filter(p => p.category === 'electrical');

  // Función para scroll suave al contacto
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-us-light font-sans">
      
      {/* NAVBAR */}
      <nav className="bg-white shadow-md sticky top-0 z-50 backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-us-dark cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
            US<span className="text-us-accent">Home</span>
          </h1>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={scrollToContact}
              className="hidden md:block text-us-text hover:text-us-accent font-medium transition-colors"
            >
              {t.nav_contact}
            </button>
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-us-light text-us-dark hover:bg-us-gray transition-colors border border-us-gray"
            >
              <FaGlobeAmericas className="text-us-accent" />
              <span className="font-bold text-sm">{language === 'en' ? 'ES' : 'EN'}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="bg-us-dark text-white py-24 px-4 text-center relative overflow-hidden">
        {/* Círculo decorativo de fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">{t.hero_title}</h2>
          <p className="text-xl text-us-gray mb-8 max-w-2xl mx-auto">{t.hero_subtitle}</p>
          <button 
            onClick={scrollToContact}
            className="bg-us-accent hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-orange-500/30"
          >
            {t.nav_contact}
          </button>
        </div>
      </header>

      <main>
        {loading && (
          <div className="py-20 text-center">
            <div className="inline-block w-12 h-12 border-4 border-us-accent border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-us-text">{t.loading}</p>
          </div>
        )}

        {/* SECCIÓN 1: CONSTRUCCIÓN */}
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="flex items-center gap-4 mb-12 justify-center md:justify-start">
            <div className="h-1 w-12 bg-us-accent"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-us-dark">{t.section_construction}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {constructionProjects.length > 0 ? (
              constructionProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              !loading && (
                <div className="col-span-full text-center py-10 bg-white rounded-xl border border-dashed border-us-gray">
                  <p className="text-us-text italic">No construction projects uploaded yet.</p>
                </div>
              )
            )}
          </div>
        </section>

        {/* SECCIÓN 2: ELECTRICIDAD */}
        <section className="bg-us-gray/20 py-20 border-t border-us-gray/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-4 mb-12 justify-center md:justify-start">
              <div className="h-1 w-12 bg-us-dark"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-us-dark">{t.section_electrical}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {electricalProjects.length > 0 ? (
                electricalProjects.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))
              ) : (
                !loading && (
                  <div className="col-span-full text-center py-10 bg-white/50 rounded-xl border border-dashed border-us-gray">
                    <p className="text-us-text italic">No electrical projects uploaded yet.</p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* SECCIÓN 3: CONTACTO */}
        <ContactSection />

      </main>

      {/* FOOTER SENCILLO */}
      <footer className="bg-us-dark text-us-gray py-8 text-center text-sm">
        <p>© {new Date().getFullYear()} US Home improvement LLC. All rights reserved.</p>
      </footer>
    </div>
  );
};

// App Principal
function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}

export default App;
