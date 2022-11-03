import apiInstance from "./apiInstance";

// Add reminder to database api
export const addReminder = (data) => apiInstance.post(`/reminders`, data);

// Fetch reminders relating to logged in user from database api
export const fetchReminders = (userId) => apiInstance.get(`/reminders/users/${userId}`);

// Fetch reminder details relating to the provided reminderId
export const fetchReminder = (id) => apiInstance.get(`/reminders/${id}`);

// Update reminder details relating to the provided reminderId and data
export const updateReminder = (id, data) => apiInstance.put(`/reminders/${id}`, data);

// Delete reminder details relating to the provided reminderId
export const deleteReminder = (id) => apiInstance.delete(`/reminders/${id}`);