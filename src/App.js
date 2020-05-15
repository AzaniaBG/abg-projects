import React from 'react';
import './App.css';
import Project from './projects/Project';
import ProjectsData from './projects/ProjectsData';
import Context from './Context';
import QuizAppCover from './screenshots/Quiz-App/QuizAppCover.jpg'
import HorrorHouseCover from './screenshots/Horror-House/HorrorHouseCover.png';

class App extends React.Component {

  static contextType = Context;
  
  constructor(props) {
    super(props)
    const projects = ProjectsData;

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
    const { images }= this.state;

    return (
      <div className="App">
        <header>
          <h1>ABG Projects</h1>
        </header>
        <main className="Main-container">
          <Context.Provider
          value={{
            images: this.state.images
          }}>
          <Project>
            <h2>
              <a href={projects[0].liveLink} target="_blank">{projects[0].projectName}</a>
            </h2>
            <figure>
              <img src={QuizAppCover} />
            </figure> 
              <h3>{projects[0].description}</h3>
              <h3>{projects[0].tech}</h3>
              <h3><a href={projects[0].repo} target="_blank">GitHub Repo</a></h3>
          </Project>
          <Project>
            <h2>
              <a href={projects[1].liveLink} target="_blank">{projects[1].projectName}</a>
            </h2>
            <figure>
              <img src={HorrorHouseCover} />
            </figure> 
              <h3>{projects[1].description}</h3>
              <h3>{projects[1].tech}</h3>
              <h3><a href={projects[1].repo} target="_blank">GitHub Repo</a></h3>
          </Project>
          </Context.Provider>
        </main>
      </div>
    );
  }
}

export default App;
