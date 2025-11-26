import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProjectCard } from './ProjectCard';
import { ContactSection } from './ContactSection';
import { useLanguage } from '../context/LanguageContext';

export default function ProjectsPageTemplate({ category, titleEn, titleEs, descriptionEn, descriptionEs, headerImage }) {
  const { language, t } = useLanguage();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
    // Filtramos directamente en el fetch o en el cliente
    fetch(`${apiUrl}/projects?category=${category}`)
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error API:", err);
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="min-h-screen bg-us-light">
      
      {/* HERO DE LA PÁGINA INTERNA */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-us-dark">
        {/* Imagen de fondo con overlay */}
        <div className="absolute inset-0">
            <img src={headerImage} alt={titleEn} className="w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-us-light"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-us-dark mb-4 drop-shadow-lg">
                {language === 'en' ? titleEn : titleEs}
            </h1>
            <p className="text-xl text-us-dark/80 font-medium">
                {language === 'en' ? descriptionEn : descriptionEs}
            </p>
        </div>
      </div>

      {/* LISTA DE PROYECTOS */}
      <div className="max-w-7xl mx-auto px-4 py-16 min-h-[400px]">
        
        {/* Breadcrumb / Botón volver */}
        <Link to="/" className="inline-flex items-center text-us-accent font-bold mb-8 hover:underline">
            ← {language === 'en' ? 'Back to Home' : 'Volver al Inicio'}
        </Link>

        {loading ? (
            <div className="text-center py-20">
                <div className="inline-block w-12 h-12 border-4 border-us-accent border-t-transparent rounded-full animate-spin mb-4"></div>
                <p>{t.loading}</p>
            </div>
        ) : projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        ) : (
            <div className="text-center py-20 bg-white rounded-xl border-2 border-dashed border-us-gray">
                <p className="text-us-text text-xl italic">
                    {language === 'en' ? 'No projects uploaded yet.' : 'Aún no hay proyectos cargados.'}
                </p>
            </div>
        )}
      </div>

      {/* CONTACTO AL FINAL */}
      <ContactSection />
    </div>
  );
}
