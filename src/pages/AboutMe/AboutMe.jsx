import React, { useEffect } from 'react';

// styles
import './AboutMe.scss';

// react router dom
import { Link } from 'react-router-dom';

// context provider
import { useStateContext } from '../../context/ContextProvider';

// icons
import downArrow from '../../assets/icons/others/arrow_down.png';
import upArrow from '../../assets/icons/others/arrow_up.png';

// framer-motion
import { motion } from 'framer-motion';



const AboutMe = () => {

  // import states
  const { 
    isLoaded, 
    setIsLoaded,

    loopNum, 
    setLoopNum,

    isDeleting, 
    setIsDeleting,

    text, 
    setText,

    delta, 
    setDelta,

    index, 
    setIndex
  } = useStateContext();

  // options
  const rotateSkills = ['Full Stack Developer', 'Web Designer', 'Tel. Electronic Engineer'];

  const period = 2000;

  const tick = () => {
      // extract skills arrai indexes
      let i = loopNum % rotateSkills.length;
      // isolate array lement
      let skill = rotateSkills[i];
      // update text
      let updatedText = isDeleting ? skill.substring(0, text.length - 1) : skill.substring(0, text.length + 1)
      // setting new text to the state
      setText(updatedText);

      if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === skill) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
      } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
      } else {
          setIndex(prevIndex => prevIndex + 1);
      }
  };

  // apply effects when some data are modified
  useEffect(() => {
      setIsLoaded(true);
      // set time interval between function and delta value
      let ticker = setInterval(()=>{tick();}, delta);

      // return the interval clearing process
      return ()=>{clearInterval(ticker)};
  }, [text])

  return (
    <motion.div 
      className='aboutMe background_image_format d-flex flex-column justify-content-around align-self-center' 
      id='aboutMe'

      
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <div className={`about_container_arrow ${isLoaded ? "animation" : ""} animate__animated animate__fadeInUp d-flex justify-content-center`}>
        <Link to="/">
            <img src={upArrow} alt="arrow_up" />
        </Link>
      </div>
      <div className='aboutMe_container d-flex flex-column justify-content-center align-self-center'>
        {/* container */}
        <div className="aboutMe_container_box banner_model d-flex flex-column text-center justify-content-center animate__animated animate__fadeInTopLeft">
          {/* title */}
          <div className="aboutMe_container_box_title">
            <h1>About Me!</h1>
          </div>
          {/* skills */}
          <div className="aboutMe_container_box_skills">
            <h3 className="py-2 my-3">{text}|</h3>
          </div>
          {/* text */}
          <div className="aboutMe_container_box_text">
            <p>
              I personally consider myself a sincere and hardworking person. I try to do 100% of my work in all my tasks 
              no matter what the work environment is or need help to anyone. In the opposite case I have no problem asking.
            </p>
            <p>
              I discovered my passion for programming throughout my degree studies and completed my projects. With all of 
              this I decided to dedicate myself to this profession and make my living. Due to this, I find myself 
              training in a self-taught way in all the technologies that I consider necessary.
            </p>
          </div>
        </div>
      </div>
      {/* arrow */}
      <div className={`about_container_arrow ${isLoaded ? "animation" : ""} animate__animated animate__fadeInUp d-flex justify-content-center`}>
        <Link to="/techs">
            <img src={downArrow} alt="arrow_down" />
        </Link>
      </div>
      
    </motion.div>

  )
}

export default AboutMe;