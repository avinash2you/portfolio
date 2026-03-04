import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Header from "./sections/Header/Header";
import Work from "./sections/Work/Work";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        {/* Dot-grid background */}
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(124, 58, 237, 0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <Header />
        <main className="main" style={{ paddingTop: '64px' }}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/work" element={<Work />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
