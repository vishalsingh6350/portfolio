import "./styles.css";
import Navbar from './Components/Navbar';
import IntroSection from './Components/IntroSection'
import FeatureProjectsSection from './Components/FeatureProjectsSection'
import Skills from './Components/Skills'
import AboutMe from './Components/AboutMe'
import Projects from "./Components/Projects";
export default function App() {
  // window.addEventListener('resize',()=>{
  //   console.log(window.innerWidth);
  // })
  return (
    <>
      <Navbar/>
      <IntroSection/>
      <AboutMe/>
      <FeatureProjectsSection/>
      <Skills/>
      <Projects/>
    </>
  );
}
