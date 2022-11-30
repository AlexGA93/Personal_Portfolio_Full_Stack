import React, { useEffect } from "react";
// styles
import "./Technologies.scss";

// react router dom
import { Link } from "react-router-dom";

// components
import { TechText, TechGrid } from "../../components/index";

// context provider
import { useStateContext } from "../../context/ContextProvider";

// img and icons
import downArrow from "../../assets/icons/others/arrow_down.png";
import upArrow from "../../assets/icons/others/arrow_up.png";

// framer-motion
import { motion } from "framer-motion";

const Technologies = () => {
  // import states
  const {
    isLoaded,
    setIsLoaded,

    githubRepos,
    setGithubRepos,
  } = useStateContext();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoaded(true);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="techs background_image_format d-flex flex-column justify-content-around align-items-center"
      id="techs"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* arrow */}
      <div
        className={`techs_arrow ${
          isLoaded ? "animation" : ""
        } animate__animated animate__fadeInUp d-flex justify-content-center`}
      >
        <Link to="/aboutMe">
          <img src={upArrow} alt="arrow_up" />
        </Link>
      </div>
      {/* title */}
      <div className="techs_title banner_model animate__animated animate__fadeInRightBig d-flex flex-column justify-content-between align-items-center">
        <h1>Technologies</h1>
      </div>
      {/* tech container */}
      <div className="techs_techs banner_model animate__animated animate__fadeInLeftBig d-flex flex-row flex-wrap justify-content-around align-self-center">
        {/* text */}
        <div className="techs_techs_text m-2 d-flex align-self-center">
          <TechText />
        </div>

        {/* icons grid */}
        <div className="techs_techs_grid m-2 d-flex align-self-center">
          <TechGrid />
        </div>
      </div>
      {/* arrow */}
      <div
        className={`techs_arrow ${
          isLoaded ? "animation" : ""
        } animate__animated animate__fadeInUp d-flex justify-content-center`}
      >
        <Link to="/projects">
          <img src={downArrow} alt="arrow_down" />
        </Link>
      </div>
    </motion.div>
  );
};

export default Technologies;
