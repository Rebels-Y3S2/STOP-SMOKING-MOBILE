import axios from "axios";
import apiInstance from "./apiInstance";

export const addChallenge = (data) => {
    console.log('add challenge');
    return apiInstance.post(`/challenges`, data);
}
export const getChallenges = (userId) => {
    console.log('get challenges');
    return apiInstance.get(`/challenges/users/${userId}`);
} 
export const getChallenge = (challengeId) => {
    console.log('get challenge by id');
    return apiInstance.get(`/challenges/${challengeId}`);
} 
export const startChallenge = (challengeId) => {
    console.log('start challenge')
    return apiInstance.put(`/challenges/${challengeId}/start`);
} 
export const deleteChallenge = (challengeId) => {
    console.log('delete challenge')
    return apiInstance.delete(`/challenges/${challengeId}`);
}
export const editChallenge = (challengeId, challengeObj) => {
    console.log('edit challenge')
    return apiInstance.put(`/challenges/${challengeId}`, challengeObj);
}