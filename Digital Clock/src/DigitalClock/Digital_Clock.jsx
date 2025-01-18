import React, { useState, useEffect } from 'react';
import './Digital_Clock.css';

const DigitalClock = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12;

        return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)} ${meridiem}`;
    }

    function addZero(time) {
        return time < 10 ? `0${time}` : time;
    }

    return (
        <div className='digital-clock-container'>
            <div className='clock'>
                <span>{formatTime()}</span>
            </div>
        </div>
    );
};

export default DigitalClock;