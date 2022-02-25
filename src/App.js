import './styles/variables.css';
import './styles/global.css';
import './styles/media.css';

import Header from './header/Header';
import Home from './home/Home';
import About from './about/About';
import Skills from './skills/Skills';
import Qualification from './qualification/Qualification';
import Services from './services/Services';
import Portfolio from './portfolio/Portfolio';
import Footer from './footer/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Services />
        <Portfolio />
        <Footer />
      </main>
    </div>
  );
}

export default App;
