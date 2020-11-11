import React from'react';

const ProjectCard = (props) => {
    return (  
    <div className="projects-container">
    <div className="project-card">
    {props.project.map((el, i)=>{
        return(<div key={i}>
        <img src={el.picture} alt="project" />
        <p>
       {el.para}
        </p>
        <p>Github <a href={el.href}>{el.lien}</a></p>
      </div>)})}
       </div>
    </div>
       )};
      
    export default ProjectCard;