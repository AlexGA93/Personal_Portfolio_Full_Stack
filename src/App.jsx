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
 *  2- Arrows - done
 *  3- Animations - done
 *  4- Navbar - done
 *  5- responsive - done
 *  6- Change presentation effect to carousel/transition
 */
