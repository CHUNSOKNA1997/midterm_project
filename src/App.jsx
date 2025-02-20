import Sidebar from './components/Sidebar';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Sidebar />

      <section id="home" className="scroll-mt-0">
        <Home />
      </section>

      <section id="about" className="scroll-mt-5">
        <About />
      </section>

      <section id="projects" className="scroll-mt-5">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
