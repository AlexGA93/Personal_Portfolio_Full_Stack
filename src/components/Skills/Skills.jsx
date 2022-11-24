import React, {useEffect} from "react";
// context provider
import { useStateContext } from '../../context/ContextProvider';
// images
import Spaceman from '../../assets/imgs/space_man.png';
// icons
import downArrow from '../../assets/icons/others/down_arrow.png';
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
      <div className="skills_container d-flex flex-row justify-content-evenly">
        {/* presentation container */}
        <div className="skills_container_presentation animate__animated animate__animate__animated animate__backInLeft d-flex align-self-center">
          {/* banner content*/}
          <div className="skills_container_presentation_content d-flex align-self-center flex-column m-2 p-5">
            <h1>Hi I'm Alex!</h1>
            <h3>{text}</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        {/* image container */}
        <div className={`skills_container_image ${isLoaded ? "animation" : ""} animate__animated animate__animate__animated animate__backInRight`}>
            <img src={Spaceman} alt="spaceman_image" />
        </div>
      </div>
      {/* arrow */}
      <div className={`skills_arrow ${isLoaded ? "animation" : ""} animate__animated animate__fadeInUp d-flex justify-content-center`}>
        {/* arrow */}
        <a href="projects">
            <img src={downArrow} alt="arrow_down" />
        </a>
      </div>
    </section>
  );
};

export default Skills;

/**
 * TODO:
 * 1- banner opacity
 * 2- spaceman and arrow img animation
 */