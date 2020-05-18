import React from 'react';
import Context from '../Context';
//import Images from './Images';
import './Projects.css';

 class ProjectGrid extends React.Component {
     static contextType = Context;

   render() {
        return (
        <section id='Project-container'>
        <h2 className="ProjectName-header-1 sub-grid-1">{this.props.projectName}</h2>
        <figure className='Project-image-container sub-grid-2'>
            {this.props.children}
        </figure>
            <section className='Project-details-container sub-grid-3' >
            <aside className='Project-details-description'>
            <h3>{this.props.description}</h3>
            </aside>
            <h3 className='Project-details-tech'>{this.props.tech}</h3>
            <h3 className='Project-details-header'>{this.props.repo}</h3>
            </section>
        </section>
        )
    }
}
export default ProjectGrid;