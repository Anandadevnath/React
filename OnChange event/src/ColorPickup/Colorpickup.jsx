import React, { useState } from 'react';
import './Colorpickup.css';

const ColorPickup = () => {
    const [color, setColor] = useState('#000000');

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    return (
        <div className='color-picker-container'>
            <h1>Color Picker</h1>

            <div className='color-display' style={{ backgroundColor: color }}>
                <p>Selected Color: {color}</p>
            </div>

            <p>Hash Color: {color}</p>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    );
};

export default ColorPickup;