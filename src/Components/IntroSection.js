import React from 'react'
import pic from '../assets/pictures/profPic.jpg'
const IntroSection = () => {
   return (
      <div className='intro'>
            <div className="pic">
               <img src={pic} alt="" srcset="" />
            </div>
            <div className="partition"></div>
            <div className="textSection">
               <h2>Hi! I am vishal singh</h2>
               <p>Computer Science Engineer(2019-2023) | Front-end web developer | Cricket enthusiast </p>
            </div>
      </div>
   )
}

export default IntroSection
