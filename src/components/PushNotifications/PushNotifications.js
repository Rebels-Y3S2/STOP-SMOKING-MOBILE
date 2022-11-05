import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import storage from "@react-native-async-storage/async-storage";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { fetchReminder } from '../../api/reminder.api';
import {CommonConstants} from '../../util/Constants/CommonConstants';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true
  })
});

export default function PushNotifications(props) {
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

  const getReminderDetails = () =>{
    fetchReminder(props.identifier)
    .then((res) =>{
      setReminder(res.data.data);
      setChallengeName(res.data.data.challenge.name);
      setDiaryTitle(res.data.data.diary.title);
    }).catch((error) =>{
      console.log(error);
    })
  }
  const stopNotification = async() =>{
    await Notifications.dismissAllNotificationsAsync();
  }



  const onClick = async () => {
    console.log(challengeName, diaryTitle)
    getReminderDetails(props.identifier)
    let currentDay = new Date().getDay();
    let currentMonth = new Date().getMonth() + 1;
    let currentYear = new Date().getFullYear();
    console.log(reminder.startDate)
    let currentDate = currentDay + '/' + currentMonth + '/' + currentYear;
    console.log(currentDate)
    if(reminder.startDate <= currentDate && reminder.endDate >= currentDate){
      await Notifications.dismissAllNotificationsAsync();
      await Notifications.scheduleNotificationAsync({
        identifier:props.identifier,
        content:{
          title:props.title,
          body: challengeName && diaryTitle 
          ? props.customQuote + ' ' + "Now lets focus on the challenge :" +  challengeName + " and also " + "Lets keep writing on the diary :" + diaryTitle 
          : challengeName
              ? props.customQuote + ' ' + "Now lets focus on the challenge :" + challengeName
              : diaryTitle  
                ? props.customQuote + ' ' + "Lets keep writing on the diary :" + diaryTitle 
                : props.customQuote
        },
        trigger: {
          channelId:props.identifier,
          hour:parseInt(props.startTime.split(":")[0]),
          minute:parseInt(props.startTime.split(":")[1]),
          repeats:true
        }
      });
    }else{
      console.log("not good")
      await Notifications.cancelScheduledNotificationAsync(props.identifier)
    }
  }
  
  return (
        <MaterialIcons 
          name={CommonConstants.NOTIFICATION_MATERIAL_ICON} 
          size={30} 
          onPress={onClick}
        />
  );
}
