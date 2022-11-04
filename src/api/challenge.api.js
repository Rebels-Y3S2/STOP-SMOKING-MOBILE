import axios from "axios";
import apiInstance from "./apiInstance";

export const addChallenge = (data) => apiInstance.post(`/challenges`, data);
export const getChallenges = (userId) => apiInstance.get(`/challenges/users/${userId}`);
export const getChallenge = (challengeId) => apiInstance.get(`/challenges/${challengeId}`);
export const startChallenge = (challengeId) => apiInstance.put(`/challenges/${challengeId}/start`);
export const deleteChallenge = (challengeId) => apiInstance.delete(`/challenges/${challengeId}`);
export const editChallenge = (challengeId, challengeObj) => apiInstance.put(`/challenges/${challengeId}`, challengeObj);