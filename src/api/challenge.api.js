import apiInstance from "./apiInstance";

export const addReminder = (data) => apiInstance.post(`/challenges`, data);