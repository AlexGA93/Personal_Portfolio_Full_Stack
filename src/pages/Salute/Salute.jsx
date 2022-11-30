import React, { useEffect } from "react";

// styles
import "./Salute.scss";

// react router dom
import { Link } from "react-router-dom";

// context provider
import { useStateContext } from "../../context/ContextProvider";

// images
import Logo from "../../assets/icons/icon_Alex/icon_big_white.png";

// icons
import downArrow from "../../assets/icons/others/arrow_down.png";

// framer-motion
import { motion } from "framer-motion";


const Salute = () => {
  // import states
  const { isLoaded, setIsLoaded } = useStateContext();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoaded(true);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <motion.div
      className="skills background_image_format"
      id="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo animation and title */}
      <div className="skills_container d-flex flex-column justify-content-between align-items-center">
        {/* Logo */}
        <div
          className={`skills_container_image animate__animated animate__fadeInTopLeft ${
            isLoaded ? "animation" : ""
          } p-4`}
        >
          <img src={Logo} alt="Alex_logo" />
        </div>
        {/* title inside a banner */}
        <div className="skills_container_title banner_model">
          <h1>Hello I'm Alex!</h1>
        </div>
        {/* arrow */}
        <div
          className={`skills_container_arrow ${
            isLoaded ? "animation" : ""
          } d-flex justify-content-center mb-3`}
        >
          <Link to="/aboutMe">
            <img src={downArrow} alt="arrow_down" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Salute;
