import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Swal from 'sweetalert2'; 
import emailjs from '@emailjs/browser'; // Asegúrate de instalar: npm install @emailjs/browser
import { FaImages, FaPaperPlane, FaExclamationCircle } from 'react-icons/fa';

export const ContactSection = () => {
  const { language, t } = useLanguage();
  
  // ---------------------------------------------------------------------------
  // CONFIGURACIÓN DE SERVICIOS (Reemplaza con tus datos reales)
  // ---------------------------------------------------------------------------
  
  const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const CLOUDINARY_PRESET = import.meta.env.VITE_CLOUDINARY_PRESET;
  
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  // ---------------------------------------------------------------------------

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    images: []
  });
  
  const [uploading, setUploading] = useState(false);

  // Validación de formulario
  const isFormValid = 
    formData.name.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.message.trim() !== '' &&
    formData.images.length >= 3 && 
    formData.images.length <= 5;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const total = formData.images.length + files.length;

    if (total > 5) {
      Swal.fire({ 
        icon: 'warning', 
        title: language === 'en' ? 'Limit Exceeded' : 'Límite Excedido',
        text: language === 'en' ? 'Maximum 5 images allowed.' : 'Máximo 5 imágenes permitidas.',
        confirmButtonColor: '#f0940b' 
      });
      return;
    }
    setFormData({ ...formData, images: [...formData.images, ...files] });
  };

  const removeImage = (index) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    setFormData({ ...formData, images: newImages });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Verificar spam local (1 hora de espera entre envíos)
    const lastSub = localStorage.getItem(`last_sub_${formData.email}`);
    if (lastSub && (Date.now() - lastSub) < 3600000) {
      Swal.fire({ 
        icon: 'info', 
        title: language === 'en' ? 'Please Wait' : 'Por favor espera',
        text: language === 'en' ? 'You already sent a request recently.' : 'Ya enviaste una solicitud recientemente.',
        confirmButtonColor: '#676b69' 
      });
      return;
    }

    setUploading(true);

    try {
      // PASO 1: SUBIR FOTOS A CLOUDINARY
      const imageUrls = await Promise.all(
        formData.images.map(async (file) => {
          const data = new FormData();
          data.append('file', file);
          data.append('upload_preset', CLOUDINARY_PRESET);
          data.append('cloud_name', CLOUDINARY_CLOUD_NAME);
          
          const res = await fetch(
            `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
            { method: 'POST', body: data }
          );
          const fileData = await res.json();
          return fileData.secure_url;
        })
      );

      // PASO 2: ENVIAR CORREO CON EMAILJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        photos: imageUrls.join('\n'), // Convierte el array de links en texto plano
        date: new Date().toLocaleString()
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // PASO 3: ÉXITO
      Swal.fire({
        icon: 'success',
        title: language === 'en' ? 'Sent Successfully!' : '¡Enviado con Éxito!',
        text: language === 'en' 
          ? 'We have received your project details. We will contact you shortly.' 
          : 'Hemos recibido los detalles de tu proyecto. Te contactaremos pronto.',
        confirmButtonColor: '#f0940b'
      });

      // Guardar registro y limpiar
      localStorage.setItem(`last_sub_${formData.email}`, Date.now());
      setFormData({ name: '', email: '', message: '', images: [] });

    } catch (error) {
      console.error(error);
      Swal.fire({ 
        icon: 'error', 
        title: 'Error', 
        text: language === 'en' ? 'Could not send message. Please try again.' : 'No se pudo enviar el mensaje. Intenta de nuevo.',
        confirmButtonColor: '#d33' 
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-us-light relative">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* TÍTULO CENTRALIZADO */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-us-dark mb-4">
            {t.contact_title || (language === 'en' ? 'Start Your Project' : 'Inicia tu Proyecto')}
          </h2>
          <p className="text-us-text text-lg">
            {language === 'en' 
              ? "Send us your details to get started." 
              : "Envíanos tus detalles para comenzar."}
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            
            {/* NOTA DE VISITA (INTEGRADA Y ELEGANTE) */}
            <div className="bg-us-accent/5 border-l-4 border-us-accent p-4 mb-10 rounded-r-lg flex gap-3 items-start">
                <FaExclamationCircle className="text-us-accent text-xl mt-1 shrink-0" />
                <div>
                    <h4 className="text-sm font-bold text-us-dark uppercase tracking-wide mb-1">
                        {language === 'en' ? "Important Requirement" : "Requisito Importante"}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        {language === 'en' 
                        ? "A technical visit is mandatory for all projects before a final quote can be provided to ensure accuracy." 
                        : "Una visita técnica es obligatoria para todos los proyectos antes de entregar una cotización final para asegurar precisión."}
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* NOMBRE Y EMAIL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group relative">
                  <input 
                    type="text" name="name" value={formData.name} onChange={handleChange} 
                    className="peer w-full border-b-2 border-gray-200 py-2 placeholder-transparent focus:border-us-accent outline-none transition-colors text-us-dark font-medium bg-transparent" 
                    placeholder="Name" 
                  />
                  <label className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-us-accent font-bold uppercase tracking-wider">
                    {language === 'en' ? 'Name' : 'Nombre'}
                  </label>
                </div>
                <div className="group relative">
                  <input 
                    type="email" name="email" value={formData.email} onChange={handleChange} 
                    className="peer w-full border-b-2 border-gray-200 py-2 placeholder-transparent focus:border-us-accent outline-none transition-colors text-us-dark font-medium bg-transparent" 
                    placeholder="Email" 
                  />
                  <label className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-us-accent font-bold uppercase tracking-wider">
                    {language === 'en' ? 'Email' : 'Correo'}
                  </label>
                </div>
              </div>

              {/* MENSAJE */}
              <div className="group relative">
                <textarea 
                    name="message" rows="4" value={formData.message} onChange={handleChange} 
                    className="peer w-full border-b-2 border-gray-200 py-2 placeholder-transparent focus:border-us-accent outline-none transition-colors text-us-dark font-medium bg-transparent resize-none" 
                    placeholder="Message">
                </textarea>
                <label className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-us-accent font-bold uppercase tracking-wider">
                    {language === 'en' ? 'Description' : 'Descripción'}
                </label>
              </div>

              {/* ZONA DE FOTOS */}
              <div>
                <div className="flex justify-between items-end mb-3">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                        {language === 'en' ? 'Project Photos' : 'Fotos del Proyecto'}
                    </label>
                    <div className="text-right">
                        <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${formData.images.length >= 3 && formData.images.length <= 5 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                            {formData.images.length} / 5
                        </span>
                    </div>
                </div>
                
                <div className="relative group cursor-pointer">
                    <input type="file" multiple accept="image/*" onChange={handleImageChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" disabled={formData.images.length >= 5} />
                    
                    <div className="border-2 border-dashed border-gray-200 bg-gray-50 rounded-xl p-8 text-center group-hover:border-us-accent group-hover:bg-us-accent/5 transition-all">
                        <FaImages className="mx-auto text-3xl text-gray-400 mb-2 group-hover:text-us-accent transition-colors" />
                        <p className="text-sm font-medium text-us-dark group-hover:text-us-accent transition-colors">
                            {language === 'en' ? "Click to upload images" : "Clic para subir imágenes"}
                        </p>
                        <p className="text-xs text-gray-400 mt-2 font-medium">
                            {language === 'en' ? "Minimum: 3 - Maximum: 5 images" : "Mínimo: 3 - Máximo: 5 imágenes"}
                        </p>
                    </div>
                </div>

                {/* PREVIEWS DE FOTOS */}
                {formData.images.length > 0 && (
                    <div className="flex gap-3 mt-4 overflow-x-auto pb-2 px-1 scrollbar-hide">
                        {formData.images.map((file, index) => (
                            <div key={index} className="relative min-w-[70px] w-20 h-20 rounded-lg overflow-hidden shadow-sm border border-gray-100 group/img shrink-0">
                                <img src={URL.createObjectURL(file)} alt="preview" className="w-full h-full object-cover" />
                                <button type="button" onClick={() => removeImage(index)} className="absolute inset-0 bg-black/50 text-white flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity z-30">×</button>
                            </div>
                        ))}
                    </div>
                )}
              </div>

              {/* BOTÓN DE ENVÍO */}
              <button 
                type="submit"
                disabled={!isFormValid || uploading}
                className={`w-full py-4 rounded-xl font-bold text-white uppercase tracking-widest shadow-lg flex items-center justify-center gap-3 transition-all
                    ${!isFormValid || uploading 
                        ? 'bg-gray-300 cursor-not-allowed text-gray-500 shadow-none' 
                        : 'bg-us-accent hover:bg-orange-600 hover:shadow-orange-500/30 transform hover:-translate-y-1'
                    }`}
              >
                {uploading ? (
                    <span>{language === 'en' ? "Sending..." : "Enviando..."}</span>
                ) : (
                    <>
                        <span>{language === 'en' ? "Send Request" : "Enviar Solicitud"}</span>
                        <FaPaperPlane className="text-sm" />
                    </>
                )}
              </button>
            </form>
        </div>
      </div>
    </section>
  );
};
