import axios from 'axios';
import appConfig from '@/configs/app.config'; // Assuming you have this config for API prefix

// Set the base URL to point to your backend API
const API_BASE_URL = 'http://localhost:8080'; // Replace with your backend URL
// const API_BASE_URL = 'https://elstar-dev.onrender.com'; // Assuming backend is running on localhost:1024
const { apiPrefix } = appConfig; // If you have an API prefix like '/api'

// Get All Estimates API Call
export async function getAllEstimates(data: any) {
    try {
        const response = await axios.get(`${API_BASE_URL}${apiPrefix}/dealer/get-all-estimates`);
        return response.data; // Handle response (e.g., token, user data)
    } catch (error: any) {
        console.error('Get-All-Estimates error', error);
        throw error.response?.data || 'Error in getting all dealers';
    }
}


// Get All Estimates API Call
export async function getAllCountAccToStatus() {
    try {
        const response = await axios.get(`${API_BASE_URL}${apiPrefix}/dealer/workflow/get-all-counts`);
        return response.data; // Handle response (e.g., token, user data)
    } catch (error: any) {
        console.error('Get-All-Estimates error', error);
        throw error.response?.data || 'Error in getting all dealers';
    }
}
