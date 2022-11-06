import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userRequests } from "../api/users.api";

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const login = (email, password) => {
        setIsLoading(true);
        userRequests.loginUser(({email, password}))
            .then((res) => {
                console.log(res.data);
                let userInfo = res.data.userData;
                setUserInfo(userInfo);
                setUserToken(res.data.data);
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                AsyncStorage.setItem('userToken', res.data.data);
            })
            .catch((error) => {
                console.log(error)
            })

        setIsLoading(false);
    }

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userInfo');
        AsyncStorage.removeItem('userToken');
        setIsLoading(false);
    }

    const isLoggedIn = async () => {
        try {
            setIsLoading(true);
            let userInfo = await AsyncStorage.getItem('userInfo');
            let userToken = await AsyncStorage.getItem('userToken');
            userInfo = JSON.parse(userInfo);

            if(userInfo) {
                setUserToken(userToken);
                setUserInfo(userInfo);
            }

            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
        
    }

    useEffect(() => {
        isLoggedIn();
    }, [])

    return(
        <AuthContext.Provider value={{login, logout, isLoading, userToken, userInfo}}>
            {children}
        </AuthContext.Provider>
    );
}