import React from "react";

// icons
import html from "../../assets/icons/techs/html.png";
import css from "../../assets/icons/techs/css.png";
import javascript from "../../assets/icons/techs/javascript.png";
import react from "../../assets/icons/techs/react.png";
import redux from "../../assets/icons/techs/redux.png";
import bootstrap from "../../assets/icons/techs/bootstrap.png";
import sass from "../../assets/icons/techs/sass.png";
import node from "../../assets/icons/techs/node.png";
import mongodb from "../../assets/icons/techs/mongodb.png";
import typescript from "../../assets/icons/techs/typescript.png";
import angular from "../../assets/icons/techs/angular.png";
import git from "../../assets/icons/techs/git.png";
import postman from "../../assets/icons/techs/postman.png";

// react bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// styles
import "./TechGrid.scss";

const TechGrid = () => {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          <img src={html} alt="html_logo" />
        </Col>
        <Col className="d-flex justify-content-center">
          <img src={css} alt="css_logo" />
        </Col>
        <Col className="d-flex justify-content-center">
          <img src={javascript} alt="javascript_logo" />
        </Col>
        <Col className="d-flex justify-content-center">
          <img src={react} alt="react_logo" />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <img src={redux} alt="redux_logo" />
        </Col>
        <Col className="d-flex justify-content-center">
          <img src={bootstrap} alt="bootstrap_logo" />
        </Col>
        <Col className="d-flex justify-content-center">
          <img src={sass} alt="sass_logo" />
        </Col>
        <Col className="d-flex justify-content-center">
          <img src={node} alt="node_logo" />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <img src={mongodb} alt="mongodb_logo" />
        </Col>
        <Col className="d-flex justify-content-center">
          <img src={typescript} alt="typescript_logo" />
        </Col>
        <Col className="d-flex justify-content-center">
          <img src={angular} alt="angular_logo" />
        </Col>
        <Col className="d-flex justify-content-center">
          <img src={git} alt="git_logo" />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <img src={postman} alt="postman_logo" />
        </Col>
      </Row>
    </Container>
  );
};

export default TechGrid;
