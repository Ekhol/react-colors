import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewColorForm({ newColor }) {
    const history = useNavigate();
    const initialState = {
        name: "",
        hex: "000000"
    };
    const [formData, setFormData] = useState({ initialState });

    const getInput = e => {
        e.preventDefault();
        newColor({ [formData.name]: formData.hex });
        history.push('/colors');
    };
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData, [name]: value
        }));
    };

    return (
        <div>
            <form onSubmit={getInput}>
                <div>
                    <label htmlFor="name">Color Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter name here"
                        onChange={handleChange}
                        value={formData.name}
                    />
                </div>
                <div>
                    <label htmlFor="hex">Hex Color Value</label>
                    <input
                        type="color"
                        name="hex"
                        id="hex"
                        onChange={handleChange}
                        value={formData.hex}
                    />
                </div>
                <button>Add new color!</button>
            </form>
        </div>
    );
}

export default NewColorForm;