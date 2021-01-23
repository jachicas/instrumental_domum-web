import React from "react";
import Menu from "../components/Menu";
import "../App.css";

function Home() {
  return (
    <div>
      <Menu />
      <div className="flex justify-start mt-20 ml-20">
        <a className="text-white mt-8 ml-8 border-b-2 border-yellow-500 pb-0.5 border-general transition-colors duration-500 hover:border-yellow-600" href="/"> Guitarras </a>
        <a className="text-white mt-8 ml-8 transition-colors duration-500 hover:border-yellow-700" href="/"> Baterias </a>
        <a className="text-white mt-8 ml-8 transition-colors duration-500 hover:border-yellow-700" href="/"> Microfonos </a>
      </div>
      <div className="flex flex-wrap justify-start ml-20 justify-items-auto mb-10">
        <div className="h-60 w-56 ml-8 mt-10 rounded-md bg-search flex">
        </div>
        <div className="h-60 w-56 ml-14 mt-10 rounded-md bg-search"></div>
        <div className="h-60 w-56 ml-14 mt-10 rounded-md bg-search"></div>
        <div className="h-60 w-56 ml-14 mt-10 rounded-md bg-search"></div>
        <div className="h-60 w-56 ml-14 mt-10 rounded-md bg-search"></div>
        <div className="h-60 w-56 ml-8 mt-10 rounded-md bg-search"></div>
        <div className="h-60 w-56 ml-14 mt-10 rounded-md bg-search"></div>
        <div className="h-60 w-56 ml-14 mt-10 rounded-md bg-search"></div>
        <div className="h-60 w-56 ml-14 mt-10 rounded-md bg-search"></div>
        <div className="h-60 w-56 ml-14 mt-10 rounded-md bg-search"></div>
        <div className="h-60 w-56 ml-8 mt-10 rounded-md bg-search"></div>
        <div className="h-60 w-56 ml-14 mt-10 rounded-md bg-search"></div>
        <div className="h-60 w-56 ml-14 mt-10 rounded-md bg-search"></div>
        <div className="h-60 w-56 ml-14 mt-10 rounded-md bg-search"></div>
        <div className="h-60 w-56 ml-14 mt-10 rounded-md bg-search"></div>
      </div>
    </div>

  )
}

export default Home;