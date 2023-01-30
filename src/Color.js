import React from 'react';
import { Link } from 'react-router-dom';

function Color({ hex, color, history }) {
    if (!hex) {
        history.push('/colors');
    }
    return (
        <div style={{ backgroundColor: hex }}>
            <h2>{color}</h2>
            <p>
                <Link to="/colors">Go back?</Link>
            </p>
        </div>
    );
}

export default Color;