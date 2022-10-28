import apiInstance from "./apiInstance";

// Add diary to database api
export const addDiary = (data) => apiInstance.post(`/diaries`, data);
export const fetchDiaryRecords = (userId, data) => apiInstance.get(`/diaries/records/${userId}`, data);
export const fetchDiaryRecordById = (id, data) => apiInstance.get(`/diaries/${id}`, data);
export const fetchAllRecMock = (data) => apiInstance.get(`/diaries/`, data);
export const editDiaryRecordById = (id, data) => apiInstance.get(`/diaries//${id}`, data);