import React, { useState } from 'react';

const UpdateArray = () => {
    const [colors, setItems] = useState(["Red", "Green", "Blue"]);

    const addItem = () => {
        const newcolor = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = '';

        setItems(c => [...c, newcolor]);
    }

    const removeItem = (index) => {

        setItems(colors.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h2>Update Array</h2>
            <ul>
                {colors.map((color, index) => <li key={index} onClick={() => removeItem(index)}>{color}</li>)}
            </ul>
            <input type="text" id='foodInput' placeholder='Enter Color Name' />
            <button onClick={addItem}>Add Color</button>
        </div>
    );
};

export default UpdateArray;