import React, { Fragment } from 'react';
import Images from './Images';

export default function Project(props) {
   
    return (
    <Fragment>
        <h2>{props.projectName}</h2>
        <figure className='Project-image-container'>
        <Images>
            {props.children}
        </Images>
        {/* <img src={props.src} /> */}
        </figure>
        <h3>{props.description}</h3>
        <h3>{props.tech}</h3>
        <h3>{props.repo}</h3>
    </Fragment>
    )
}