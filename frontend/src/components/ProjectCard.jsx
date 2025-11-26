import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { useLanguage } from '../context/LanguageContext';

export const ProjectCard = ({ project }) => {
  const { language } = useLanguage();

  // Decidir qué texto mostrar según el idioma
  const title = language === 'en' ? project.title_en : project.title_es;
  const description = language === 'en' ? project.description_en : project.description_es;
  
  // Colores dinámicos según categoría
  const isElectrical = project.category === 'electrical';
  const badgeColor = isElectrical ? 'bg-us-dark' : 'bg-us-accent';

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-us-gray hover:shadow-2xl transition-all duration-300">
      
      {/* ZONA DEL SLIDER */}
      <div className="h-64 w-full relative group">
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src={project.beforeImage} alt="Before" />}
          itemTwo={<ReactCompareSliderImage src={project.afterImage} alt="After" />}
          position={50}
          // Personalización de la línea divisoria
          handle={
            <div className="h-full w-1 bg-us-accent shadow-[0_0_10px_rgba(0,0,0,0.5)] relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-us-accent text-white p-1 rounded-full text-xs font-bold">
                    ↔
                </div>
            </div>
          }
          className="h-full w-full"
        />
        
        {/* Etiquetas flotantes Antes/Después */}
        <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm pointer-events-none">
          {language === 'en' ? 'Before' : 'Antes'}
        </div>
        <div className="absolute top-2 right-2 bg-us-accent/80 text-white text-xs px-2 py-1 rounded backdrop-blur-sm pointer-events-none">
          {language === 'en' ? 'After' : 'Después'}
        </div>
      </div>

      {/* ZONA DE INFORMACIÓN */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-us-dark line-clamp-1">{title}</h3>
          <span className={`${badgeColor} text-white text-[10px] px-2 py-1 rounded-full uppercase tracking-wider`}>
            {isElectrical ? '⚡ Electric' : '🔨 Build'}
          </span>
        </div>
        <p className="text-us-text text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};
