import React, { Fragment } from "react";

function MTButton(props) {
    return (
        <Fragment>
                <button
                    className={`ml-4 transition-colors duration-500 focus:outline-none outline-none ${props.setAll}`}
                    type={props.type}>
                    {props.name}
                </button>
        </Fragment>
    )
}

export default MTButton;