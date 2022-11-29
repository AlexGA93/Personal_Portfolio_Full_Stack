import React, {useEffect} from "react";
// context provider
import { useStateContext } from '../../context/ContextProvider';
// images
import Logo from '../../assets/icons/icon_Alex/icon_big_white.png';
import backgroundImage from '../../assets/imgs/backgrounds/hello.jpg';
// icons
import downArrow from '../../assets/icons/others/arrow_down.png';
// framer-motion
import { motion } from 'framer-motion';
// styles
import "./Salute.scss";
import "animate.css";

const Salute = () => {
    // import states
    const { 
        isLoaded, 
        setIsLoaded
     } = useStateContext();

    useEffect(() => {
      setIsLoaded(true);
    });

  return (
    <motion.div 
      className="skills background_image_format" id="skills"

      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      {/* Logo animation and title */}
      <div className="skills_container d-flex flex-column justify-content-between align-items-center">
        {/* Logo animacion */}
        <div className={`skills_container_image ${isLoaded ? "animation" : ""} animate__animated animate__animate__animated animate__fadeInTopLeft p-4`}>
            <img src={Logo} alt="Alex_logo" />
        </div>
        {/* title inside a banner */}
        <div className="skills_container_title banner_model">
          <h1>Hello I'm Alex!</h1>
        </div>
        {/* arrow */}
        <div className={`skills_container_arrow ${isLoaded ? "animation" : ""} animate__animated animate__fadeInUp d-flex justify-content-center`}>
          <a href="aboutMe">
              <img src={downArrow} alt="arrow_down" />
          </a>
        </div>
      </div>      
    </motion.div>
  );
};

export default Salute;
