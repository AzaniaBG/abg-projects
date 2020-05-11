import React, { Fragment } from 'react';
import './ProjectsPage.css';
import Images from './Images';
import Project from './Project';

export default function ProjectsPage() {
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
        <h2>
            Project Name/Live Link
        </h2>
        <figure className='Project-image-container'>
        {/* <img /> */}
        <figcaption captionTitle='Quiz App' />
        </figure>
        <h3>Abstract</h3>
        <h3>Repo Link</h3>
        </section>
    </section>
    )
}