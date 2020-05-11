import React, { Fragment } from 'react';
import './ProjectsPage.css';
import Images from './Images';
import Start_Screen from '../screenshots/Quiz-App/Start_Screen_mobile.jpg';

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
        <Images image={Start_Screen} />
        </figure>
        <h3>Abstract</h3>
        <h3>Repo Link</h3>
        </section>
    </section>
    )
}