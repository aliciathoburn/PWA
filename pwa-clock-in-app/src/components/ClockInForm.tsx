import React, { useState } from 'react';
import { sendClockInData } from '../utils/api';
import LocationTracker from './LocationTracker';

const ClockInForm: React.FC = () => {
    const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleClockIn = async (event: React.FormEvent) => {
        event.preventDefault();
        if (location) {
            const currentTime = new Date().toISOString();
            try {
                await sendClockInData({ time: currentTime, location });
                alert('Clock-in successful!');
            } catch (err) {
                setError('Failed to clock in. Please try again.');
            }
        } else {
            setError('Location is not available. Please enable location services.');
        }
    };

    return (
        <div>
            <h1>Clock In</h1>
            <form onSubmit={handleClockIn}>
                <button type="submit">Clock In</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
            <LocationTracker setLocation={setLocation} />
        </div>
    );
};

export default ClockInForm;