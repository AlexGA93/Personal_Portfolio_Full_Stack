import React, {useEffect} from 'react';

// context provider
import { useStateContext } from '../../context/ContextProvider.jsx';

// react bootstrap
import Carousel from 'react-bootstrap/Carousel';

// styles
import './BannerCarousel.scss';

const BannerCarousel = () => { 

  // const { id, login, name, avatar, description } = props.element;
  // import states
  const { 
    isLoaded, 
    setIsLoaded,

    githubRepos, 
    setGithubRepos
  } = useStateContext();

  return (
    <>
      <Carousel variant="dark">
        {
          githubRepos.map((element, index, array) => (
              <Carousel.Item key={index}>
                  <img 
                      className='d-block w-100'
                      src={element.avatar}
                      alt={element.name}
                  />
                  <Carousel.Caption>
                      <h3>{element.name}</h3>
                      <p>{element.description}</p>
                  </Carousel.Caption>
                  </Carousel.Item>
          ))
        }
      </Carousel>
    </>
  );
}

export default BannerCarousel;