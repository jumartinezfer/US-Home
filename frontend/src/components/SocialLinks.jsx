import { FaFacebook, FaInstagram, FaTiktok, FaEnvelope, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const SocialLinks = ({ className = "", iconSize = "text-3xl", hoverColor = "hover:text-us-accent" }) => {
  
  // LISTA MAESTRA DE REDES

  const networks = [
    { 
      name: 'Facebook',
      icon: <FaFacebook />, 
      url: 'https://www.facebook.com/profile.php?id=61584122746493'
    },
    { 
      name: 'Instagram',
      icon: <FaInstagram />, 
      url: 'https://www.instagram.com/ushomeimprovement?igsh=MW5pd3Vnb25peTg3NA== ' 
    },
    { 
      name: 'TikTok',
      icon: <FaTiktok />, 
      url: 'https://www.tiktok.com/@ushomeimprovement5' 
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
