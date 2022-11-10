import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/home.js";
import Splash from "../pages/Splash";
import BottomTabNavigator from "./TabNavigator";
import Reminders from "../pages/Reminder Management/Reminders/Reminders";
import CreateReminder from "../pages/Reminder Management/Create Reminder/CreateReminder";
import UpdateReminder from "../pages/Reminder Management/Update Reminder/UpdateReminder";
import DiaryRecords from "../pages/Diary Management/Records/DiaryRecords";
import Challenges from "../pages/Challenge Management/challengesList/Challenges";
import CreateChallenge from "../pages/Challenge Management/Create challenge/CreateChallenge.js";
import ViewProfile from "../pages/UserProfile/ViewProfile.js";
import UpdateProfile from "../pages/UserProfile/UpdateProfile.js";
import { CommonConstants } from "../util/Constants/CommonConstants.js";
import ChallengeOverview from "../pages/Challenge Management/challengeOverview/ChallengeOverview.js";
import ChallengeView from "../pages/Challenge Management/challengeView/ChallengeView.js";

import EditChallenge from "../pages/Challenge Management/editchallenge/EditChallenge.js";
import { useTranslation } from "react-i18next";
import { ReminderConstants } from "../util/Constants/ReminderConstants.js";
import UserLogin from "../pages/UserProfile/UserLogin";
import UserRegistration from "../pages/UserProfile/UserRegistration";
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { LocaleContext } from "../localization/LangProvider.js";
import { ChallengeConstants } from "../util/Constants/ChallengeConstants.js";


const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const HomeStackNavigator = () => {
  const { t } = useTranslation();
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={getNavigatorStylesHome(t(CommonConstants.HOME))}
      />
      <Stack.Screen
        name="ViewProfile"
        component={ViewProfile}
        options={getNavigatorStyles(t(CommonConstants.USER_PROFILE))}
      />
      <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={getNavigatorStyles(t(CommonConstants.EDIT_PROFILE))}
      />
    </Stack.Navigator>
  );
};

const ChallengesStackNavigator = () => {
  const { t } = useTranslation();
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name={CommonConstants.CHALLENGES_SCREEN_PATH}
        component={Challenges}
        options={getNavigatorStyles(t(CommonConstants.CHALLENGES))}
      />
      <Stack.Screen
        name={CommonConstants.CREATE_CHALLENGE_PATH}
        component={CreateChallenge}
        options={getNavigatorStyles(t(ChallengeConstants.CREATE_CHALLENGE))}
      />
      <Stack.Screen
        name={CommonConstants.CHALLENGE_OVERVIEW_PATH}
        component={ChallengeOverview}
        options={getNavigatorStyles(t(ChallengeConstants.CHALLENGE_OVERVIEW))}
      />
      <Stack.Screen
        name={CommonConstants.CHALLENGE_PROGRESS_PATH}
        component={ChallengeView}
        options={getNavigatorStyles(t(ChallengeConstants.CHALLENGE_PROGRESS))}
      />
      <Stack.Screen
        name={CommonConstants.CHALLENGE_EDIT_PATH}
        component={EditChallenge}
        options={getNavigatorStyles(ChallengeConstants.EDIT_CHALLENGE)}
      />
    </Stack.Navigator>
  );
};

const RemindersStackNavigator = () => {
  const { t } = useTranslation();
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name={CommonConstants.REMINDERS_PATH}
        component={Reminders}
        options={getNavigatorStyles(t(ReminderConstants.REMINDERS_TITLE))}
      />
      <Stack.Screen
        name={CommonConstants.CREATE_REMINDER_PATH}
        component={CreateReminder}
        options={getNavigatorStyles(t(ReminderConstants.CREATE_REMINDER_TITLE))}
      />
      <Stack.Screen
        name={CommonConstants.UPDATE_REMINDER_PATH}
        component={UpdateReminder}
        options={getNavigatorStyles(t(ReminderConstants.EDIT_REMINDER_TITLE))}
      />
    </Stack.Navigator>
  );
};

const DiaryStackNavigator = () => {
  const { t } = useTranslation();
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="DiaryScreen"
        component={DiaryRecords}
        options={getNavigatorStyles(t(CommonConstants.DIARY))}
      />
    </Stack.Navigator>
  );
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={UserLogin} />
      <Stack.Screen name="UserRegistration" component={UserRegistration} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TabNavigator" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};
export {
  HomeStackNavigator,
  DiaryStackNavigator,
  RemindersStackNavigator,
  ChallengesStackNavigator,
  MainStackNavigator,
  TabNavigator,
};

function getNavigatorStyles(componentName, headerR) {
  return {
    title: componentName,
    headerStyle: {
      backgroundColor: "#1658CD",
      borderColor: "#1658CD",
    },
    headerTitleStyle: {
      font: "Roboto",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: 20,
      lineHeight: "24px",
      letterSpacing: "0.15px",
      color: "#FFFFFF",
    },
  };
}
function getNavigatorStylesHome(componentName) {
  const { showLocaleModal, setShowLocaleModal } = useContext(LocaleContext);
  return {
    title: componentName,
    headerStyle: {
      backgroundColor: "#1658CD",
      borderColor: "#1658CD",
    },
    headerTitleStyle: {
      font: "Roboto",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: 20,
      lineHeight: "24px",
      letterSpacing: "0.15px",
      color: "#FFFFFF",
    },
    headerRight: () => (
      <IconButton
        color="#FFFFFF"
        onPress={() => setShowLocaleModal(true)}
        icon={(props) => <Icon name="menu" {...props} />}
      />
    ),
  };
}
