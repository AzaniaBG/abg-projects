import React from 'react';
import './App.css';
import ProjectsPage from './projects/ProjectsPage';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
          Learn React
      </header> */}
      <main className="Main-container">
        <ProjectsPage />
      </main>
    </div>
  );
}

export default App;
