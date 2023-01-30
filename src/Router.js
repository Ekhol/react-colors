import React, { useState } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import ColorList from './ColorList';
import Color from './Color';
import NewColorForm from './NewColorForm';

function Router() {
    const initialColors = {
        lavender: "e6e6fa",
        lightseagreen: "20b2aa",
        khaki: "f0e68c"
    };

    const [colors, updateColors] = useState(initialColors);

    function handleChange(newColorObj) {
        updateColors(colors => ({ ...colors, ...newColorObj }));
    };

    function currentColor(p) {
        const { color } = p.match.params;
        const hex = colors[color];
        return <Color {...p} hex={hex} color={color} />
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/colors" element={<ColorList colors={colors} />} />
                <Route exact path="/colors/new" element={<NewColorForm newColor={handleChange} />} />
                <Route path="/colors/:color" render={currentColor} />
                <Route path="/" element={<Navigate replace to="/colors" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;