/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState, useMemo} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator, TabNavigator } from './src/navigation/StackNavigator.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ActivityIndicator, View } from 'react-native';
import {AuthContext} from './src/pages/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {

  // const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(null);

  const initialLoginState = {
    isLoading: true,
    email: null,
    userToken: null,
  }

  const loginReducer = (prevState, action) => {
    switch(action.type) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false
        };
      case 'LOGIN': 
        return {
          ...prevState,
          email: action.email,
          userToken: action.token,
          isLoading: false
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          email: null,
          userToken: null,
          isLoading: false
        };
    } 
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async (email, password) => {
      // setUserToken('hgdhsgjdgs');
      // setIsLoading(false);
      let userToken;
      userToken = null;
      if(email == 'shivaani@gmail.com' && password == 'Jesus1234@') {
        try {
          userToken = 'fkjdshfjsdhf';
          await AsyncStorage.setItem('userToken', userToken);
        }catch (e){
          console.log(e);
        }
      }
      console.log('user token', userToken);
      const tokk = await AsyncStorage.getItem('userToken')
      console.log("tokk")
      console.log(tokk)
      dispatch({ type: 'LOGIN', email: email, token: userToken });
    },
    signOut: async () => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      }catch (e){
        console.log(e);
      }

      dispatch({ type: 'LOGOUT'});
    },
  }), []);

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken = null
      try {
        userToken = await AsyncStorage.getItem('userToken');
      }catch (e){
        console.log(e);
      }
      console.log('user token', userToken);
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken})
    }, 1000)
  }, []);

  if( loginState.isLoading ) {
    return(
      <View>
        <ActivityIndicator size="large" style={{flex:1, justifyContent: 'center', alignItems: 'center'}}/>
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <SafeAreaProvider>
      <NavigationContainer>
        {
          loginState.userToken == null 
          ?
          <MainStackNavigator />
          :
          <TabNavigator />
        }
      </NavigationContainer>
      </SafeAreaProvider>
    </AuthContext.Provider>
    
  );
};

export default App;
