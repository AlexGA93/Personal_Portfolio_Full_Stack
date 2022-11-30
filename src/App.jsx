import React, { useEffect } from 'react';

// context provider
import { useStateContext } from "./context/ContextProvider";

// components
import { Navbar, AnimatedRoutes } from './components/index';

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