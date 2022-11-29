import React from 'react';

// components
import { Card } from '../../components/index';

// context provider
import { useStateContext } from '../../context/ContextProvider';

// framer-motion
import { motion } from 'framer-motion';

// styles
import './ContactMe.scss';

const ContactMe = () => {

  const { contact, setContact } = useStateContext();

  return (
    <motion.div 
      className='contact background_image_format' 
      id='contact'
    
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
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
    </motion.div>
  )
}

export default ContactMe;