import React, { Fragment } from 'react';

export default function Images(props) {
    return (
        <Fragment>
            <figcaption>{props.children}</figcaption>
            <img src={props.image} alt={props.alt} />
        </Fragment>
    )
}