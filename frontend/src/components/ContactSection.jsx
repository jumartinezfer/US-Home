import { useState } from 'react';
import { FaFacebook, FaInstagram, FaEnvelope, FaHammer } from 'react-icons/fa'; // Asegúrate de tener react-icons
import { useLanguage } from '../context/LanguageContext';

export const ContactSection = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success

  // Textos específicos de esta sección
  const texts = {
    en: {
      title: "Start Your Project",
      warning_title: "Important Note:",
      warning_text: "For accurate estimates on materials and costs, an on-site technical visit is required for all projects.",
      btn_send: "Send Message",
      btn_sending: "Sending...",
      success_msg: "Message sent! We will contact you shortly.",
      social_title: "Follow us"
    },
    es: {
      title: "Inicia tu Proyecto",
      warning_title: "Nota Importante:",
      warning_text: "Para cotizar materiales y costos con precisión, es necesaria una visita técnica presencial en todos los proyectos.",
      btn_send: "Enviar Mensaje",
      btn_sending: "Enviando...",
      success_msg: "¡Mensaje enviado! Te contactaremos pronto.",
      social_title: "Síguenos en nuestras redes sociales"
    }
  };

  const localT = texts[language];

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // AQUÍ CONECTAREMOS CON TU N8N MÁS ADELANTE
    console.log("Enviando datos:", formData);
    
    // Simulación de envío
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  return (
    <section id="contact" className="py-16 bg-white relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-us-mint rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-us-dark text-center mb-10">{localT.title}</h2>

        <div className="bg-us-light rounded-2xl shadow-xl p-8 border-t-4 border-us-accent">
          
          {/* AVISO DE VISITA TÉCNICA */}
          <div className="bg-yellow-50 border-l-4 border-us-accent p-4 mb-8 rounded-r flex items-start gap-3">
            <div className="text-us-accent text-xl mt-1"><FaHammer /></div>
            <div>
              <h4 className="font-bold text-us-dark text-sm uppercase tracking-wide">{localT.warning_title}</h4>
              <p className="text-us-text text-sm">{localT.warning_text}</p>
            </div>
          </div>

          {status === 'success' ? (
            <div className="text-center py-12 animate-fade-in">
              <div className="text-green-500 text-5xl mb-4">✓</div>
              <p className="text-xl font-bold text-us-dark">{localT.success_msg}</p>
              <button onClick={() => setStatus('idle')} className="mt-4 text-us-accent underline">Send another / Enviar otro</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  required 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  type="text" 
                  placeholder={language === 'en' ? "Your Name" : "Tu Nombre"}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-us-gray focus:border-us-accent focus:ring-2 focus:ring-us-accent/20 outline-none transition-all"
                />
                <input 
                  required 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-3 rounded-lg bg-white border border-us-gray focus:border-us-accent focus:ring-2 focus:ring-us-accent/20 outline-none transition-all"
                />
              </div>
              <textarea 
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4" 
                placeholder={language === 'en' ? "Describe your project..." : "Cuéntanos sobre tu proyecto..."}
                className="w-full px-4 py-3 rounded-lg bg-white border border-us-gray focus:border-us-accent focus:ring-2 focus:ring-us-accent/20 outline-none transition-all"
              ></textarea>
              
              <button 
                disabled={status === 'sending'}
                type="submit" 
                className="w-full bg-us-accent hover:bg-orange-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? localT.btn_sending : localT.btn_send}
              </button>
            </form>
          )}
        </div>

        {/* REDES SOCIALES */}
        <div className="mt-12 text-center">
          <p className="text-us-silver text-sm uppercase tracking-widest mb-4">{localT.social_title}</p>
          <div className="flex justify-center gap-8">
            {/* Reemplaza los href con los links reales de tu cliente */}
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-us-dark hover:text-[#1877F2] text-3xl transition-colors transform hover:scale-110">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-us-dark hover:text-[#E4405F] text-3xl transition-colors transform hover:scale-110">
              <FaInstagram />
            </a>
            <a href="mailto:ushomeimprovement01@gmail.com" className="text-us-dark hover:text-red-600 text-3xl transition-colors transform hover:scale-110">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
