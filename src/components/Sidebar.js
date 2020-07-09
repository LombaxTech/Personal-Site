import React from "react";
import "../styles/sidebar.scss";
import { NavLink, Link } from "react-router-dom";

function Sidebar() {
    console.log(window.location);
    return (
        <nav className="sidebar">
            <div className="sidebar-menu">
                <ul className="list-unstyled components">
                    <li>
                        {/* <NavLink
                            to="/"
                            activeClassName="selected"
                            className="nav-link"
                        >
                            Home
                        </NavLink> */}
                        <Link to="/">Home</Link>
                        {/* <a href="/">Home</a> */}
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                        {/* <a href="/projects">Projects</a> */}
                    </li>
                    <li>
                        <Link to="/about">About</Link>

                        {/* <a href="/about">About Me</a> */}
                    </li>
                    <li>
                        <Link to="/contact">Contact Me</Link>

                        {/* <a href="/contact">Contact Me</a> */}
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Sidebar;
