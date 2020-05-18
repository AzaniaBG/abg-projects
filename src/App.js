import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';
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
    const { projects, images } = this.state;
    
    const project = projects.map((project, i) => {
      const projectName = project.projectName;
      const liveLink = project.liveLink;
      const projectRepo = project.repo;
      const projectTech = project.tech
      const projectDescrip = project.description;
      return (
        <section key={`${project.projectName}-${project.id}`} className="Project-container">
        <header>
          <a href={liveLink} target="_blank" rel="noreferrer" >
          <h2>
          {projectName}
          </h2>
          </a>
          <article>{projectDescrip}</article>
        </header>
        <img src={images[i].cover} alt={project.alt} />
        <section className='project-details'>
          <h3>
          <a href={projectRepo} target="_blank" rel="noreferrer" >
            GitHub Repository
          </a>
          </h3>
          <h3>Tech Used: {projectTech}</h3>
        </section>
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

          </Context.Provider>

        </main>
      </div>
    );
  }
}

export default App;
