import { HStack, Provider} from '@react-native-material/core'
import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { useEffect } from 'react'
import { View, Text, FlatList, Alert} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { deleteReminder, fetchReminders } from '../../../api/reminder.api'
import Card from '../../../components/Card/Card'
import DialogBox from '../../../components/DialogBox/DialogBox'
import { styles } from './RemindersStyles'
import { useIsFocused } from '@react-navigation/native'
import PushNotifications from '../../../components/PushNotifications/PushNotifications'
import {CommonConstants} from '../../../util/Constants/CommonConstants'
import { ReminderConstants } from '../../../util/Constants/ReminderConstants'
import { RefreshControl } from 'react-native'

export default function Reminders({route}) {
  // Navigation
  const navigation = useNavigation()

  // Reminder related data
  const isFocused = useIsFocused();
  const userId = '635b10baf383232439911869' // Will be replaced soon when auth is implemented.
  const [show, setShow] = useState(false);
  const [reminderArray, setReminderArray] = useState([]);
  const [deleteId, setDeleteId] = useState();
  const [refreshing, setRefreshing] = useState(false);

  // if route params are there alert will trigger
  if(route.params){
    if(route.params.type === CommonConstants.CREATE && route.params.success === true){
      Alert.alert(CommonConstants.CREATE_SUCCESS_ALERT_TITLE, route.params.title)
      route.params.success = false
    }else if(route.params.type === CommonConstants.UPDATE && route.params.success === true) {
      Alert.alert(CommonConstants.UPDATE_SUCCESS_ALERT_TITLE, route.params.title)
      route.params.success = false
    } 
  }

  /**
   * Sets the refreshing values
   */
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getReminderDetails()    
  }, []);
    
  /**
   * Called when the screen is loaded, and modified to call when screen gets focused
   */
  useEffect(() =>{
    if(isFocused){
      getReminderDetails()
    }    
  }, [isFocused])

  /**
   * Fetches the reminder details relating to the userId
   */
  const getReminderDetails = () =>{
    fetchReminders(userId)
    .then((res) =>{
      setReminderArray(res.data.data)
      setRefreshing(false)
    }).catch((error) =>{
      console.log(error)
    })
  }

  /**
   * Sets the reminderId that is sent to the parameter as the delete ID 
   * @param {*} reminderId 
   */
  const handleDeleteId = (reminderId) =>{
    setDeleteId(reminderId)
    setShow(true);
  }

  /**
   * Delete the reminder details relating to the deleteId passed in to the parameters
   * deleteReminder(deleteId) API is called
   */
  const handleDelete = () =>{
    deleteReminder(deleteId)
    .then((res) =>{
      console.log(res.data);
      getReminderDetails(userId)
    }).catch((error)=>{
      console.log(error);
    })
  }

  return reminderArray ?(
    <>
      <FlatList
        data={reminderArray}
        refreshControl={ 
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        renderItem={({ item }) => 
        <Card 
          title={item.reminderTitle}
          children={
            <View>
              <HStack m={2} spacing={100} >
                <Text style={styles.lable}>From :{item.startDate}</Text>
                <HStack m={3} spacing={5}>
                  <MaterialIcons 
                    name={CommonConstants.EDIT_MATERIAL_ICON} 
                    size={30} 
                    onPress={() => navigation.navigate(CommonConstants.UPDATE_REMINDER_PATH, {reminderId: item._id})} 
                  />
                  <MaterialIcons 
                    name={CommonConstants.DELETE_MATERIAL_ICON} 
                    size={30} 
                    onPress={()=> handleDeleteId(item._id)}  
                  />
                  <PushNotifications 
                    title={item.reminderTitle}
                    body={item.customQuote}
                    startTime={item.startTime}
                    identifier={item._id}/>
                </HStack>
              </HStack>
                <Text style={styles.lable}>To     :{item.endDate}</Text>
            </View>
          }
        />
        }
        keyExtractor={(item) => item._id}
      />
      <MaterialIcons 
        name={CommonConstants.ADD_MATERIAL_ICON} 
        size={60} 
        style={styles.icon}  
        onPress={() => navigation.navigate(CommonConstants.CREATE_REMINDER_PATH)}
      />
      {
        show &&
        <Provider>
        <DialogBox 
          show={show} 
          setShow={setShow}
          id={deleteId}
          title={ReminderConstants.DELETE_REMINDER_TITLE}
          message={ReminderConstants.DELETE_REMINDER_CONFIRMATION} 
          handleAction={handleDelete}
        />
        </Provider>
      }  
    </>
  ):(
    <View style={styles.message}>
        <Text>{ReminderConstants.NO_REMINDERS}</Text>
        <Text>{ReminderConstants.ADD_FIRST_REMINDER}</Text>
        <MaterialIcons 
          name={CommonConstants.ADD_MATERIAL_ICON} 
          size={60} 
          style={styles.icon}  
          onPress={() => navigation.navigate(CommonConstants.CREATE_REMINDER_PATH)}
        />
    </View>
  )
}


