import { Button, Text,} from '@react-native-material/core'
import React, { useState } from 'react'
import { View, ScrollView, TextInput  } from 'react-native'
import Datepicker from '../../../components/DatePicker/Datepicker.js'
import DropDown from '../../../components/DropDown/DropDown.js'
import CheckBox from 'expo-checkbox';
import BigHeaderBackground from '../../../components/HeaderBackground/HeaderBackground.js'
import PopupContainer from '../../../components/Contaner/PopupContainer.js'
import { styles } from './CreateReminderStyles.js'
import { addReminder } from '../../../api/reminder.api.js'
import { useNavigation } from '@react-navigation/native'

export default function CreateReminder() {
  const [reminderTitle, setReminderTitle] = useState('');
  const [sDate, setSDate] = useState('')
  const [eDate, setEDate] = useState('')
  const [sTime,setSTime] = useState(null)
  const [customQuote, setCustomQuote] = useState('');
  const [challenge, setChallenge] = useState('')
  const [diary, setDiary] = useState('')
  const [customQuoteCheck, setCustomQuoteCheck] = useState(false)
  const [challengeCheck, setChallengeCheck] = useState(false)
  const [diaryCheck, setDiaryCheck] = useState(false)
  const navigation = useNavigation()


  const data = [ // Will be replaced soon when challenge and diary API s are integrated
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

  const handlReminderTitle = (e) =>{
    setReminderTitle(e.nativeEvent.text)
  }

  const handleCustomQuote = (e) =>{
    setCustomQuote(e.nativeEvent.text)
  }
  

  const handleSubmit = () =>{
    const reminder = {
      userId:'635b10baf383232439911869', //Will be replaced once user auth is integrated
      reminderTitle:reminderTitle,
      startDate:sDate,
      endDate:eDate,
      startTime: sTime === null ? '' : sTime.split(' ')[0],
      customQuote:customQuote,
      challenge:challenge,
      diary:diary
    }
    addReminder(reminder)
    .then((res) =>{
      console.log(res.data)
    }).catch((error) =>{
      console.log(error)
    })
  }
 
  return (
    <View>
      <ScrollView>
        
        <BigHeaderBackground/>
        <PopupContainer  firstContainer>
          <TextInput variant="outlined" placeholder='Reminder Title' style={styles.input} onChange={handlReminderTitle}></TextInput>
          <Text variant='subtitle 2' style={styles.textLable}>Reminder Title</Text>
          
          <Datepicker
            setText={setSDate}
            lable='Start Date'
            mode='date' 
          />

          <Datepicker
            setText={setEDate} 
            lable='End Date' 
            mode='date'
          />

          <Datepicker
            setText={setSTime} 
            lable='Start Time'
            mode='time' 
          />

          <TextInput variant="outlined" placeholder='Custom Quote' editable={customQuoteCheck} onChange={handleCustomQuote} style={styles.input}></TextInput>
          <Text variant='subtitle 2' style={styles.textLable}>Custom Quote</Text>
          <CheckBox style={styles.checkbox}
            testID='quote'
            disabled={false}
            value={customQuoteCheck}
            onValueChange={(quoteChk) => setCustomQuoteCheck(quoteChk)}
          />

          <DropDown setValue={setChallenge} data={data} disable={challengeCheck}/>
          <Text variant='subtitle 2' style={styles.textLable}>Select Challenge</Text>
          <CheckBox style={styles.checkbox}
            testID='challenge'
            disabled={false}
            value={challengeCheck}
            onValueChange={(challengeChk) => setChallengeCheck(challengeChk)}
          />

          <DropDown setValue={setDiary} data={data} disable={diaryCheck}/>
          <Text variant='subtitle 2' style={styles.textLable}>Select Diary</Text>
          <CheckBox style={styles.checkbox}
            testID='diary'
            disabled={false}
            value={diaryCheck}
            onValueChange={(diaryChk) => setDiaryCheck(diaryChk)}
          />

          <Button title="Cancel" style={styles.button} onPress={() => navigation.goBack()} variant="outlined" color='#5B5B5B' />
          <Button title="Save" style={styles.button} onPress={handleSubmit} color="#1658CD" />
          <View style={{marginBottom:'-10%'}}></View>
        </PopupContainer>
        <View style={{marginBottom:'50%'}}></View>
      </ScrollView>
    </View>
  );
}


