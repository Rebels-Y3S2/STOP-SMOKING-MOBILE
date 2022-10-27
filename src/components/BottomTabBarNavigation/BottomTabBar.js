import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ChallengesStackNavigator, DiaryStackNavigator, HomeStackNavigator, RemindersStackNavigator } from "../../navigation/stackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
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
        <Tab.Screen name="Home" component={HomeStackNavigator} />
        <Tab.Screen name="Challenges" component={ChallengesStackNavigator} />
        <Tab.Screen name="Reminders" component={RemindersStackNavigator} />
        <Tab.Screen name="Diary" component={DiaryStackNavigator} />
      </Tab.Navigator>
    );
};

export default BottomTabBar;
