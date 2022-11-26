// components
import { Navbar } from './components/index';
//pages
import { Skills, About } from './pages/index';
// styles
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      {/* Skills */}
      <Skills />
      {/* About me */}
      {/* <About /> */}
      {/* Projects */}
      {/* Contact */}
    </div>
  )
}

export default App
