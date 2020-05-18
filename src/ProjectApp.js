import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';
import Project from './projects/Project';
// import ProjectGrid from './projects/ProjectGrid';
import ProjectsData from './projects/ProjectsData';
import Context from './Context';
import QuizAppCover from './screenshots/Quiz-App/QuizAppCover.jpg'
import HorrorHouseCover from './screenshots/Horror-House/HorrorHouseCover.png';

class ProjectApp extends React.Component {

  static contextType = Context;
  
  constructor(props) {
    super(props)

    this.state = {
      images: [
        {
          id: 1,
          cover: `${QuizAppCover}`, 
        },
        {
          id: 2,
          cover: `${HorrorHouseCover}`

        }
      ],
      projects: ProjectsData.projects
      }    
  }

  render() {
    const { projects } = this.state;

    return (
      <div className="App">
        <header>
          <h1>ABG Projects</h1>
        </header>
        <main id="Main-container">
          <Context.Provider
          value={{
            images: this.state.images
          }}>
          <Project className="Project-container-1">
            <header className="ProjectName-header-1 .sub-grid-1">
            <h2>
              <NavLink to={projects[0].liveLink} target="_blank" rel="noreferrer">{projects[0].projectName}</NavLink>
            </h2>
            </header>
            <figure className="Project-image-container-1">
            <img src={QuizAppCover} alt={projects[0].alt} />
            </figure> 
            <section className="Project-details-container-1">
              <h3>{projects[0].description}</h3>
              <h3>{projects[0].tech}</h3>
              <h3><NavLink to={projects[0].repo} target="_blank" rel="noreferrer">GitHub Repo</NavLink></h3>
            </section>
          </Project>
          <Project className="Project-container-2 ">
            <header className="ProjectName-header-2">
            <h2>
              <NavLink to={projects[1].liveLink} target="_blank" rel="noreferrer">{projects[1].projectName}</NavLink>
            </h2>
            </header>
            <figure className="Project-image-container-2">
              <img src={HorrorHouseCover} alt={projects[1].alt} />
            </figure> 
            <section className="Project-details-container-2">
              <h3>{projects[1].description}</h3>
              <h3>{projects[1].tech}</h3>
              <h3><NavLink to={projects[1].repo} target="_blank" rel="noreferrer">GitHub Repo</NavLink></h3>
            </section>
          </Project>
          </Context.Provider>
        </main>
      </div>
    );
  }
}

export default ProjectApp;
