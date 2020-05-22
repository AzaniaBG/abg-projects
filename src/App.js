import React from 'react';
import './App.css';
import ProjectsData from './projects/ProjectsData';
import Context from './Context';
import QuizAppCover from './screenshots/Quiz-App/QuizAppCover.jpg'
import HorrorHouseCover from './screenshots/Horror-House/HorrorHouseCover.png';
import PortfolioCover from './screenshots/Portfolio/Header_View_mobile.png';

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
        },
        {
          id: 3,
          cover: `${PortfolioCover}`
        },

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
          <a href={liveLink} target="_blank" rel="noopener noreferrer"  >
          <h2>
          {projectName}
          </h2>
          </a>
          <article>{projectDescrip}</article>
        </header>
        <figure>
        <img src={images[i].cover} alt={project.alt} />
        </figure>
        <section className='project-details'>
          <h3>
          <a href={projectRepo} target="_blank" rel="noopener noreferrer"  >
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
        <header className="App-header">
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
