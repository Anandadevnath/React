import React, { useState, useEffect } from 'react';

function Windowsize() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log('Event Listener Added');

        return () => {
            window.removeEventListener('resize', handleResize);
            console.log('Event Listener Removed');
        }
    }, []);

    useEffect(() => {
        document.title = `Width: ${width} Height: ${height}`;
        
    }, [width, height]);

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (
        <div>
            <h1>Window Size</h1>
            <h2>Width: {width}</h2>
            <h2>Height: {height}</h2>
        </div>
    );
}

export default Windowsize;