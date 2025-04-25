export const saveClockData = (type, data) => {
    const clockData = JSON.parse(localStorage.getItem('clockData')) || [];
    clockData.push({ type, ...data });
    localStorage.setItem('clockData', JSON.stringify(clockData));
};

export const getClockData = () => {
    return JSON.parse(localStorage.getItem('clockData')) || [];
};

export const clearClockData = () => {
    localStorage.removeItem('clockData');
};