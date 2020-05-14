import React from 'react';
import './App.css';
import ProjectsPage from './projects/ProjectsPage';
import Context from './Context';
// import QuizAppCover from '../src/screenshots/Quiz-App/QuizAppCover';
import HorrorHouseCover from '../screenshots/Horror-House/HorrorHouseCover.png';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: {
        // QuizApp: `${QuizAppCover}`,
        HorrorHouse: `${HorrorHouseCover}`

      }
    }
  }
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
            Learn React
        </header> */}
        <main className="Main-container">
          <Context.Provider
          value={{
            images: this.state.images
          }}>
          <ProjectsPage />
          </Context.Provider>
        </main>
      </div>
    );
  }
}

export default App;
