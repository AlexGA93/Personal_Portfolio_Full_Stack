import React, { useEffect } from "react";

// styles
import "./ContactMe.scss";

// react router dom
import { Link } from "react-router-dom";

// components
import { Card } from "../../components/index";

// icons
import upArrow from "../../assets/icons/others/arrow_up.png";

// context provider
import { useStateContext } from "../../context/ContextProvider";

// framer-motion
import { motion } from "framer-motion";

const ContactMe = () => {
  const { isLoaded, setIsLoaded, contact } = useStateContext();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <motion.div
      className="contact background_image_format d-flex flex-column justify-content-evenly"
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* arrow */}
      <div
        className={`contact_arrow ${
          isLoaded ? "animation" : ""
        } animate__animated animate__fadeInUp d-flex justify-content-center`}
      >
        <Link to="/projects">
          <img src={upArrow} alt="arrow_up" />
        </Link>
      </div>
      {/* container */}
      <div className="contact_container d-flex flex-column justify-content-center align-items-center">
        {/* title inside a banner */}
        <div className="contact_container_box banner_model animate__animated animate__fadeInUpBig">
          {/* title */}
          <div className="contact_container_box_title text-center">
            <h1>Contact Me!</h1>
          </div>
          {/* content */}
          <div className="contact_container_box_content d-flex flex-row flex-wrap justify-content-center">
            {/* bootstrap cards */}
            {contact.map((element, index, array) => (
              <Card key={index} element={element} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactMe;
