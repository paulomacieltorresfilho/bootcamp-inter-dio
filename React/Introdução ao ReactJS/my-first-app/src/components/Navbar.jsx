import React from "react";
import "./styles/Navbar.css"

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Aviões</a>
                    <a href="#">Ônibus</a>
                    <a href="#">Procurar</a>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;