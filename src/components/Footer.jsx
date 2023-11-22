import React from "react";

function Footer(){
    const currentYear = new Date().getFullYear();

    return(
        <footer>
            <p>Pet Heaven Pte Ltd © {currentYear}</p>
        </footer>
        
    );
}

export default Footer;