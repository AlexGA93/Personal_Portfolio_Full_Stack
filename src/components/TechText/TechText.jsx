import React from 'react';

// style
import './TechText.scss';

const TechText = () => {
  return (
    <div className='text'>
        <div className='text_container'>
          <p>
              I am currently studying the fourth year of my degree in <strong>Electronic Telecommunications Engineering</strong> at the 
              University of Valencia. I am mainly looking for a position in the areas of software development and full stack 
              programming. My main skills in the area would be <strong>Front end</strong> programming with <strong>Javascript</strong> and <strong>Typescript</strong>, handling 
              libraries and frameworks such as <strong>React.js</strong> (having implemented the structure in <strong>Redux</strong>) or <strong>Angular.js</strong>. Additionally, 
              regarding styles, I handle both <strong>CSS</strong> and <strong>Sass</strong> together with <strong>Bootstrap</strong>, <strong>primeNG</strong>.
          </p>
          <p>
              Regarding Backend programming, I specialize in the use of environments within the M.E.R.N stack, such as <strong>Node.js</strong>, 
              using <strong>MongoDB</strong> as a database (currently I am working with non-relational DDBBs such as <strong>MySQL</strong> ). I have no problem both 
              adapting and learning new disciplines.
          </p>
          <p>
              In regards to the version control I incorporate the git technology to my projects by <strong>Github</strong>(attached in my CV) with 
              the rest APIs services and the test of them with tools like <strong>Postman</strong> and <strong>Insomnia</strong>.
          </p>
        </div>
    </div>
  )
}

export default TechText;