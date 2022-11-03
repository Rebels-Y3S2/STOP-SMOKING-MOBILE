import apiInstance from "./apiInstance";

// Add reminder to database api
export const addReminder = (data) => apiInstance.post(`/reminders`, data);

// Fetch reminders relating to loged in user from database api
export const fetchReminders = (userId) => apiInstance.get(`/reminders/users/${userId}`);