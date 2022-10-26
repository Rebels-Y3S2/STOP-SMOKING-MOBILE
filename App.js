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
import CreateReminder from './src/pages/Reminder Management/Create Reminder/CreateReminder';
import AppFooter from './src/components/AppFooter/AppFooter';
import Reminders from './src/pages/Reminder Management/Reminders/Reminders';

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
        <Stack.Screen 
          name="CreateReminder" 
          component={CreateReminder}
          options={getNavigatorStyles('Create Reminder')} />
        <Stack.Screen 
          name="Reminders" 
          component={Reminders}
          options={getNavigatorStyles('Reminders')} />
      </Stack.Navigator>
      <AppFooter/>
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
      fontSize: 20,
      lineHeight: '24px',
      letterSpacing: '0.15px',
      color: '#FFFFFF'
    }
  };
}


export default App;
