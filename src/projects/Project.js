import React, { Fragment } from 'react';
import Images from './Images';
//import Start_Screen from './screenshots/Quiz-App/Start_Screen_mobile.jpg';
//import Horror_House from './screenshots/Horror-House/HomeSearchOptions.png';
import ProjectsData from './ProjectsData';

export default function Project(props) {
    const projects = ProjectsData.projects.map(project => 
        <Fragment>
            <h2><a href={project.liveLink}>{project.projectName}</a></h2>
            <figure className='Project-image-container'>
            <Images />
            </figure>
            <h3>{project.description}</h3>
            <h3>{project.tech}</h3>
            <h3><a href={project.repo}>GitHub Repo</a></h3>
        </Fragment>

    );
    return (
        <section className='Project-container'>
            {projects}
            {/* <h2>
                {projectName}
            </h2>
            <figure className='Project-image-container'>
            <Images image={}  />
            </figure>
            <h3>{props.projectDescription}</h3>
            <h3>{props.repoLink}</h3> */}
        </section>
    )

}