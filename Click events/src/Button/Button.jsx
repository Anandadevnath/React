import React, { useState } from 'react';
import images1 from 'E:/Web development/frontend/React/CLICK EVENTS/public/linkpic.png';
import images2 from 'E:/Web development/frontend/React/CLICK EVENTS/public/Copilot.png';
import './Button.css';

function Button() {
    let count = 0;
    const [showImage, setShowImage] = useState(false);

    const handleClick1 = () => {
        console.log('Button clicked');
    };

    const handleClick2 = (name) => {
        console.log(`Button clicked by ${name}`);
    };

    const handleClick3 = (name) => {
        if (count < 3) {
            count++;
            console.log(`Button clicked by ${name} ${count} times`);
        } else {
            console.log('You have reached the limit');
        }
    };

    const handleClick4 = (e) => {
        if (e.target.textContent === 'Button pressed') {
            e.target.textContent = 'Click me';
            setShowImage(false);
        } else {
            e.target.textContent = 'Button pressed';
            setShowImage(true);
        }

        console.log(e);
    };

    return (
        <>
            <button onClick={handleClick1}>Click me 1</button>
            <button onClick={() => handleClick2('Raccoon')}>Click me 2</button>
            <button onClick={() => handleClick3('Raccoon')}>Click me 3</button>
            <button onClick={(e) => handleClick4(e)}>Click me 4</button>
            {showImage && <img className='image1' src={images1} alt="" />}
            {showImage && <img className='image2' src={images2} alt="" />}
        </>
    );
}

export default Button;
