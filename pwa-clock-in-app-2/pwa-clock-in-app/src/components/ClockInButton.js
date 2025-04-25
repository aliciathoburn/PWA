import React from 'react';
import { getCurrentLocation } from '../utils/geolocation';
import { saveClockInData } from '../utils/storage';

const ClockInButton = () => {
    const handleClockIn = async () => {
        const time = new Date().toLocaleString();
        const location = await getCurrentLocation();

        if (location) {
            const clockInData = {
                time,
                location,
            };
            saveClockInData(clockInData);
            alert(`Clocked In!\nTime: ${time}\nLocation: ${location}`);
        } else {
            alert('Unable to retrieve location.');
        }
    };

    return (
        <button onClick={handleClockIn}>
            Clock In
        </button>
    );
};

export default ClockInButton;