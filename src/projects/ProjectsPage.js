import React, { Fragment } from 'react';
import Context from '../Context';
import './ProjectsPage.css';
import Images from './Images';
import Project from './Project';
import ProjectsData from './ProjectsData';
//import HorrorHouse from './screenshots/Horror-House/HomeSearchOptions.png';

export default class ProjectsPage extends React.Component {
    constructor(props) {
        super(props)
    }
    static contextType = Context;
    render() {
    const horrorHouse = ProjectsData.projects[1];
    const name = horrorHouse.projectName;
    const link = horrorHouse.href;
    const repo = horrorHouse.repo;
    return  (
        <section id='ProjectsPage-container'>
            <Project
                projectName={<a href='https://azaniabg.github.io/quiz-app/' target='_blank'>Spanish Quiz App</a>}
                repoLink={<a href='https://github.com/AzaniaBG/quiz-app' target='_blank'>GitHub Repo</a>}
            />
            <section className='Project-container'>
            <h2>
                Project Name/Live Link
            </h2>
            <figure className='Project-image-container'>
            <img />
            </figure>
            <h3>Abstract</h3>
            <h3>Repo Link</h3>
            </section>
            <section className='Project-container'>
            <Project
                projectName={<a href={link}>{name}</a>}
                repoLink={<a href={repo}>GitHub Repo</a>}
            />
            {/* <Images image={HorrorHouse} /> */}
            </section>
        </section>
        )
    }
}