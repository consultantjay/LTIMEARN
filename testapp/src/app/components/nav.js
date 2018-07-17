
import React from "react";
import  { Link }  from  "react-router-dom";

export const Nav = () => {
    return (
        
        <div>
        <nav className="navbar navbar-default">
                <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link exact="true" to="/">Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/list">List
                            </Link>
                        </li>
                        <li>
                            <Link to="/listitem">ListItem
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
        </div>
         
    )
}