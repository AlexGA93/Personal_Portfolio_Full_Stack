// components
import { Navbar } from './components/index';

// components
import { AnimatedRoutes } from './components/index';

// routes
import { BrowserRouter } from 'react-router-dom';

// styles
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
    
    
  )
}

export default App;

/**
 * TODO: 
 *  1- Presentation effect - done
 *  2- Arrows
 *  3- Animations
 *  4- Navbar
 *  5- responsive
 */
