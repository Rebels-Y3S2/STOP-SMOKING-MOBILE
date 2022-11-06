import apiInstance from "./apiInstance";

// Add User to database api
const addUser = (data) => apiInstance.post(`/users/register`, data);

// User Login
const loginUser = (data) => apiInstance.post(`/users/login`, data);

//  Update user details
const updateUser = (id, data) => apiInstance.put(`/users/${id}`, data);

export const userRequests = {
    addUser,
    loginUser,
    updateUser,
}