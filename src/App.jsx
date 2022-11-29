// components
import { Navbar } from './components/index';
//pages
import { Salute, About, Projects } from './pages/index';
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
      {/* Projects */}
      <Projects />
      {/* Technologies */}
      {/* Contact */}

    </div>
  )
}

export default App
