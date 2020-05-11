import React, { Fragment } from 'react';
import './ProjectsPage.css';

export default function ProjectsPage() {
   return  (
    <section id='ProjectsPage-container'>
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
        <img />
        </figure>
        <h3>Abstract</h3>
        <h3>Repo Link</h3>
        </section>
    </section>
    )
}