import React from 'react'

const AboutMe = () => {
   let today= new Date();
   let collegeYear=' ';
   console.log(today.getMonth())
   console.log(today.getFullYear())
   if(today.getFullYear()==2021&&today.getMonth()<8){
      collegeYear='2nd year';
   }else if(today.getFullYear()==2021&&today.getMonth()>8){
      collegeYear='3rd year';
   }else if(today.getFullYear()==2022&&today.getMonth()<8){
      collegeYear='3rd year';
   }else if(today.getFullYear()==2022&&today.getMonth()>8){
      collegeYear='4th year';
   }else if(today.getFullYear()==2023&&today.getMonth()<8){
      collegeYear='4th year';
   }else{
      collegeYear='passout';
   }
   return (
      <div className='aboutMe'>
         <h2 className='aboutHeading'>about me</h2>
         <p className="aboutPara">I am vishal, a {collegeYear} student, from Ramgarh Engineering College, Jharkhand pursuing bachelor's degree in Computer Science... I am passionate about developing beautiful front-end layouts using html css and js and even with some frameworks like ReactJS.</p>
      </div>
   )
}

export default AboutMe
