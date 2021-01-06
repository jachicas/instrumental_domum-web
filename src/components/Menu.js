import React from "react";
import logo from '../assets/img/INSTRUMENTAL.png';

function Menu() {
    return (
        <div className="w-screen h-20 flex items-center px-12 pb-2 z-50 fixed border-b">
            <img className="h-12" src={logo} alt="logo" />
        </div>
    )
}

export default Menu;