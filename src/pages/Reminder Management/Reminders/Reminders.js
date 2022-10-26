import { Text } from '@react-native-material/core'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Card from '../../../components/Card/Card'
import { styles } from './RemindersStyles'

export default function Reminders() {
  const navigation = useNavigation()
  const [reminder, setReminder] = useState({
    reminderTitle:'Reminder 01',
    startDate:'12/10/2022',
    endDate:'18/10/2022',
    customQuote:'',
    challenge:'',
    diary:''
  })
  return (
    <View>
        <Card 
          title={reminder.reminderTitle}
          children={
            <>
              <View>
                  <Text style={styles.lable}>From :{reminder.startDate}</Text>
                  <Text style={styles.lable}>To     :{reminder.endDate}</Text>
              </View>
            </>
          }
        />
        <MaterialIcons name='add-circle' size={60} style={styles.icon}  onPress={() => navigation.navigate('CreateReminder')}/>
    </View>
  );
}


