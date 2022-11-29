import React from 'react';

import { Link } from 'react-router-dom';

// logo
import Logo  from '../../assets/icons/icon_Alex/icon_small.png';
// social_logo
import Linkedin from '../../assets/icons/social/linkedin.png';
import Mail from '../../assets/icons/social/email.png';
import Github from '../../assets/icons/social/github.png';

//styles
import './NavBar.scss';
import 'animate.css';

const NavBar = () => {
  return (
    <nav  className="navbar animate__animated animate__backInDown d-flex flex-row flex-wrap justify-content-between">
        <div className="navbar_sections d-flex flex-wrap ms-3">
            <div className="navbar_sections_logo">
                <Link to='/'>
                    <img src={Logo} alt="Logo" />
                </Link>
            </div>
            <ul className='navbar_sections_list d-flex flex-wrap p-0'>
                <Link to="/aboutMe">
                    <li className='mx-3'>About Me</li>
                </Link>
                <Link to="/techs">
                    <li className='mx-3'>Technologies</li>
                </Link>
                <Link to="/projects">
                    <li className='mx-3'>Projects</li>
                </Link>
                <Link to="/contact">
                    <li className='mx-3'>Contact</li>
                </Link>
            </ul>
        </div>
        {/* social */}
        <div className="navbar_social">
            <ul className='navbar_social_list d-flex flex-wrap me-3'>
                    <li className='mx-2 my-2'>
                        <a href="https://www.linkedin.com/in/alejandro-gimeno-ataz-3741a013b/">
                            <img src={Linkedin} alt="logo_linkedin" />
                        </a>
                    </li>
                    <li className='mx-2 my-2'>
                        <a href="https://outlook.live.com/owa/">
                            <img src={Mail} alt="logo_twitter" />
                        </a>
                    </li>
                    <li className='mx-2 my-2'>
                        <a href="https://github.com/AlexGA93">
                            <img src={Github} alt="logo_github" />
                        </a>
                    </li>
                </ul>
            </div>
    </nav>
  )
}

export default NavBar;