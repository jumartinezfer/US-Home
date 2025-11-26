import { Routes, Route, Link } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { FaGlobeAmericas } from 'react-icons/fa';

// Importa las páginas
import Home from './pages/Home';
import Construction from './pages/Construction';
import Electrical from './pages/Electrical';
import About from './pages/About';
import Contact from './pages/Contact';

// Importa el componente para hacer scroll arriba
import ScrollToTop from './components/ScrollToTop';

// --- Componente Navbar Interno ---
// Lo definimos aquí para que tenga acceso al contexto de idioma
const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  
  const navLinks = {
    en: [
      { path: '/', label: 'Home' },
      { path: '/about', label: 'About Us' },
      { path: '/contact', label: 'Contact' },
      // Puedes añadir más links aquí, como a una página de Contacto dedicada si quieres
    ],
    es: [
      { path: '/', label: 'Inicio' },
      { path: '/about', label: 'Nosotros' },
      { path: '/contact', label: 'Contacto' },
    ]
  };
  const currentLinks = navLinks[language];

  return (
    <nav className="fixed top-0 w-full z-50 bg-us-dark/80 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white cursor-pointer drop-shadow-lg">
          US<span className="text-us-accent">Home</span>
        </Link>
        <div className="flex items-center gap-6">
          {currentLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className="hidden md:block text-white/90 hover:text-us-accent font-medium transition-colors text-sm uppercase tracking-wider"
            >
              {link.label}
            </Link>
          ))}
          <button onClick={toggleLanguage} className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/20 backdrop-blur-md">
            <FaGlobeAmericas className="text-us-accent" />
            <span className="font-bold text-xs">{language === 'en' ? 'ES' : 'EN'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};


// --- Componente Principal App ---
// SOLO DEBE EXISTIR UNA FUNCIÓN 'App'
function App() {
  return (
    <LanguageProvider>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/electrical" element={<Electrical />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
        {/* Si quieres una página de contacto separada, la añades aquí */}
      </Routes>
    </LanguageProvider>
  );
}

export default App;

