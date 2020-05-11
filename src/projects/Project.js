import React from 'react';
import Images from './Images';
import Start_Screen from '../screenshots/Quiz-App/Start_Screen_mobile.jpg';

export default function Project(props) {
    return (
        <section className='Project-container'>
            <h2>
                {props.projectName}
            </h2>
            <figure className='Project-image-container'>
            <Images image={Start_Screen} alt="Mobile screen view of Quiz App's Start Page." />

            </figure>
            <h3>{props.projectDescription}</h3>
            <h3>{props.repoLink}</h3>
        </section>
    )

}