import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Career from './components/Career';
import Stack from './components/Stack';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <div className="bg-grid"></div>
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Career />
      <Stack />
      <Footer />
    </div>
  );
}

export default App;
