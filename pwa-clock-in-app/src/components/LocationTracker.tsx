import React, { useEffect, useState } from 'react';

const LocationTracker: React.FC<{ onLocationChange: (location: { latitude: number; longitude: number }) => void }> = ({ onLocationChange }) => {
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const handleSuccess = (position: GeolocationPosition) => {
            const { latitude, longitude } = position.coords;
            onLocationChange({ latitude, longitude });
        };

        const handleError = (error: GeolocationPositionError) => {
            setError(error.message);
        };

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
        } else {
            setError('Geolocation is not supported by this browser.');
        }
    }, [onLocationChange]);

    return (
        <div>
            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default LocationTracker;