import React, { useState } from 'react';
import ClockInForm from './components/ClockInForm';
import LocationTracker from './components/LocationTracker';

const App: React.FC = () => {
    const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);

    const handleLocationUpdate = (newLocation: { latitude: number; longitude: number }) => {
        setLocation(newLocation);
    };

    return (
        <div>
            <h1>Clock In App</h1>
            <LocationTracker onLocationUpdate={handleLocationUpdate} />
            <ClockInForm location={location} />
        </div>
    );
};

export default App;