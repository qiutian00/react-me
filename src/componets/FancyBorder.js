import React from 'react';

function FancyBorder(props) {

    return (
        <div className={props.color}>
            {props.children}
        </div>
    );

}

export default FancyBorder;