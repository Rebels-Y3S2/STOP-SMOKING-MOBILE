import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackNavigator, DiaryStackNavigator, RemindersStackNavigator, ChallengesStackNavigator } from "./StackNavigator.js";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTranslation } from 'react-i18next';
import { CommonConstants } from "../util/Constants/CommonConstants.js";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { t } = useTranslation();
    return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === t(CommonConstants.HOME)) {
                    iconName = focused
                    ? 'home'
                    : 'home';
                } else if (route.name === t(CommonConstants.CHALLENGES)) {
                    iconName = focused ? 'tour' : 'tour';
                } else if (route.name === t(CommonConstants.REMINDERS)) {
                    iconName = focused ? 'alarm' : 'alarm';
                } else if (route.name === t(CommonConstants.DIARY)) {
                    iconName = focused ? 'assignment' : 'assignment';
                }
                return <MaterialIcons name={iconName} size={30} color={color} />;
                },
                headerShown: false,
                tabBarActiveTintColor: '#1658CD',
                tabBarInactiveTintColor: '#7B8BA2',
        })}
      >
        <Tab.Screen name={t(CommonConstants.HOME)} component={HomeStackNavigator} />
        <Tab.Screen name={t(CommonConstants.CHALLENGES)} component={ChallengesStackNavigator} />
        <Tab.Screen name={t(CommonConstants.REMINDERS)} component={RemindersStackNavigator} />
        <Tab.Screen name={t(CommonConstants.DIARY)} component={DiaryStackNavigator} />
      </Tab.Navigator>
    );
};
export default BottomTabNavigator;