import React from 'react';

// components
import { Card } from '../../components/index';

// context provider
import { useStateContext } from '../../context/ContextProvider';

// styles
import './ContactMe.scss';

const ContactMe = () => {

  const { contact, setContact } = useStateContext();

  return (
    <section className='contact background_image_format' id='contact'>
      {/* container */}
      <div className="contact_container d-flex flex-column justify-content-center align-items-center">
        {/* title inside a banner */}
        <div className="contact_container_box banner_model">
          {/* title */}
          <div className='contact_container_box_title text-center'>
            <h1>Contact Me!</h1>
          </div>
          {/* content */}
          <div className="contact_container_box_content d-flex flex-row flex-wrap justify-content-center">
            {/* bootstrap cards */}
            {
              contact.map(
                (element, index,array) => (
                  <Card key={index} element={element} />
                )
              )
            }
          </div>
        </div>
      </div> 
    </section>
  )
}

export default ContactMe;