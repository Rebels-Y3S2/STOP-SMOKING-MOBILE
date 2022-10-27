/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet } from 'react-native'
import CreateReminder from './src/pages/Reminder Management/Create Reminder/CreateReminder';
import Reminders from './src/pages/Reminder Management/Reminders/Reminders';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UpdateReminder from './src/pages/Reminder Management/Update Reminder/UpdateReminder';
import { MainStackNavigator } from './src/navigation/stackNavigator';



function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const App = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function AppBar() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home';
              } else if (route.name === 'Challenges') {
                iconName = focused ? 'tour' : 'tour';
              } else if (route.name === 'Reminders') {
                iconName = focused ? 'alarm' : 'alarm';
              } else if (route.name === 'Diary') {
                iconName = focused ? 'assignment' : 'assignment';
              }
              return <MaterialIcons name={iconName} size={30} color={color} />;
            },
            headerShown: false,
            tabBarActiveTintColor: '#1658CD',
            tabBarInactiveTintColor: '#7B8BA2',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Challenges" component={SettingsScreen} />
        <Tab.Screen name="Reminders" component={Reminders} options={getNavigatorStyles('Reminders')}/>
        <Tab.Screen name="Diary" component={SettingsScreen} />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default App;
