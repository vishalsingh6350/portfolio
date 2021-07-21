import React from 'react'
import { FaReact,FaHtml5,FaCss3Alt,FaJs,FaBootstrap,FaPhp,FaNodeJs,FaPython,FaGithub } from 'react-icons/fa';
import { SiVisualstudiocode,SiMysql,SiMongodb,SiC,SiFirebase } from "react-icons/si";
const Skills = () => {
   return (
      <div className='skillsSection'>
         <h2>Skills</h2>
         <div className="SkillsContainer">
           <ul className="skillLists">
              <li><FaHtml5/></li>
              <li><FaCss3Alt/></li>
              <li><FaJs/></li>
              <li><FaBootstrap/></li>
              <li><FaPhp/></li>
              <li><FaNodeJs/></li>
              <li><FaReact/></li>
               {/* repeating starts from here */}
              <li><FaHtml5/></li>
              <li><FaCss3Alt/></li>
              <li><FaJs/></li>
              <li><FaBootstrap/></li>
              <li><FaPhp/></li>
           </ul>
         </div>
         <div className="SkillsContainer">
           <ul className="skillLists">
              <li><FaPython/></li>
              <li><FaGithub/></li>
              <li><SiC/></li>
              <li><SiMysql/></li>
              <li><SiMongodb/></li>
              <li><SiFirebase/></li>
              <li><SiVisualstudiocode/></li>
               {/* repeating starts from here */}
               <li><FaPython/></li>
              <li><FaGithub/></li>
              <li><SiC/></li>
              <li><SiMysql/></li>
              <li><SiMongodb/></li>
              <li><SiFirebase/></li>
              <li><SiVisualstudiocode/></li>
              <li><FaPython/></li>
              <li><FaGithub/></li>
              <li><SiC/></li>
              <li><SiMysql/></li>
              <li><SiMongodb/></li>
              <li><SiFirebase/></li>
              <li><SiVisualstudiocode/></li>
           </ul>
         </div>
      </div>
   )
}

export default Skills
