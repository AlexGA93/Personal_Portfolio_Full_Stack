// components
import { Navbar } from './components/index';
//pages
import { Salute, About, Techs, Projects, ContactMe } from './pages/index';
// styles
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      {/* Skills */}
      <Salute />
      {/* About me */}
      <About />
      {/* Technologies */}
      <Techs />
      {/* Projects */}
      <Projects />
      {/* Contact */}
      <ContactMe />
    </div>
  )
}

export default App;

/**
 * TODO: 
 *  1- Carousel effect
 *  2- Animations
 *  3- Navbar
 *  4- responsive
 */
