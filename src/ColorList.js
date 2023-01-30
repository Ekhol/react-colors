import React from 'react';
import { Link } from 'react-router-dom';

function ColorList({ colors }) {
    const colorLinks = Object.keys(colors).map(cName => (
        <li key={cName}>
            <Link to={`/colors/${cName}`}>{cName}</Link>
        </li>
    ));

    return (
        <div>
            <div>
                <h1>Would you like to add a color?</h1>
                <h1>
                    <Link to="/colors/new">Submit color</Link>
                </h1>
            </div>
            <div>
                <ul>{colorLinks}</ul>
            </div>
        </div>
    );
}

export default ColorList;