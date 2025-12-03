import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';

export default function NotFound() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-us-dark flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-us-accent/10 to-transparent pointer-events-none"></div>

      <div className="relative z-10">
        <FaExclamationTriangle className="text-us-accent text-8xl mb-6 mx-auto animate-bounce" />
        
        <h1 className="text-9xl font-bold text-white opacity-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 select-none">
            404
        </h1>
        
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          {language === 'en' ? "Page Not Found" : "Página No Encontrada"}
        </h2>
        
        <p className="text-xl text-gray-400 mb-10 max-w-lg mx-auto">
          {language === 'en' 
            ? "The route you are trying to access does not exist or has been moved." 
            : "La ruta a la que intentas acceder no existe o ha sido movida."}
        </p>

        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-us-accent hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
        >
          <FaHome />
          {language === 'en' ? "Back to Home" : "Volver al Inicio"}
        </Link>
      </div>
      
    </div>
    
  );
}
