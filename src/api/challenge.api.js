import axios from "axios";
import apiInstance from "./apiInstance";

export const addChallenge = (data) => apiInstance.post(`/challenges`, data);
export const getChallenges = (userId) => apiInstance.get(`/challenges/users/${userId}`);
export const getChallenge = (challengeId) => apiInstance.get(`/challenges/${challengeId}`);