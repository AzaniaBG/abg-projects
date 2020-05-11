import React, { Fragment } from 'react';

export default function Images(props) {
    return (
        <Fragment>
            <img src={props.image} alt={props.alt} />
        </Fragment>
    )
}