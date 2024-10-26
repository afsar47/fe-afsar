import axios from 'axios';
import appConfig from '@/configs/app.config'; // Assuming you have this config for API prefix

// Set the base URL to point to your backend API
const API_BASE_URL = 'http://localhost:8080'; // Replace with your backend URL
// const API_BASE_URL = 'https://elstar-dev.onrender.com'; // Assuming backend is running on localhost:1024
const { apiPrefix } = appConfig; // If you have an API prefix like '/api'

// Sign-In API Call
export async function apiSignIn(data: any) {
    try {
        const response = await axios.post(`${API_BASE_URL}${apiPrefix}/user/sign-in`, data);
        return response.data; // Handle response (e.g., token, user data)
    } catch (error: any) {
        console.error('Sign-in error', error);
        throw error.response?.data || 'Error signing in';
    }
}

// Sign-Up API Call
export async function apiSignUp(data: any) {
    try {
        const response = await axios.post(`${API_BASE_URL}${apiPrefix}/sign-up`, data);
        return response.data; // Handle response (e.g., token, user data)
    } catch (error: any) {
        console.error('Sign-up error', error);
        throw error.response?.data || 'Error signing up';
    }
}   

// Sign-Out API Call
export async function apiSignOut() {
    try {
        const response = await axios.get(`${API_BASE_URL}${apiPrefix}/sign-out`);
        return response.data; // Handle response
    } catch (error: any) {
        console.error('Sign-out error', error);
        throw error.response?.data || 'Error signing out';
    }
}

// Forgot Password API Call
export async function apiForgotPassword(data: any) {
    try {
        const response = await axios.post(`${API_BASE_URL}${apiPrefix}/forgot-password`, data);
        return response.data; // Handle response
    } catch (error: any) {
        console.error('Forgot password error', error);
        throw error.response?.data || 'Error sending forgot password email';
    }
}

// Reset Password API Call
export async function apiResetPassword(data: any) {
    try {
        const response = await axios.post(`${API_BASE_URL}${apiPrefix}/reset-password`, data);
        return response.data; // Handle response
    } catch (error: any) {
        console.error('Reset password error', error);
        throw error.response?.data || 'Error resetting password';
    }
}
