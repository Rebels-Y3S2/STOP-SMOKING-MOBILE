/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Test from './src/pages/test';
import Home from './src/pages/home';
import { Button, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Test"
          component={Test}
          options={getNavigatorStyles('Welcome')}
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={getNavigatorStyles('Home')} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function getNavigatorStyles(componentName) {
  return {
    title: componentName,
    headerStyle: {
      backgroundColor: '#1658CD',
      borderColor: '#1658CD'
    },
    headerTitleStyle: {
      font: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '20px',
      lineHeight: '24px',
      letterSpacing: '0.15px',
      color: '#FFFFFF'
    }
  };
}


export default App;
