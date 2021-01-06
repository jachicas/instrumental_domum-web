import React from "react";

function TButton(props) {
    return (
        <button
            className="w-full h-10 transition-colors bg-general text-white rounded-md focus:outline-none hover:bg-danger"
            type={props.type}>
            {props.name}
        </button>

    )
}

export default TButton;