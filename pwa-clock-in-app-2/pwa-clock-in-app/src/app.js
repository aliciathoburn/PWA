// src/app.js
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ClockInButton from './components/ClockInButton';
import ClockOutButton from './components/ClockOutButton';
import StatusDisplay from './components/StatusDisplay';
import { getStoredData, saveData } from './utils/storage';

const App = () => {
    const [status, setStatus] = useState(getStoredData() || { clockIn: null, clockOut: null });

    const handleClockIn = (time, location) => {
        const newStatus = { ...status, clockIn: { time, location } };
        setStatus(newStatus);
        saveData(newStatus);
    };

    const handleClockOut = (time, location) => {
        const newStatus = { ...status, clockOut: { time, location } };
        setStatus(newStatus);
        saveData(newStatus);
    };

    return (
        <div>
            <h1>PWA Clock In App</h1>
            <ClockInButton onClockIn={handleClockIn} />
            <ClockOutButton onClockOut={handleClockOut} />
            <StatusDisplay status={status} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));