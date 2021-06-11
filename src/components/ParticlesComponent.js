import React from "react";
import Particles from "react-particles-js";
import "../styles/particlescomponent.scss";

export default function ParticlesComponent() {
    return (
        <div className="particles" style={{ zIndex: 500 }}>
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 100,
                        },
                    },
                }}
            />
        </div>
    );
}
