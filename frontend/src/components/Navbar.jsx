import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { FaGlobeAmericas, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Efecto de fondo al hacer scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al cambiar de página
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // DEFINIR ENLACES POR IDIOMA
  const linksConfig = {
    en: [
        { name: 'Home', path: '/' },
        { name: 'Electrical', path: '/electrical' },
        { name: 'Renovation', path: '/construction' },
        { name: 'New Build', path: '/new-constructions' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ],
    es: [
        { name: 'Inicio', path: '/' },
        { name: 'Eléctrico', path: '/electrical' },
        { name: 'Remodelación', path: '/construction' },
        { name: 'Obra Nueva', path: '/new-constructions' }, 
        { name: 'Nosotros', path: '/about' },
        { name: 'Contactanos', path: '/contact' }
    ]
  };

  // Seleccionamos la lista según el idioma actual
  const navLinks = linksConfig[language] || linksConfig['en'];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 
      ${scrolled || mobileMenuOpen || location.pathname !== '/' ? 'bg-black/95 backdrop-blur-md py-4 shadow-lg border-b border-white/10' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold text-white tracking-tighter z-50 relative group">
          US<span className="text-us-accent group-hover:text-white transition-colors">HOME</span>
        </Link>

        {/* MENÚ ESCRITORIO (md:flex) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-xs uppercase tracking-[0.15em] font-bold hover:text-us-accent transition-colors 
                ${location.pathname === link.path ? 'text-us-accent' : 'text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Botón Idioma */}
          <button 
            onClick={toggleLanguage} 
            className="flex items-center gap-2 text-white hover:text-us-accent transition-colors border border-white/20 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest hover:border-us-accent"
          >
            <FaGlobeAmericas />
            <span>{language === 'en' ? 'ESP' : 'ENG'}</span>
          </button>
        </div>

        {/* BOTÓN MÓVIL (md:hidden) */}
        <div className="md:hidden flex items-center gap-4 z-50">
            {/* Botón idioma móvil */}
            <button onClick={toggleLanguage} className="text-white text-xs font-bold border border-white/20 px-2 py-1 rounded">
                {language === 'en' ? 'ES' : 'EN'}
            </button>
            
            {/* Botón Hamburguesa/Cerrar */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white text-2xl focus:outline-none">
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
        </div>

        {/* MENÚ MÓVIL DESPLEGABLE (OVERLAY) */}
        <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden h-screen w-screen ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {navLinks.map((link) => (
                <Link 
                    key={link.path} 
                    to={link.path} 
                    className="text-3xl font-bold text-white uppercase tracking-widest hover:text-us-accent"
                >
                    {link.name}
                </Link>
            ))}
            
            <p className="absolute bottom-10 text-white/20 text-xs">Designed by Whyvrix</p>
        </div>

      </div>
    </nav>
  );
}
