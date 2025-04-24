import axios from 'axios';

const API_URL = 'https://your-api-endpoint.com/api'; // Replace with your actual API endpoint

export const clockIn = async (time: string, location: { latitude: number; longitude: number }) => {
    try {
        const response = await axios.post(`${API_URL}/clock-in`, {
            time,
            location
        });
        return response.data;
    } catch (error) {
        console.error('Error clocking in:', error);
        throw error;
    }
};