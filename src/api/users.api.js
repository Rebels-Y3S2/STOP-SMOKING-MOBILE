import apiInstance from "./apiInstance";

// Add reminder to database api
const addUser = (data) => apiInstance.post(`/users`, data);

export const userRequests = {
    addUser,
}