/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { MainStackNavigator } from './src/navigation/StackNavigator.js';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import './src/localization/i18n';
import {AuthProvider} from './src/pages/AuthContext';
import {AppNav} from './src/navigation/AppNav';

const App = () => {

  return (
    <AuthProvider>
      <AppNav/>
    </AuthProvider> 
  );
};

export default App;