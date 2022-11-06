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
import ViewProfile from "../pages/UserProfile/ViewProfile.js";
import UpdateProfile from "../pages/UserProfile/UpdateProfile.js";
import { CommonConstants } from "../util/Constants/CommonConstants.js";
import UserLogin from "../pages/UserProfile/UserLogin";
import UserRegistration from "../pages/UserProfile/UserRegistration";

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
      <Stack.Screen name="ViewProfile" component={ViewProfile} options={getNavigatorStyles('User Profile')} />
      <Stack.Screen name="UpdateProfile" component={UpdateProfile} options={getNavigatorStyles('Edit Profile')} />
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
      <Stack.Screen name={CommonConstants.REMINDERS_PATH} component={Reminders} options={getNavigatorStyles('Reminders')} />
      <Stack.Screen name={CommonConstants.CREATE_REMINDER_PATH} component={CreateReminder} options={getNavigatorStyles('Create Reminder')} />
      <Stack.Screen name={CommonConstants.UPDATE_REMINDER_PATH} component={UpdateReminder} options={getNavigatorStyles('Edit Reminder')} />
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
          <Stack.Screen name="Login" component={UserLogin}/>
          <Stack.Screen name="UserRegistration" component={UserRegistration}/>
        </Stack.Navigator>
    );
}

const TabNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabNavigator" component={BottomTabNavigator} />
    </Stack.Navigator>
);
}
export { HomeStackNavigator, DiaryStackNavigator, RemindersStackNavigator, ChallengesStackNavigator, MainStackNavigator, TabNavigator };

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