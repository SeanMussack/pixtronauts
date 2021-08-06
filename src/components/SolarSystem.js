import React, { Component } from 'react';

import Planemo from './Planemo';

import {PLANEMOS} from '../shared/planemos.js'

function RenderPlanets (planets) {
    return (
        planets.map(planet => {
            return (
                <Planemo
                    key={planet.id}
                    planemo={planet}
                />
            );
        })
    );
}

class SolarSystem extends Component {
    render() {
        return (
            <div className="solar-system">
                {RenderPlanets(PLANEMOS)}
            </div>
        );
    }
}

export default SolarSystem;