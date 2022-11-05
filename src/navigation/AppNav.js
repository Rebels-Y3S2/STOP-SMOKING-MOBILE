import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator, TabNavigator } from './StackNavigator.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ActivityIndicator, View } from 'react-native';
import {AuthContext} from '../pages/AuthContext';

export const AppNav = () => {

    const {isLoading, userToken} = useContext(AuthContext);

    if(isLoading) {
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large"/>
        </View>
    }

    return(
        <SafeAreaProvider>
        <NavigationContainer>
            {
                userToken == null 
                ?
                <MainStackNavigator />
                :
                <TabNavigator/>
            }
            
        </NavigationContainer>
      </SafeAreaProvider>
    );
}