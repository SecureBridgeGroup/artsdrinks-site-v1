import { Routes, Route } from 'react-router-dom';

// IMPORTANTE: Buscando tudo da pasta components
import Header from './components/Header';
import Carousel from './components/Carousel';
import About from './components/About';
import Products from './components/Products';
import CasesPage from './components/CasesPage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Conteúdo da Home
const HomeContent = () => (
  <>
    <Header />
    <div id="home"><Carousel /></div>
    <About />
    <Products />
    <Contact />
    <Footer />
    <WhatsAppButton />
  </>
);

// Conteúdo da Página de Cases
const CasesContent = () => (
  <>
    <Header />
    <div className="pt-24 min-h-screen bg-black">
      <CasesPage />
    </div>
    <Footer />
    <WhatsAppButton />
  </>
);

export default function App() {
  return (
    // Note que NÃO tem mais BrowserRouter aqui, pois já está no main.tsx
    <Routes>
      <Route path="/" element={<HomeContent />} />
      <Route path="/cases" element={<CasesContent />} />
    </Routes>
  );
}