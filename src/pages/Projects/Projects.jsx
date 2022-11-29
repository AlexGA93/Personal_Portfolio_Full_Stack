import React, { useEffect } from 'react';

// components
import { BannerCarousel } from '../../components/index';

// context provider
import { useStateContext } from '../../context/ContextProvider';

// img and icons
import downArrow from '../../assets/icons/others/arrow_down.png';

// react bootstrap
import Carousel from 'react-bootstrap/Carousel';

// styles
import './Projects.scss';

const Projects = () => {

    // import states
    const { 
        isLoaded, 
        setIsLoaded,

        githubRepos, 
        setGithubRepos
    } = useStateContext();

    
    const makeRequest = () => {
        fetch("https://api.github.com/users/AlexGA93/repos")
        .then( res => res.json() )
        .then( res => res.map((element)=>{
            githubRepos.push({
                id: element.id,
                name: element.name,
                description: element.description,
                avatar: element.owner["avatar_url"],
                login: element.owner["login"]
            });
        }))
        .catch( err => console.error(err) )
    };

    useEffect(() => {
        // load http request data once!
        makeRequest();
        console.log(githubRepos);
    }, [])

    return (
        <section id='projects' className='projects background_image_format d-flex flex-column justify-content-between align-items-center'>
            {/* title */}
            <div className='projects_title banner_model d-flex flex-column justify-content-between align-items-center'>
                <h1>Projects</h1>
            </div>

            <div className='projects_repos banner_model'>
                <BannerCarousel />
            </div>

            {/* arrow */}
            <div className={`projects_arrow ${isLoaded ? "animation" : ""} animate__animated animate__fadeInUp d-flex justify-content-center`}>
                <a href="#">
                    <img src={downArrow} alt="arrow_down" />
                </a>
        </div>
        </section >
    )
}

export default Projects;