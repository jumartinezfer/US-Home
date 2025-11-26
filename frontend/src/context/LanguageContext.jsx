import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

// 1. Exportación del Proveedor
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  const translations = {
    en: {
      nav_home: "Home",
      nav_contact: "Contact",
      hero_title: "Professional Construction Services",
      hero_subtitle: "Quality work for your home and business",
      section_construction: "Construction & Remodeling",
      section_electrical: "Electrical Services",
      loading: "Loading projects...",
      error: "Error loading projects"
    },
    es: {
      nav_home: "Inicio",
      nav_contact: "Contacto",
      hero_title: "Servicios Profesionales de Construcción",
      hero_subtitle: "Trabajo de calidad para tu hogar y negocio",
      section_construction: "Construcción y Remodelación",
      section_electrical: "Servicios Eléctricos",
      loading: "Cargando proyectos...",
      error: "Error cargando proyectos"
    }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 2. ¡ESTA ES LA LÍNEA QUE PROBABLEMENTE FALTA!
// Exportación del Hook personalizado
export const useLanguage = () => useContext(LanguageContext);
