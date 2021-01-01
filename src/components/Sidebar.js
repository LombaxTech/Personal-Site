import React from "react";
import "../styles/sidebar.scss";
import { NavLink, Link } from "react-router-dom";

function Sidebar() {
    return (
        <nav className="sidebar">
            <div className="sidebar-menu">
                <ul className="list-unstyled components">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    {/* <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Me</Link>
                    </li> */}
                </ul>
            </div>
        </nav>
    );
}

export default Sidebar;
