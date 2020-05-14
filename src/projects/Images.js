import React, { Fragment } from 'react';
import Context from '../Context';

export default class Images extends React.Component {
    constructor(props) {
        super(props)
    }
    static contextType = Context;

    render(props) {
        const HorrorHouseCover = this.context.images;

        return (
            <Fragment>
                <figcaption>
                <img src={HorrorHouseCover} />
                </figcaption>
            </Fragment>
        )
    }
}