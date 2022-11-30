import React, { useEffect } from 'react';

// context provider
import { useStateContext } from "./context/ContextProvider";

// components
import { Navbar } from './components/index';

// components
import { AnimatedRoutes } from './components/index';

// routes
import { BrowserRouter } from 'react-router-dom';

// framer-motion
import { AnimatePresence } from 'framer-motion';

// styles
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  const { makeRequest } = useStateContext();

  useEffect(()=>{
    makeRequest();
  }, []);

  return (
    <AnimatePresence>
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
      </BrowserRouter>
    </AnimatePresence>
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
 *  7- Loading page
 */
