import React from 'react';
import { recordClockOut } from '../utils/storage';
import { getCurrentLocation } from '../utils/geolocation';

const ClockOutButton = () => {
    const handleClockOut = async () => {
        const time = new Date().toLocaleString();
        const location = await getCurrentLocation();

        if (location) {
            console.log(`Clocked Out - Time: ${time}, Location: ${location}`);
            alert(`Clocked Out - Time: ${time}\nLocation: ${location}`);
            recordClockOut(time, location);
        } else {
            alert('Unable to retrieve location for clocking out.');
        }
    };

    return (
        <button onClick={handleClockOut}>
            Clock Out
        </button>
    );
};

export default ClockOutButton;