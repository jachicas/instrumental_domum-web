import React, { Fragment } from "react";
import { HiOutlineInformationCircle } from "react-icons/hi";

function TInput(props) {
    return (
        <Fragment>
            <label className="text-white">
                {props.label}
            </label>
            <div className="mt-2">
                <input
                    className="bg-gray-300 rounded-md w-full h-9 p-3 border-2 border-gray-300 outline-none transition duration-500 focus:ring-2 focus:ring-yellow-500"
                    type={props.type}
                    name={props.name}
                    placeholder={props.placeholder}
                    ref={props.rules}
                />
            </div>
            {props.error && <div className="flex text-sm justify-end items-center pt-1 text-red-500 ">
                <HiOutlineInformationCircle className="my-1" />
                <p className="px-1">{props.error.message}</p>
            </div>}
        </Fragment>
    )
}

export default TInput;

