import React from "react";

// react bootstrap
import Carousel from "react-bootstrap/Carousel";

// styles
import "./BannerCarousel.scss";

const BannerCarousel = ({githubRepos}) => {

  return (
    <>
      <Carousel variant="dark">
        {githubRepos.map((element, index, array) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={element.avatar}
              alt={element.name}
            />
            <Carousel.Caption>
              <h3>{element.name}</h3>
              <p>{element.description}</p>
              <a href={element.url} className="btn btn-primary">
                Go to repo
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default BannerCarousel;
