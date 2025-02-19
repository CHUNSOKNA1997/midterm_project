import Sidebar from './components/Sidebar';
import About from './components/About';
import Home from './components/Home';
function App() {
  return (
    <div>
      <Sidebar />
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>
    </div>
  );
}

export default App;
