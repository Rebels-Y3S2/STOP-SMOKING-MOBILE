/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
// import { NavigationContainer } from '@react-navigation/native';
// import { MainStackNavigator } from './src/navigation/StackNavigator.js';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import "./src/localization/i18n";
import { AuthProvider } from "./src/pages/AuthContext";
import { AppNav } from "./src/navigation/AppNav";
import NotificationProvider from "./src/pages/Reminder Management/Context/ReminderContext";
import { MenuProvider } from "react-native-popup-menu";
import { LangProvider } from "./src/localization/LangProvider";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const App = () => {
  return (
    <AuthProvider>
          <LangProvider>
      <NotificationProvider>
        <MenuProvider>
     
          <AppNav />
          
        </MenuProvider>
      </NotificationProvider>
      </LangProvider>
    </AuthProvider>
  );
};

export default App;
