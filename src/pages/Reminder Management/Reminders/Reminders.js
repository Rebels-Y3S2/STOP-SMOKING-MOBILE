import { HStack, Provider} from '@react-native-material/core'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { View, Text, FlatList} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { deleteReminder, fetchReminders } from '../../../api/reminder.api'
import Card from '../../../components/Card/Card'
import DialogBox from '../../../components/DialogBox/DialogBox'
import { styles } from './RemindersStyles'
import { useIsFocused } from '@react-navigation/native'
import PushNotifications from '../../../components/PushNotifications/PushNotifications'
import CommonConstants from '../../../util/CommonConstants'

export default function Reminders() {
  const isFocused = useIsFocused();
  const navigation = useNavigation()
  const userId = '635b10baf383232439911869' // Will be replaced soon when auth is implemented.
  const [show, setShow] = useState(false);
  const [reminderArray, setReminderArray] = useState([]);
  const [deleteId, setDeleteId] = useState();

  useEffect(() =>{
    if(isFocused){
      getReminderDetails()
    }
  }, [isFocused])

  const getReminderDetails = () =>{
    fetchReminders(userId)
    .then((res) =>{
      setReminderArray(res.data.data)
    }).catch((error) =>{
      console.log(error)
    })
  }

  const handleDeleteId = (id) =>{
    setDeleteId(id)
    setShow(true);
  }

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
                    onPress={() => navigation.navigate(CommonConstants.UPDATE_REMINDER_PATH)} 
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
          title={CommonConstants.DELETE_REMINDER_TITLE}
          message={CommonConstants.DELETE_REMINDER_CONFIRMATION} 
          handleAction={handleDelete}
        />
        </Provider>
      }
          
    </>

  ):(
    <View style={styles.message}>
        <Text>No reminders to display!</Text>
        <Text> Click on the plus icon to create a new reminder!</Text>
        <MaterialIcons 
          name={CommonConstants.ADD_MATERIAL_ICON} 
          size={60} 
          style={styles.icon}  
          onPress={() => navigation.navigate(CommonConstants.CREATE_REMINDER_PATH)}
        />
    </View>
  )
}


