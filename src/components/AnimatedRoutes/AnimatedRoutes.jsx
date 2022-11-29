import React, { useEffect } from 'react';

// react router dom
import { Routes, Route, useLocation } from 'react-router-dom';

// pages
import { Salute, About, Techs, Projects, ContactMe } from '../../pages/index';

// framer-motion
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {

    const location = useLocation();

    // useEffect(()=>{
    //     console.log(location);
    // }, [])

    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Salute />} />
                <Route path='/aboutMe' element={<About />} />
                <Route path='/techs' element={<Techs />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<ContactMe />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;