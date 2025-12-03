import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function ReviewsCarousel() {
  const { language } = useLanguage();

  const reviews = [
    {
      id: 1,
      name: "Michael R.",
      role: "Homeowner",
      text: language === 'en' ? "Incredible attention to detail. They transformed our kitchen completely." : "Increíble atención al detalle. Transformaron nuestra cocina por completo.",
      stars: 5
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      role: "Interior Designer",
      text: language === 'en' ? "My go-to team for electrical work. Always professional and on time." : "Mi equipo de confianza para trabajos eléctricos. Siempre profesionales y puntuales.",
      stars: 5
    },
    {
      id: 3,
      name: "David Thompson",
      role: "Property Manager",
      text: language === 'en' ? "US Home handled our new construction project flawlessly from start to finish." : "US Home manejó nuestro proyecto de construcción nueva impecablemente de principio a fin.",
      stars: 5
    },
    {
      id: 4,
      name: "Elena Rodriguez",
      role: "Business Owner",
      text: language === 'en' ? "Fair pricing and honest communication. Highly recommended!" : "Precios justos y comunicación honesta. ¡Muy recomendados!",
      stars: 5
    },
    {
      id: 5,
      name: "James Wilson",
      role: "Architect",
      text: language === 'en' ? "Structural integrity is their priority. A pleasure to work with." : "La integridad estructural es su prioridad. Un placer trabajar con ellos.",
      stars: 5
    }
  ];

  // Estilos para la animación infinita
  const marqueeStyle = {
    display: 'flex',
    width: 'max-content',
    animation: 'scroll 40s linear infinite',
  };

  const keyframes = `
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `;

  return (
    <section className="py-20 bg-us-light overflow-hidden relative border-t border-gray-200">
      <style>{keyframes}</style>
      
      <div className="text-center mb-12 px-4 relative z-10">
        <h2 className="text-4xl font-bold text-us-dark mb-2">
          {language === 'en' ? "Client Stories" : "Historias de Clientes"}
        </h2>
        <div className="w-20 h-1 bg-us-accent mx-auto rounded-full"></div>
      </div>

      {/* Degradados laterales para suavizar la entrada/salida */}
      <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-us-light to-transparent z-20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-us-light to-transparent z-20 pointer-events-none"></div>

      <div className="flex" style={marqueeStyle}>
        {/* Renderizamos la lista DOS VECES para el loop infinito */}
        {[...reviews, ...reviews].map((review, index) => (
          <div 
            key={index} 
            className="w-[350px] md:w-[450px] bg-white p-8 rounded-2xl shadow-lg mx-4 flex-shrink-0 border border-gray-100 relative group hover:-translate-y-1 transition-transform duration-300"
          >
            <FaQuoteLeft className="text-us-accent/20 text-4xl absolute top-6 right-6" />
            
            <div className="flex gap-1 mb-4 text-us-accent text-lg">
              {[...Array(review.stars)].map((_, i) => <FaStar key={i} />)}
            </div>
            
            <p className="text-us-text text-lg mb-6 italic leading-relaxed">
              "{review.text}"
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-us-dark rounded-full flex items-center justify-center text-white font-bold">
                {review.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-us-dark">{review.name}</h4>
                <p className="text-xs text-gray-400 uppercase tracking-wider">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
