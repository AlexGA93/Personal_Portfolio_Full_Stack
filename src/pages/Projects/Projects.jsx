import React, { useEffect } from "react";

// styles
import "./Projects.scss";

// react router dom
import { Link } from "react-router-dom";

// components
import { BannerCarousel } from "../../components/index";

// context provider
import { useStateContext } from "../../context/ContextProvider";

// img and icons
import downArrow from "../../assets/icons/others/arrow_down.png";
import upArrow from "../../assets/icons/others/arrow_up.png";

// framer-motion
import { motion } from "framer-motion";

const Projects = () => {
  // import states
  const { isLoaded, setIsLoaded, githubRepos } = useStateContext();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="projects background_image_format d-flex flex-column justify-content-between align-items-center"
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* arrow */}
      <div
        className={`projects_arrow ${
          isLoaded ? "animation" : ""
        } animate__animated animate__fadeInUp d-flex justify-content-center`}
      >
        <Link to="/techs">
          <img src={upArrow} alt="arrow_up" />
        </Link>
      </div>
      {/* title */}
      <div className="projects_title banner_model animate__animated animate__fadeInLeftBig d-flex flex-column justify-content-between align-items-center">
        <h1>Projects</h1>
      </div>

      <div className="projects_repos banner_model animate__animated animate__fadeInRightBig">
        <BannerCarousel githubRepos={githubRepos} />
      </div>

      {/* arrow */}
      <div
        className={`projects_arrow ${
          isLoaded ? "animation" : ""
        } animate__animated animate__fadeInUp d-flex justify-content-center mb-5`}
      >
        <Link to="/contact">
          <img src={downArrow} alt="arrow_down" />
        </Link>
      </div>
    </motion.div>
  );
};

export default Projects;
