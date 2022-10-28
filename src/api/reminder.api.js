import apiInstance from "./apiInstance";

// Add reminder to database api
export const addReminder = (data) => apiInstance.post(`/reminders`, data)