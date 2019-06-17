import React from 'react';
import FancyBorder from './FancyBorder';

function Dialog(props) {

    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    );

}

export default Dialog;