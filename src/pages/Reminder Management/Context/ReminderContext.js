import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import storage from "@react-native-async-storage/async-storage";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { fetchReminder } from '../../../api/reminder.api';
import { CommonConstants } from '../../../util/Constants/CommonConstants';

export const NotificationContext = React.createContext();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true
  })
});


export default function NotificationProvider({children}) {

  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const [reminder, setReminder] = useState({})
  const [challengeName, setChallengeName] = useState('');
  const [diaryTitle, setDiaryTitle] = useState('');

  useEffect(() => {
    const getPermission = async () => {
      if (Constants.isDevice) {
          const { status: existingStatus } = await Notifications.getPermissionsAsync();
          let finalStatus = existingStatus;
          if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
          }
          if (finalStatus !== 'granted') {
            alert('Enable push notifications to use the app!');
            await storage.setItem('expopushtoken', "");
            return;
          }
          const token = (await Notifications.getExpoPushTokenAsync()).data;
          await storage.setItem('expopushtoken', token)
      } else {
        alert('Must use physical device for Push Notifications');
      }

        if (Platform.OS === 'android') {
          Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
          });
        }
    }

    getPermission();

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {});

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const stopNotification = async() =>{
    await Notifications.dismissAllNotificationsAsync();
  }

  const notificationHandler = async (reminderObj) => {
      let currentDay = new Date().getDate();
      let currentMonth = new Date().getMonth() + 1;
      let currentYear = new Date().getFullYear();
      let currentDate = currentDay + '/' + currentMonth + '/' + currentYear;
      console.log(currentDate)
      console.log(reminderObj.startDate)
      console.log(reminderObj.endDate)
      if(reminderObj.startDate <= currentDate && reminderObj.endDate >= currentDate){
        await Notifications.dismissAllNotificationsAsync();
        await Notifications.scheduleNotificationAsync({
          identifier:reminderObj._id,
          content:{
            title:reminderObj.reminderTitle,
            body: reminderObj.challengeName !== null && reminderObj.diaryTitle 
            ? reminderObj.customQuote + ' ' + "Now lets focus on the challenge :" +  challengeName + " and also " + "Lets keep writing on the diary :" + diaryTitle 
            : challengeName
                ? reminderObj.customQuote + ' ' + "Now lets focus on the challenge :" + challengeName
                : diaryTitle  
                  ? reminderObj.customQuote + ' ' + "Lets keep writing on the diary :" + diaryTitle 
                  : reminderObj.customQuote
          },
          trigger: {
            channelId:reminderObj._id,
            hour:parseInt(reminderObj.startTime.split(":")[0]),
            minute:parseInt(reminderObj.startTime.split(":")[1]),
            repeats:true
          }
        });
      }else{
        console.log("not good")
        await Notifications.cancelScheduledNotificationAsync(reminderObj._id)
      }
    }

      return (
        <NotificationContext.Provider value={notificationHandler}>
            {children}
        </NotificationContext.Provider>
      )
}