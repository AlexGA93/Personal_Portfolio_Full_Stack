import React from 'react';

// styles
import './AboutMe.scss';

const AboutMe = () => {
  return (
    <section className='aboutMe' id='aboutMe'>
      {/* provisional content */}
      <div className="skills_container d-flex flex-row justify-content-evenly align-items-center">
        {/* presentation container */}
        <div className="skills_container_presentation animate__animated animate__animate__animated animate__backInLeft d-flex align-self-center d-flex m-3">
          {/* banner content*/}
          <div className="skills_container_presentation_content d-flex align-self-center flex-column m-2 p-5">
            <h1>Hi I'm Alex!</h1>
            <h3 className="py-2 my-3">example</h3>
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
        {/* image container */}
        <div className={`skills_container_image animate__animated animate__animate__animated animate__backInRight`}>
            {/* <img src={Spaceman} alt="spaceman_image" /> */}
            {/* <img src={Logo} alt="Alex_logo" /> */}
        </div>
      </div>
      {/* arrow */}
      <div className={`skills_arrow animate__animated animate__fadeInUp d-flex justify-content-center`}>
        {/* arrow */}
        <a href="projects">
            {/* <img src={downArrow} alt="arrow_down" /> */}
        </a>
      </div>
    </section>
  )
}

export default AboutMe