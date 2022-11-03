import axios from "axios";
import apiInstance from "./apiInstance";

export const addChallenge = (data) => apiInstance.post(`challenges`, data);