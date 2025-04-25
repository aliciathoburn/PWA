import React from 'react';

const StatusDisplay = ({ clockInData, clockOutData }) => {
    return (
        <div className="status-display">
            <h2>Clock In/Out Status</h2>
            {clockInData ? (
                <div>
                    <h3>Last Clock In</h3>
                    <p>Date & Time: {clockInData.dateTime}</p>
                    <p>Location: {clockInData.location}</p>
                </div>
            ) : (
                <p>No clock in recorded.</p>
            )}
            {clockOutData ? (
                <div>
                    <h3>Last Clock Out</h3>
                    <p>Date & Time: {clockOutData.dateTime}</p>
                    <p>Location: {clockOutData.location}</p>
                </div>
            ) : (
                <p>No clock out recorded.</p>
            )}
        </div>
    );
};

export default StatusDisplay;