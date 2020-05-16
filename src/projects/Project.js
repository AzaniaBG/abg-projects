import React from 'react';
import Images from './Images';
import './ProjectsPage.css';

export default function Project(props) {
   
    return (
    <section className='Project-container'>
        <h2>{props.projectName}</h2>
        <figure className='Project-image-container'>
        <Images>
        {props.children}
        </Images>
        </figure>
        <section className='Project-details-container'>
        <h3>{props.description}</h3>
        <h3>{props.tech}</h3>
        <h3>{props.repo}</h3>
        </section>
    </section>
    )
}