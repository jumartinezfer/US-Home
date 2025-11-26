import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { FaHandshake, FaPiggyBank, FaHammer, FaStar, FaEye, FaHistory } from 'react-icons/fa';
import SocialLinks from '../components/SocialLinks';

export default function About() {
  const { language } = useLanguage();

  const t = {
    en: {
      title: "About US Home Improvement LLC",
      subtitle: "Built on hard work, driven by customer satisfaction.",
      
      // Historia extendida
      about_title: "Who We Are",
      about_txt: "US Home Improvement LLC, was born from a simple belief: that homeowners deserve better. Better communication, better pricing, and better results. What started as a passion for fixing things has grown into a premier service provider. We are a team of dedicated craftsmen who treat every home as if it were our own. We understand the value of a hard-earned dollar, which is why we fight to keep costs fair without ever cutting corners.",

      // Misión extendida
      mission_title: "Our Mission",
      mission_txt: "Our mission goes beyond just construction and electrical work. We strive to provide peace of mind. We are committed to delivering top-tier technical solutions that fit your specific budget constraints while maintaining the highest safety standards. We aim to demystify home improvement, ensuring every client feels informed, respected, and completely satisfied with the final result.",

      // Visión extendida
      vision_title: "Our Vision",
      vision_txt: "We envision a future where the contractor-client relationship is built on total transparency. We aim to become the region's most trusted home service partner, setting a new industry standard where technical excellence meets human integrity. We want to be the first name you think of when you need help, not just because we are good, but because we care.",

      val1_title: "Smart Economy",
      val1_txt: "We optimize resources and materials to give you the best price-quality ratio in the market.",
      val2_title: "Hard Work",
      val2_txt: "We believe in sweating the details. No job is too small, no challenge is too big.",
      val3_title: "Customer First",
      val3_txt: "Your satisfaction is our only metric for success. We listen, we adapt, we deliver.",
    },
    es: {
      title: "Sobre US Home Improvement LLC",
      subtitle: "Construido sobre trabajo duro, impulsado por la satisfacción del cliente.",
      
      // Historia extendida
      about_title: "Quiénes Somos",
      about_txt: "US Home Improvement LLC, nació de una creencia simple: que los propietarios merecen algo mejor. Mejor comunicación, mejores precios y mejores resultados. Lo que comenzó como una pasión por arreglar cosas ha crecido hasta convertirse en un proveedor de servicios de primer nivel. Somos un equipo de artesanos dedicados que tratamos cada casa como si fuera la nuestra. Entendemos el valor del dinero ganado con esfuerzo, por eso luchamos por mantener costos justos sin tomar atajos.",

      // Misión extendida
      mission_title: "Nuestra Misión",
      mission_txt: "Nuestra misión va más allá de la construcción y el trabajo eléctrico. Nos esforzamos por brindar tranquilidad. Estamos comprometidos a entregar soluciones técnicas de primer nivel que se ajusten a tu presupuesto sin comprometer los estándares de seguridad. Nuestro objetivo es desmitificar las mejoras del hogar, asegurando que cada cliente se sienta informado, respetado y completamente satisfecho con el resultado final.",

      // Visión extendida
      vision_title: "Nuestra Visión",
      vision_txt: "Visualizamos un futuro donde la relación contratista-cliente se base en transparencia total. Aspiramos a ser el socio más confiable de la región, estableciendo un nuevo estándar en la industria donde la excelencia técnica se une a la integridad humana. Queremos ser el primer nombre en el que pienses cuando necesites ayuda, no solo porque somos buenos, sino porque nos importa.",

      val1_title: "Economía Inteligente",
      val1_txt: "Optimizamos recursos para darte la mejor relación calidad-precio del mercado.",
      val2_title: "Trabajo Duro",
      val2_txt: "Creemos en sudar los detalles. Ningún trabajo es pequeño, ningún reto es grande.",
      val3_title: "Cliente Primero",
      val3_txt: "Tu satisfacción es nuestra única métrica de éxito. Escuchamos, adaptamos y cumplimos.",
    }
  }[language];

  return (
    <div className="min-h-screen bg-us-light pt-20 pb-20">
      
      {/* HEADER */}
      <div className="bg-us-dark text-white py-24 px-4 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
            <Link to="/" className="text-us-accent font-bold mb-6 inline-block hover:underline">← Home</Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{t.title}</h1>
            <p className="text-xl md:text-2xl text-us-mint font-light italic">{t.subtitle}</p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-us-light/10 pointer-events-none"></div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-4">
        
        {/* SECCIÓN DE VALORES (FLOTANTE) */}
        <div className="grid md:grid-cols-3 gap-8 -mt-16 relative z-20 mb-20">
            <div className="bg-white p-10 rounded-2xl shadow-xl border-t-8 border-us-mint hover:-translate-y-2 transition-transform">
                <div className="w-16 h-16 bg-us-mint/20 rounded-full flex items-center justify-center mb-6 text-3xl text-green-600"><FaPiggyBank /></div>
                <h3 className="text-2xl font-bold text-us-dark mb-4">{t.val1_title}</h3>
                <p className="text-us-text leading-relaxed">{t.val1_txt}</p>
            </div>
            <div className="bg-us-dark text-white p-10 rounded-2xl shadow-xl border-t-8 border-us-accent hover:-translate-y-2 transition-transform md:scale-105">
                <div className="w-16 h-16 bg-us-accent/20 rounded-full flex items-center justify-center mb-6 text-3xl text-us-accent"><FaHammer /></div>
                <h3 className="text-2xl font-bold mb-4">{t.val2_title}</h3>
                <p className="text-gray-300 leading-relaxed">{t.val2_txt}</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-xl border-t-8 border-us-mint hover:-translate-y-2 transition-transform">
                <div className="w-16 h-16 bg-us-mint/20 rounded-full flex items-center justify-center mb-6 text-3xl text-blue-600"><FaHandshake /></div>
                <h3 className="text-2xl font-bold text-us-dark mb-4">{t.val3_title}</h3>
                <p className="text-us-text leading-relaxed">{t.val3_txt}</p>
            </div>
        </div>

        {/* HISTORIA (QUIÉNES SOMOS) */}
        <div className="mb-20 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-us-light rounded-full mb-6 text-us-dark text-3xl">
                <FaHistory />
            </div>
            <h2 className="text-4xl font-bold text-us-dark mb-6">{t.about_title}</h2>
            <p className="text-xl text-us-text leading-loose font-light">
                {t.about_txt}
            </p>
        </div>

        {/* MISIÓN Y VISIÓN (GRID GRANDE) */}
        <div className="grid md:grid-cols-2 gap-12">
            
            {/* MISIÓN */}
            <div className="bg-white border border-us-gray/10 p-10 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-yellow-100 rounded-full text-yellow-600"><FaStar className="text-2xl" /></div>
                    <h2 className="text-3xl font-bold text-us-dark">{t.mission_title}</h2>
                </div>
                <p className="text-lg text-us-text leading-relaxed text-justify">
                    {t.mission_txt}
                </p>
            </div>

            {/* VISIÓN */}
            <div className="bg-us-mint/20 border border-us-mint/50 p-10 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-green-100 rounded-full text-green-700"><FaEye className="text-2xl" /></div>
                    <h2 className="text-3xl font-bold text-us-dark">{t.vision_title}</h2>
                </div>
                <p className="text-lg text-us-text leading-relaxed text-justify">
                    {t.vision_txt}
                </p>
            </div>
        </div>
        {/* REDES SOCIALES (FLOTANTES) */}
        <div className="mt-16 flex justify-center">
            <SocialLinks className="text-us-gray" iconSize="text-4xl" />
        </div>
        {/* CALL TO ACTION FINAL (Texto simple) */}
        <div className="mt-20 text-center">
            <p className="text-us-black italic">
                {language === 'en' ? "Ready to work with us? Check out our contact page." : "¿Listo para trabajar con nosotros? Revisa nuestra página de contacto."}
            </p>
             <Link to="/contact" className="mt-4 inline-block text-us-accent font-bold border-b-2 border-us-accent hover:text-us-dark hover:border-us-dark transition-colors">
                {language === 'en' ? "Go to Contact →" : "Ir a Contacto →"}
            </Link>
        </div>

      </div>
    </div>
  );
}
