import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
            <h1> <Link style={{ color: '#FFF', textDecoration:'none'}} to="../Home">Pet Heaven</Link> </h1>
            <h5 id="h5display" className="h5display"><Link style={{ color: '#FFF', textDecoration:'none'}} to="../Login">Login/Register</Link></h5>
        </header>
    );
}

export default Header;