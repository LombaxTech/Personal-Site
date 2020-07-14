import React from "react";
import Particles from "react-particles-js";

export default function ParticlesComponent() {
    return (
        <div className="particles">
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
