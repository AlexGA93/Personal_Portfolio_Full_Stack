import React from 'react';

// components
import { TechText, TechGrid } from '../../components/index';

// context provider
import { useStateContext } from '../../context/ContextProvider';

// img and icons
import downArrow from '../../assets/icons/others/arrow_down.png';

// styles
import './Technologies.scss';

const Technologies = () => {

    // import states
    const { 
        isLoaded, 
        setIsLoaded,

        githubRepos, 
        setGithubRepos
    } = useStateContext();

  return (
    <section className='techs background_image_format d-flex flex-column justify-content-between align-items-center' id='techs'>
        {/* title */}
        <div className="techs_title banner_model d-flex flex-column justify-content-between align-items-center m-5">
            <h1>Technologies</h1>
        </div>
        {/* tech container */}
        <div className="techs_techs banner_model d-flex flex-row flex-wrap m-3 align-self-center">
            {/* text */}
            <div className='techs_techs_text m-2'>
                <TechText />
            </div>
            
            {/* icons grid */}
            <div className="techs_techs_grid m-2 d-flex align-self-center">
                {/* grid 2x7 */}
                <TechGrid />
            </div>
        </div>
        {/* arrow */}
        <div className={`techs_arrow ${isLoaded ? "animation" : ""} animate__animated animate__fadeInUp d-flex justify-content-center`}>
            <a href="#">
                <img src={downArrow} alt="arrow_down" />
            </a>
        </div>
    </section>
  )
}

export default Technologies