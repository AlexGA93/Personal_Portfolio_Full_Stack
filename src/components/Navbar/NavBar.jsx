import React from "react";

// react router dom
import { Link } from 'react-router-dom';

// state contexts
import { useStateContext } from "../../context/ContextProvider";

// logo
import Logo from "../../assets/icons/icon_Alex/icon_small.png";
import Logo_dark from "../../assets/icons/icon_Alex/icon_small_dark.png";

// social_logo
import Linkedin from "../../assets/icons/social/linkedin.png";
import Mail from "../../assets/icons/social/email.png";
import Github from "../../assets/icons/social/github.png";

// react bootstrap
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

//styles
import "./NavBar.scss";
import "animate.css";

const NavBar = () => {
  const { colorMode, setColorMode } = useStateContext();

  const toggleMode = () => {
    setColorMode(!colorMode);
  };

  return (
    <Navbar
      bg={colorMode ? "light" : "dark"}
      variant={colorMode ? "light" : "dark"}
      expand="lg"
      className="navbar"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={colorMode ? Logo_dark : Logo} alt="Logo" />
          Web Dev Portfolio!
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
          <Nav className="navbar-collapse-nav me-auto">
            <Nav.Link className="link" href="/Personal_Portfolio_Full_Stack/#/aboutMe">
              About Me
            </Nav.Link>
            <Nav.Link className="link" href="/Personal_Portfolio_Full_Stack/#/techs">
              Technologies
            </Nav.Link>
            <Nav.Link className="link" href="/Personal_Portfolio_Full_Stack/#/projects">
              Projects
            </Nav.Link>
            <Nav.Link className="link" href="/Personal_Portfolio_Full_Stack/#/contact">
              Contact
            </Nav.Link>

            <NavDropdown
              title="Social Media"
              id="basic-nav-dropdown link"
              className="navbar-collapse-nav-dropdown link"
            >
              <NavDropdown.Item
                className="navbar-collapse-nav-dropdown-item link"
                href="https://www.linkedin.com/in/alejandro-gimeno-ataz-3741a013b/"
              >
                <div className="dropdown_linkedin social-image">
                  Linkedin
                  <img src={Linkedin} alt="logo_linkedin" />
                </div>
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item
                className="navbar-collapse-nav-dropdown-item link"
                href="https://outlook.live.com/owa/"
              >
                <div className="dropdown_email social-image">
                  Email
                  <img src={Mail} alt="logo_twitter" />
                </div>
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item
                className="navbar-collapse-nav-dropdown-item link"
                href="https://github.com/AlexGA93"
              >
                <div className="dropdown_github social-image">
                  Github
                  <img src={Github} alt="logo_github" />
                </div>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Button
            onClick={toggleMode}
            variant={colorMode ? "outline-dark" : "outline-light"}
          >
            Dark Mode: {colorMode ? "Off" : "On"}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
