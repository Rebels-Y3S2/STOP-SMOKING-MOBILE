import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import CreateReminder from "../pages/Reminder Management/Create Reminder/CreateReminder";
import Reminders from "../pages/Reminder Management/Reminders/Reminders";
import UpdateReminder from "../pages/Reminder Management/Update Reminder/UpdateReminder";

const Stack = createStackNavigator();

function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
}
  
function ChallengesScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Challenges!</Text>
      </View>
    );
}

function DiaryScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Diary!</Text>
      </View>
    );
}

const HomeStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Home" component={HomeScreen} options={getNavigatorStyles('Home')}  />
        {/* <Stack.Screen name="" component={} /> */}
      </Stack.Navigator>
    );
}

const ChallengesStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Challenges" component={ChallengesScreen} options={getNavigatorStyles('Challenges')}  />
        {/* <Stack.Screen name="" component={} /> */}
      </Stack.Navigator>
    );
}

const RemindersStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Reminders" component={Reminders} options={getNavigatorStyles('Reminders')}  />
        <Stack.Screen name="CreateReminder" component={CreateReminder} options={getNavigatorStyles('Create Reminder')}/>
        <Stack.Screen name="UpdateReminder" component={UpdateReminder} options={getNavigatorStyles('Edit Reminder')}/>
      </Stack.Navigator>
    );
}

const DiaryStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Diary" component={DiaryScreen} options={getNavigatorStyles('Diary')}  />
        {/* <Stack.Screen name="" component={} /> */}
      </Stack.Navigator>
    );
}

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="BottomTabBar" component={BottomTabBar} />
        </Stack.Navigator>
    );
}

export { MainStackNavigator, HomeStackNavigator, ChallengesStackNavigator, RemindersStackNavigator, DiaryStackNavigator};

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