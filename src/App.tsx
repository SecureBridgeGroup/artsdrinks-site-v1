import Header from './components/Header';
import Carousel from './components/Carousel';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Carousel />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
