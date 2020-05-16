import React, { Fragment } from 'react';
import Images from './Images';
//import Start_Screen from './screenshots/Quiz-App/Start_Screen_mobile.jpg';
//import Horror_House from './screenshots/Horror-House/HomeSearchOptions.png';
import ProjectsData from './ProjectsData';
import Context from '../Context';

export default class Project extends React.Component {
    constructor(props) {
        super(props)
    }
    static contextType = Context;
    render() {
        
        const projects = ProjectsData.projects.map((project, index) => {
            
            const image = <img src={project.image} />
            const images = this.context.images;
            const HorrorHouse = images[0].cover;
            // const image = images.map((image, i) => <img key={`image-${i}`} src={`${image.cover}`} /> )
         return (
            <Fragment>
                <h2><a href={project.liveLink} target='_blank' rel='noreferrer' >{project.projectName}</a></h2>
                <figure className='Project-image-container'>
                <img src={images[index].cover} alt={project.alt} />
                <Images />
                </figure>
                <h3>{project.description}</h3>
                <h3>{project.tech}</h3>
                <h3><a href={project.repo} target='_blank' rel='noreferrer'>GitHub Repo</a></h3>
            </Fragment>
            )
            }

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
}