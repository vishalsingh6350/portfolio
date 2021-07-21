import { useState, useEffect } from "react";
import Loader from "./Loader";
const Projects = () => {
    const [loading, SetLoading] = useState(true);
    const [projectsData, setProjectsData] = useState([]);
    const [mostUsedLanguage, setMostusedLanguage] = useState("");
    const getApiData = async () => {
        const data = await fetch(
            "https://api.github.com/users/vishalsingh6350/repos"
        );
        const jsonData = await data.json();
        setProjectsData(jsonData);
        console.log(jsonData);
        if (jsonData) {
            SetLoading(false);
            let langData = {};
            jsonData.map((elem) => {
                console.log(elem["language"]);
                if (langData[elem["language"]]) {
                    ++langData[elem["language"]];
                } else {
                    langData[elem["language"]] = 1;
                }
            });
            let lang = "";
            let maxTillNow = 0;
            Object.keys(langData).forEach((element) => {
                // console.log(langData[element]);
                // console.log(element)
                if (langData[element] >= maxTillNow) {
                    lang = element;
                    maxTillNow = langData[element];
                }
            });
            // console.log("most used lang: ",lang);
            setMostusedLanguage(lang);
        }
    };
    let removeAndAddButtons=()=>{
        let project=document.querySelector('.eachProject');
        let projectsContainer=document.querySelector('.projectsContainer');
        let rect=project.getBoundingClientRect();
        
        if((projectsContainer.scrollWidth -(projectsContainer.scrollLeft+rect.width))<rect.width){
            document.querySelector('.scrollRightBtn').style.display='none';
            // console.log('hey')
        }
        if((projectsContainer.scrollWidth -(projectsContainer.scrollLeft+rect.width))>rect.width && document.querySelector('.scrollRightBtn').style.display=='none'){
            document.querySelector('.scrollRightBtn').style.display='flex';
            // console.log('hey')
        }


        if(projectsContainer.scrollLeft==0){
            document.querySelector('.scrollLeftbtn').style.display='none';
        }
        if(projectsContainer.scrollLeft!=0){
            document.querySelector('.scrollLeftbtn').style.display='flex';
        }

    }
    //scrolling the caraousel using javascript
    let scrollRight=()=>{
        let project=document.querySelector('.eachProject');
        let projectsContainer=document.querySelector('.projectsContainer');
        let rect=project.getBoundingClientRect();
        // console.log(rect.width)
        // console.log(projectsContainer.)
        projectsContainer.scrollLeft+=rect.width;
        // console.log("Total width of container: ",projectsContainer.scrollWidth)


        //hiding the right button
        if((projectsContainer.scrollWidth -(projectsContainer.scrollLeft+rect.width))<rect.width){
            document.querySelector('.scrollRightBtn').style.display='none';
            console.log('hey')
        }
        //bringing back the left button
        if(projectsContainer.scrollLeft!=0){
            document.querySelector('.scrollLeftbtn').style.display='flex';
        }
        // console.log(projectsContainer.scrollLeft);
        // console.log(rect.width)
    }
    //scrolling the caraousel using javascript
    let scrollLeft=()=>{
        let project=document.querySelector('.eachProject');
        let projectsContainer=document.querySelector('.projectsContainer');
        let rect=project.getBoundingClientRect();
        // console.log(rect.width)
        // console.log(projectsContainer)
        projectsContainer.scrollLeft-=rect.width;

        //hiding the left button
        if(projectsContainer.scrollLeft==0){
            document.querySelector('.scrollLeftbtn').style.display='none';
        }

        //bringing back the right button 
        if((projectsContainer.scrollWidth -(projectsContainer.scrollLeft+rect.width))>rect.width && document.querySelector('.scrollRightBtn').style.display=='none'){
            document.querySelector('.scrollRightBtn').style.display='flex';
            console.log('hey')
        } 
    }

    //using the useEffect hook to run this statement only once
    useEffect(() => {
        getApiData();
        document.querySelector('.projectsContainer').addEventListener('scroll',removeAndAddButtons)

        return ()=>{
            document.querySelector('.projectsContainer').addEventListener('scroll',removeAndAddButtons)
        } 
    }, []);

    return (
        <div className="projectsSection">
            {loading ? <Loader /> : ""}
            <div className="projectsInfo">
                <h2>projects section</h2>
                <p>
                    These are some of the projects I have made in my journey of
                    Learning web development,Some are only front-end projects
                    build using HTML CSS JS AND REACTJS and some of them are a
                    full stack web application created using backend
                    technologies like php and mySqli..... All these project's info are
                    dynamically updated uisng github API
                </p>
                {/* {<h1>{projectsData.length}</h1>} */}
                <div className="metaInfoContainer">
                    <div className="metaInfo">
                        <div className="number">{projectsData.length}</div>
                        <div className="numberInfo">repositories</div>
                    </div>
                    <div className="metaInfo">
                        <div className="number">{mostUsedLanguage}</div>
                        <div className="numberInfo">Most used language</div>
                    </div>
                    <div className="metaInfo">
                        <div className="number">{projectsData.length}</div>
                        <div className="numberInfo">repositories</div>
                    </div>
                </div>
            </div>
            <div className="workAroundToAdjustLRBtns">
            <div className="scrollLeftbtn scrollBtn" onClick={scrollLeft}>&lt;</div>
            <div className="scrollRightBtn scrollBtn" onClick={scrollRight}>&gt;</div>
                <div className="projectsContainer">
                    {projectsData.map((elem)=>{
                        return (
                        <div className="eachProject" key={elem.id}>
                        <div className="pFirstSection">
                            <div className='projectName'>{elem.name}</div>
                        </div>
                        <div className="pSecondSection">
                            <div className='projectDescription'>{elem.description}</div>
                            <div className='projectLanguage'>{elem.language}</div>
                            <a href={elem.html_url} className='projectsLink' target='_blank'>repo</a>
                            {elem.homepage?<a href={elem.homepage} className='projectsLink' target='_blank'>Live link</a>:''}
                        </div>
                        </div>
                      )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Projects;
