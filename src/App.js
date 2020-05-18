import React from 'react';
import { NavLink } from 'react-router-dom';
import './AppProject.css';
import ProjectMap from './projects/ProjectMap';
// import Project from './projects/Project';
import ProjectsData from './projects/ProjectsData';
import Context from './Context';
import QuizAppCover from './screenshots/Quiz-App/QuizAppCover.jpg'
import HorrorHouseCover from './screenshots/Horror-House/HorrorHouseCover.png';

class App extends React.Component {

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
    const project = projects.map(project => {
      const projectName = project.name;
      const projectRepo = project.repo;
      const projectTech = project.tech
      const projectDescrip = project.description;
      return (
        <section id={`${project.projectName}-${project.id}`} className={project.projectName}>
          <h2>{projectName}</h2>
          <h3>{projectRepo}</h3>
          <h3>{projectTech}</h3>
          <article>{projectDescrip}</article>
        </section>
      )
    });

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
          {project}
          <h2>{ProjectMap}</h2>

          </Context.Provider>

        </main>
      </div>
    );
  }
}

export default App;
