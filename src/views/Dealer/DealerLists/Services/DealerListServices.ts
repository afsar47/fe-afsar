import axios from "axios";
import appConfig from "@/configs/app.config";
// Set the base URL to point to your backend API
const API_BASE_URL = 'http://localhost:8080'; // Replace with your backend URL
// const API_BASE_URL = 'https://elstar-dev.onrender.com'; // Assuming backend is running on localhost:1024
const { apiPrefix } = appConfig; // If you have an API prefix like '/api'

export async function apiNewCustomer (data:any){
    try{
        const response = await axios.post(`${API_BASE_URL}${apiPrefix}/dealer/add-new-customer`,data);
        return response.data;
    }
    catch(error:any){
        if (error.response) {
            throw new Error(`Server Error: ${error.response.data.message || 'Error in saving Customer'}`);

        } else if (error.request) {
            // No response was received from the server
            throw new Error('Network Error: Unable to reach the server');
        } else {
            // Some other error
            throw new Error('Unexpected Error: ' + error.message);
        }

    }
}

export async function getAllVendors() {
    try {
        const response = await axios.get(`${API_BASE_URL}${apiPrefix}/dealer/get-all-vendors`);
        return response.data; // Handle response (e.g., token, user data)
    } catch (error: any) {
        console.error('Get-All-Vendors error', error);
        throw error.response?.data || 'Error in getting all vendors';
    }
}

export async function apiNewVendor (data:any){
    try{
        const response = await axios.post(`${API_BASE_URL}${apiPrefix}/dealer/add-new-vendor`,data);
        return response.data;
    }
    catch(error:any){
        if (error.response) {
            throw new Error(`Server Error: ${error.response.data.message || 'Error in saving Vendor'}`);

        } else if (error.request) {
            // No response was received from the server
            throw new Error('Network Error: Unable to reach the server');
        } else {
            // Some other error
            throw new Error('Unexpected Error: ' + error.message);
        }

    }
}
// export const apiSaveCustomer = async (data:any) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('Mock data saved:', data);
//             resolve({ message: 'Customer saved successfully' });
//         }, 1000); // Simulate a network delay
//     });
// };