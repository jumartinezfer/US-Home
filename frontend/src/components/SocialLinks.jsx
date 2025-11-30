import { FaFacebook, FaInstagram, FaTiktok, FaEnvelope, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const SocialLinks = ({ className = "", iconSize = "text-3xl", hoverColor = "hover:text-us-accent" }) => {
  
  // LISTA MAESTRA DE REDES
  // Para agregar una nueva, solo añade un objeto aquí.
  const networks = [
    { 
      name: 'Facebook',
      icon: <FaFacebook />, 
      url: 'https://facebook.com/ushomeservices' // Pon tu URL real
    },
    { 
      name: 'Instagram',
      icon: <FaInstagram />, 
      url: 'https://www.instagram.com/ushomeimprovement?igsh=MW5pd3Vnb25peTg3NA== ' 
    },
    { 
      name: 'TikTok',
      icon: <FaTiktok />, 
      url: 'tiktok.com/@ushomeimprovement5' //https://www.tiktok.com/@ushomeimprovement5 REAL URL
    },
    // whatsapp para el futuro
    // { name: 'WhatsApp', icon: <FaWhatsapp />, url: 'https://wa.me/1234567890' },
  ];

  return (
    <div className={`flex gap-6 ${className}`}>
      {networks.map((net, index) => (
        <a 
          key={index}
          href={net.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={net.name}
          className={`transition-all transform hover:scale-110 drop-shadow-md ${iconSize} ${hoverColor}`}
        >
          {net.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
