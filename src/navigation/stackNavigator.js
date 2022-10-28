import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../pages/home.js";
import Diary from "../pages/Diary";
import Splash from "../pages/Splash";
import BottomTabNavigator from "./TabNavigator";
import Reminders from "../pages/Reminder Management/Reminders/Reminders";
import CreateReminder from "../pages/Reminder Management/Create Reminder/CreateReminder";
import UpdateReminder from "../pages/Reminder Management/Update Reminder/UpdateReminder";
import DiaryRecords from "../pages/Diary Management/Records/DiaryRecords";
import Challenges from "../pages/Challenge Management/challengesList/Challenges";

const Stack = createNativeStackNavigator();
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="HomeScreen" component={Home} options={getNavigatorStyles('Home')} />
    </Stack.Navigator>
  );
}

const ChallengesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="ChallengesScreen" component={Challenges} options={getNavigatorStyles('Challenges')} />
    </Stack.Navigator>
  );
}

const RemindersStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="RemindersScreen" component={Reminders} options={getNavigatorStyles('Reminders')} />
      <Stack.Screen name="CreateReminder" component={CreateReminder} options={getNavigatorStyles('Create Reminder')} />
      <Stack.Screen name="UpdateReminder" component={UpdateReminder} options={getNavigatorStyles('Edit Reminder')} />
    </Stack.Navigator>
  );
}

const DiaryStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="DiaryScreen" component={DiaryRecords} options={getNavigatorStyles('Diary')} />
    </Stack.Navigator>
  );
}

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="TabNavigator" component={BottomTabNavigator} />
        </Stack.Navigator>
    );
}
export { HomeStackNavigator, DiaryStackNavigator, RemindersStackNavigator, ChallengesStackNavigator, MainStackNavigator };

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