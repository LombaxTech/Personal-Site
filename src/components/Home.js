import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Button } from "react-bootstrap";
import "../styles/home.scss";

export default function Home() {
    return (
        <div className="home">
            <h1>
                Solving <div className="h1-bold">PROBLEMS</div>
                <br /> using <div className="h1-bold">CODE</div>
            </h1>
            <div className="extra-info">
                <Link to="/projects">View Projects</Link>

                <div className="name">
                    <h3>Rakib Khan</h3>
                </div>
            </div>
        </div>
    );
}
