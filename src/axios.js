// src/axios.js

import axios from 'axios';

// Create an instance of axios with custom configurations
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your JSON Server base URL
  timeout: 10000, // Request timeout
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers you need, like authorization tokens, etc.
  },
});

// Optionally, you can add interceptors for request or response handling
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify request config before sending
    // For example, adding authorization token
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Handle successful responses
    return response;
  },
  (error) => {
    // Handle errors from responses
    return Promise.reject(error);
  }
);

export default axiosInstance;
