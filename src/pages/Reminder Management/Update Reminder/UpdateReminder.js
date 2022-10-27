import { Button, Text, TextInput } from '@react-native-material/core'
import React, { useState } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Datepicker from '../../../components/DatePicker/Datepicker.js'
import DropDown from '../../../components/DropDown/DropDown.js'
import CheckBox from 'expo-checkbox';
import BigHeaderBackground from '../../../components/HeaderBackground/HeaderBackground.js'
import PopupContainer from '../../../components/Contaner/PopupContainer.js'
import { styles } from './UpdateReminderStyles.js'

export default function UpdateReminder() {
  const [reminder, setReminder] = useState({
    reminderTitle:'',
    startDate:'',
    endDate:'',
    customQuote:'',
    challenge:'',
    diary:''
  })
  const handleChange = (e) =>{
    setReminder({...reminder, [e.target.name]: e.target.value})
  }
  const [sDate, setSDate] = useState('')
  const [eDate, setEDate] = useState('')
  const [sTime,setSTime] = useState('')
  const [customQuoteCheck, setCustomQuoteCheck] = useState(false)
  const [challengeCheck, setChallengeCheck] = useState(false)
  const [diaryCheck, setDiaryCheck] = useState(false)

  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];
  const [isEditable, setIsEditable] = useState(false);
  
  return (
    <View>
      <ScrollView>
        <BigHeaderBackground/>
        <PopupContainer  firstContainer>
          <TextInput variant="outlined" placeholder='Reminder Title' style={{ margin: 16 }} onChange={handleChange}></TextInput>
          <Text variant='subtitle 2' style={styles.textLable}>Enter new Reminder Title</Text>
          
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

          <TextInput variant="outlined" placeholder='Custom Quote' style={{ margin: 16 }} editable={customQuoteCheck}></TextInput>
          <Text variant='subtitle 2' style={styles.textLable}>Custom Quote</Text>
          <CheckBox style={styles.checkbox}
            testID='quote'
            disabled={false}
            value={customQuoteCheck}
            onValueChange={(quoteChk) => setCustomQuoteCheck(quoteChk)}
          />

          <DropDown data={data} disable={challengeCheck}/>
          <Text variant='subtitle 2' style={styles.textLable}>Select Challenge</Text>
          <CheckBox style={styles.checkbox}
            testID='challenge'
            disabled={false}
            value={challengeCheck}
            onValueChange={(challengeChk) => setChallengeCheck(challengeChk)}
          />

          <DropDown data={data} disable={diaryCheck}/>
          <Text variant='subtitle 2' style={styles.textLable}>Select Diary</Text>
          <CheckBox style={styles.checkbox}
            testID='diary'
            disabled={false}
            value={diaryCheck}
            onValueChange={(diaryChk) => setDiaryCheck(diaryChk)}
          />

          <Button title="Cancel" style={styles.button} variant="outlined" color='#5B5B5B' />
          <Button title="Edit" style={styles.button} color="#1658CD" />
          <View style={{marginTop:'5%'}} />
        </PopupContainer>
        <View style={{marginBottom:'20%'}}></View>
      </ScrollView>
    </View>
  );
}


