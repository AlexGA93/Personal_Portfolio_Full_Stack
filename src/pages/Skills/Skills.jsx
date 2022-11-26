import React, {useEffect} from "react";
// context provider
import { useStateContext } from '../../context/ContextProvider';
// images
import Logo from '../../assets/icons/icon_Alex/icon_big_white.png';
// icons
import downArrow from '../../assets/icons/others/arrow_down.png';
// styles
import "./Skills.scss";
import "animate.css";

const Skills = () => {
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

    useEffect(()=>{
        const interval = setInterval(() => {
            // component is mounted
            setIsLoaded(true);
        }, 1000);
        return () => clearInterval(interval);
    },[isLoaded])

    // apply effects when some data are modified
    useEffect(() => {
        // set time interval between function and delta value
        let ticker = setInterval(()=>{tick();}, delta);

        // return the interval clearing process
        return ()=>{clearInterval(ticker)};
    }, [text])
    
  return (
    <section className="skills" id="skills">
      {/* Logo animation and title */}
      <div className="skills_container d-flex flex-column justify-content-between align-items-center">
        {/* Logo animacion */}
        <div className={`skills_container_image ${isLoaded ? "animation" : ""} animate__animated animate__animate__animated animate__fadeInTopLeft p-4`}>
            <img src={Logo} alt="Alex_logo" />
        </div>
        {/* title inside a banner */}
        <div className="skills_container_title">
          <h1>Hello There!</h1>
        </div>
        {/* arrow */}
        <div className={`skills_container_arrow ${isLoaded ? "animation" : ""} animate__animated animate__fadeInUp d-flex justify-content-center`}>
          <a href="projects">
              <img src={downArrow} alt="arrow_down" />
          </a>
        </div>
      </div>





      {/* <div className="skills_container d-flex flex-row justify-content-evenly align-items-center">
        
        <div className="skills_container_presentation animate__animated animate__animate__animated animate__backInLeft d-flex align-self-center d-flex m-3">
          
          <div className="skills_container_presentation_content d-flex align-self-center flex-column m-2 p-5">
            <h1>Hi I'm Alex!</h1>
            <h3 className="py-2 my-3">{text}</h3>
            <p>
              Electronic Engineering of Telecomunication’s student at Valencia’s 
              University and passionate for software and web Developing after discovering 
              the great reach that they can grant both solo and as a team.
            </p>
            <p>
              Starting from the knowledge acquired in my degree, I chose to focus 
              myself to continue to develop my skills in programming in general and 
              on the web in particular.
            </p>
          </div>
        </div>
        <div className={`skills_container_image ${isLoaded ? "animation" : ""} animate__animated animate__animate__animated animate__backInRight`}>
            
            <img src={Logo} alt="Alex_logo" />
        </div>
      </div> */}



      
    </section>
  );
};

export default Skills;

/**
 * TODO:
 * 1- banner opacity
 * 2- spaceman and arrow img animation
 */