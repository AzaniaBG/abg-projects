import React from 'react';
import Images from './Images';
import './Projects.css';

export default function Project(props) {
   
    return (
    <section id='Project-container'>
    <h2 className="ProjectName-header-1 sub-grid-1">{props.projectName}</h2>
    {/* <figure className='Project-image-container sub-grid-2'> */}
        <Images>
        {props.children}
        </Images>
    {/* </figure> */}
    {/* <section className='Project-details-container sub-grid-3' > */}
        <aside className='Project-details-description'>
        <h3>{props.description}</h3>
        </aside>
        <h3 className='Project-details-tech'>{props.tech}</h3>
        <h3 className='Project-details-header'>{props.repo}</h3>
    {/* </section> */}
    </section>
    )
}