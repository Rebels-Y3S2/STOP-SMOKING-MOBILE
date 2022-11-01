import { HStack, Provider} from '@react-native-material/core'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { View, Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { fetchReminders } from '../../../api/reminder.api'
import Card from '../../../components/Card/Card'
import DialogBox from '../../../components/DialogBox/DialogBox'
import { styles } from './RemindersStyles'
import { useIsFocused } from '@react-navigation/native'
import PushNotifications from '../../../components/PushNotifications/PushNotifications'

export default function Reminders() {
  const isFocused = useIsFocused();
  const navigation = useNavigation()
  const userId = '635b10baf383232439911869' // Will be replaced soon when auth is implemented.
  const [show, setShow] = useState(false);
  const [reminderArr, setReminderArr] = useState([]);

  useEffect(() =>{
    if(isFocused){
      getReminderDetails()
    }
  }, [isFocused])

  const getReminderDetails = () =>{
    fetchReminders(userId)
    .then((res) =>{
      setReminderArr(res.data.data)
    }).catch((error) =>{
      console.log(error)
    })
  }

  return reminderArr ?(
    <View style={{position:"absolute", width:'100%', height:"100%"}}>
       <ScrollView>
      {
        reminderArr.map((row) =>(
          <View key={row._id}>
            <Card 
            title={row.reminderTitle}
            children={
              <>
                <View>
                  <HStack m={2} spacing={100} >
                    <Text style={styles.lable}>From :{row.startDate}</Text>
                    <HStack m={3} spacing={5}>
                      <MaterialIcons name='edit'size={30} onPress={() => navigation.navigate('UpdateReminder')}  />
                      <MaterialIcons name='delete'size={30} onPress={()=> setShow(true)}  />
                      <PushNotifications 
                        title={row.reminderTitle}
                        body={row.customQuote}
                        startTime={row.startTime}
                        identifier={row._id}/>
                    </HStack>
                  </HStack>
                    <Text style={styles.lable}>To     :{row.endDate}</Text>
                </View>
              </>
            }
          />
          </View>
        ))
      }
          </ScrollView>
      <MaterialIcons name='add-circle' size={60} style={styles.icon}  onPress={() => navigation.navigate('CreateReminder')}/>
          {
            show &&
            <Provider>
            <DialogBox 
              show={show} 
              setShow={setShow}
              title='Delete Reminder'
              message='Are you sure to delete the reminder'  
            />
            </Provider>
          }
          
    </View>

  ):(
    <View style={styles.message}>
        <Text>No reminders to display!</Text>
        <Text> Click on the plus icon to create a new reminder!</Text>
        <MaterialIcons name='add-circle' size={60} style={styles.icon}  onPress={() => navigation.navigate('CreateReminder')}/>
        
    </View>
  )
}


