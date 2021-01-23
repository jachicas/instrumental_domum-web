import React from "react";
import { Link } from 'react-router-dom';

function NotFound(props) {
    return (
        <div className="text-black text-2xl text-center">
            <h1> Esta pagina no existe vuele a inicio <Link to="/">Has click aqui</Link> </h1>
        </div>
    )
}

export default NotFound;