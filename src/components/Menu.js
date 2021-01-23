import React from "react";
import logo from '../assets/img/INSTRUMENTAL.png';
import MTButton from "./MTButton";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div className="w-screen h-20 flex items-center px-12 pb-2 border-b fixed top-0 left-0 bg-primary outline-none">
            <img className="h-12" src={logo} alt="logo" />
            <input className="mt-4 ml-12 h-8 w-7/12 bg-search outline-none rounded-sm text-white pl-5 transition duration-500 focus:ring-2 focus:ring-yellow-500" placeholder="Search..."></input>
            <Link to="/login">
                <MTButton name="Login" setAll="w-24 h-8 mt-4 text-white hover:bg-search" />
            </Link>
            <MTButton name="Sign in" setAll="bg-general w-24 h-8 mt-4 text-black hover:bg-danger" />
            <div className="text-white ml-7 mt-5 text-2xl transition-colors duration-500 hover:text-danger">
                <Link to="/">
                    <HiShoppingCart />
                </Link>
            </div>
        </div >

    )
}

export default Menu;