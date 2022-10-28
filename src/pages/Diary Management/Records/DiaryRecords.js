import { HStack, Provider, Text } from '@react-native-material/core'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Card from '../../../components/Card/Card'
import DialogBox from '../../../components/DialogBox/DialogBox'
import { styles } from './styles'

export default function DiaryRecords() {
  const navigation = useNavigation()
  const [show, setShow] = useState(false);
  const [reminder, setReminder] = useState({
    reminderTitle:'Reminder 01',
    startDate:'12/10/2022',
    endDate:'18/10/2022',
    customQuote:'',
    challenge:'',
    diary:''
  })
  const [reminderArr, setReminderArr] = useState([
    {    
      rid:1,
      reminderTitle:'Reminder 01',
      startDate:'12/10/2022',
      endDate:'18/10/2022',
      customQuote:'',
      challenge:'',
      diary:''
    }
    ,
    {   
      rid:2, 
      reminderTitle:'Reminder 02',
      startDate:'12/10/2022',
      endDate:'18/10/2022',
      customQuote:'',
      challenge:'',
      diary:''
    },
    {   
      rid:3, 
      reminderTitle:'Reminder 03',
      startDate:'12/10/2022',
      endDate:'18/10/2022',
      customQuote:'',
      challenge:'',
      diary:''
    },
    {   
      rid:3, 
      reminderTitle:'Reminder 03',
      startDate:'12/10/2022',
      endDate:'18/10/2022',
      customQuote:'',
      challenge:'',
      diary:''
    }
  ])
  return (
    <View style={{position:"absolute", width:'100%', height:"100%"}}>
      {
        reminderArr.map((row) =>(
          <>
            <Card 
            title={row.reminderTitle}
            children={
              <>
                <View>
                  <HStack m={2} spacing={100} >
                    <Text style={styles.lable}>From :{row.startDate}</Text>
                    <HStack m={2} spacing={5}>
                      <MaterialIcons name='edit'size={30} onPress={() => navigation.navigate('UpdateReminder')}  />
                      <MaterialIcons name='delete'size={30} onPress={()=> setShow(true)}  />
                    </HStack>
                  </HStack>
                    <Text style={styles.lable}>To     :{row.endDate}</Text>
                </View>
              </>
            }
          />
          </>
        ))
      }
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
  );
}


