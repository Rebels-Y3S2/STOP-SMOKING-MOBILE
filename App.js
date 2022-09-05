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
import Test from './src/pages';
import { SafeAreaView } from 'react-native';

const Stack = createNativeStackNavigator();

const App = ()  => {

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Test"
        component={Test}
        options={{ title: 'Welcome' }}
      />
      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
