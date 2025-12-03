import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import NewConstructionPage from './pages/NewConstructionPage';

// Importa las páginas
import Home from './pages/Home';
import Construction from './pages/Construction';
import Electrical from './pages/Electrical';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound'; 

function App() {
  return (
    <LanguageProvider>
      <ScrollToTop />
      
      {/* NAVBAR GLOBAL (Ahora sí tendrá menú móvil) */}
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/electrical" element={<Electrical />} />
        <Route path="/new-constructions" element={<NewConstructionPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="*" element={<NotFound />} />

      </Routes>
      
    </LanguageProvider>
  );
}

export default App;
