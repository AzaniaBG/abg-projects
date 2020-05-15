import React, { Fragment } from 'react';
import Context from '../Context';

export default class Images extends React.Component {

    static contextType = Context;

    render() {
        return (
            <Fragment>
                {/* <figure>
                <img src={this.props.src} />
                </figure> */}
                {this.props.children}
            </Fragment>
        )
    }
}