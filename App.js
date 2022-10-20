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
 import Test from './src/pages/test';
 import Home from './src/pages/home';
import CreateReminder from './src/pages/Reminder Management/CreateReminder';
 
 const Stack = createNativeStackNavigator();
 
 const App = ()  => {
 
   return (
     <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen
         name="Test"
         component={Test}
         // options={{ title: 'Welcome' }}
       />
       <Stack.Screen name="Home" component={Home} />
       <Stack.Screen name="CreateReminder" component={CreateReminder}/>
     </Stack.Navigator>
   </NavigationContainer>
   );
 };
 
 export default App;
 