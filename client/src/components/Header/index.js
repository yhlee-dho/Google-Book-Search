import React from "react";

// custom css to overwrite jumbotron
// import style from "./style.css";
import "./style.css";

function Header() {
    return (
        <div className="jumbotron text-center">
            <div className="container text-bold">
                <h1>Google Books Search</h1>
            </div>
        </div>
    );
}

export default Header;