import React from 'react'
import pic from '../assets/pictures/Screenshot.png'

const FeatureProjectsSection = () => {
   return (
      <div className='featured'>
         <h3 className="featuredHeading">FEATURED PROJECT</h3>
         <div className="fProjectContainer">
            <img src={pic} alt="screenshot" className="ss"/>
            <div className="fProjectDescription">
               <h2>myCms - a blogging website</h2>
               <p>It is a modern blogging with almost every feature which are required to make a blogging website great.. It is built on technologies like html css js bootstrap php and mySql</p>
            </div>
         </div>
      </div>
   )
}

export default FeatureProjectsSection
