import { Button, Text } from '@react-native-material/core'
import React, { useEffect, useState } from 'react'
import { View, ScrollView, TextInput } from 'react-native'
import Datepicker from '../../../components/DatePicker/Datepicker.js'
import DropDown from '../../../components/DropDown/DropDown.js'
import CheckBox from 'expo-checkbox';
import BigHeaderBackground from '../../../components/HeaderBackground/HeaderBackground.js'
import PopupContainer from '../../../components/Contaner/PopupContainer.js'
import { styles } from './UpdateReminderStyles.js'
import { fetchReminder, updateReminder } from '../../../api/reminder.api.js'
import { useNavigation } from '@react-navigation/native'
import { ReminderLables, ReminderTestID, ReminderTitles } from '../../../util/Constants/ReminderConstants.js'
import {CommonConstants, Colors } from '../../../util/Constants/CommonConstants.js'

export default function UpdateReminder({route}) {
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
  const {itemId} = route.params;

  const [reminder, setReminder] = useState({})

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

  useEffect(() =>{
    getReminderDetails()
  },[])
  
  const getReminderDetails = () =>{
    fetchReminder(itemId)
    .then((res) =>{
      setReminder(res.data.data)
    }).catch((error) =>{
      console.log(error);
    })
  }

  const handleSubmit = () =>{
    const newReminder = {
      userId:'635b10baf383232439911869', //Will be replaced once user auth is integrated
      reminderTitle:reminderTitle === '' ? reminder.reminderTitle : reminderTitle,
      startDate:sDate === '' ? reminder.startDate : sDate,
      endDate:eDate === '' ? reminder.endDate : eDate,
      startTime: sTime === null ? reminder.startTime : sTime.split(' ')[0],
      customQuote:customQuote === '' ? reminder.customQuote : customQuote,
      challenge:challenge === '' ? reminder.challenge : challenge,
      diary:diary === '' ? reminder.diary : diary
    }
    updateReminder(itemId, newReminder)
    .then((res) =>{
      console.log(res.data)
      navigation.navigate(CommonConstants.REMINDERS_PATH, 
        {
          title:ReminderTitles.REMINDER_EDIT_SUCCESS, 
          type:CommonConstants.UPDATE, success:true
        }
      )
    }).catch((error) =>{
      console.log(error)
    })
  }
  
  return (
    <View>
    <ScrollView>
      <BigHeaderBackground/>
      <PopupContainer  firstContainer>
        <TextInput 
          placeholder={ReminderLables.REMINDER_TITLE_LABLE} 
          style={styles.input} 
          defaultValue={reminder.reminderTitle} 
          onChange={handlReminderTitle} 
        />
        <Text variant='subtitle 2' style={styles.textLable}>{ReminderLables.REMINDER_TITLE_LABLE}</Text>
        
        <Datepicker
          setText={setSDate}
          lable={sDate === '' ? 'Starts on:  ' + reminder.startDate: ReminderLables.START_DATE_LABLE}
          mode={CommonConstants.DATE} 
        />

        <Datepicker
          setText={setEDate} 
          lable={eDate === '' ? 'Ends on:  ' + reminder.endDate : ReminderLables.END_DATE_LABLE} 
          mode={CommonConstants.DATE}
        />

        <Datepicker
          setText={setSTime} 
          lable={sTime === null ? 'Notifies at : ' + reminder.startTime + 'hrs' : ReminderLables.START_TIME_LABLE}
          mode={CommonConstants.TIME} 
        />

        <TextInput 
          placeholder={ReminderLables.CUSTOM_QUOTE_LABLE} 
          editable={customQuoteCheck} 
          onChange={handleCustomQuote} 
          style={styles.input}
          defaultValue={reminder.customQuote}
        />
        <Text variant='subtitle 2' style={styles.textLable}>{ReminderLables.CUSTOM_QUOTE_LABLE}</Text>
        <CheckBox style={styles.checkbox}
          testID={ReminderTestID.QUOTE_TEST_ID}
          disabled={false}
          value={customQuoteCheck}
          onValueChange={(quoteChk) => setCustomQuoteCheck(quoteChk)}
        />

        <DropDown defaultValue={reminder.challenge} setValue={setChallenge} data={data} disable={challengeCheck}/>
        <Text variant='subtitle 2' style={styles.textLable}>{ReminderLables.SELECT_CHALLENGE_LABLE}</Text>
        <CheckBox style={styles.checkbox}
          testID={ReminderTestID.CHALLENGE_TEST_ID}
          disabled={false}
          value={challengeCheck}
          onValueChange={(challengeChk) => setChallengeCheck(challengeChk)}
        />

        <DropDown defaultValue={reminder.diary} setValue={setDiary} data={data} disable={diaryCheck}/>
        <Text variant='subtitle 2' style={styles.textLable}>{ReminderLables.SELECT_DIARY_LABLE}</Text>
        <CheckBox style={styles.checkbox}
          testID={ReminderTestID.DIARY_TEST_ID}
          disabled={false}
          value={diaryCheck}
          onValueChange={(diaryChk) => setDiaryCheck(diaryChk)}
        />

        <Button title={CommonConstants.CANCEL} style={styles.button} onPress={() => navigation.goBack()} variant="outlined" color={Colors.GRAY} />
        <Button title={CommonConstants.EDIT} style={styles.button} onPress={handleSubmit} color={Colors.BLUE} />
        <View style={{marginBottom:'-10%'}}></View>
      </PopupContainer>
      <View style={{marginBottom:'50%'}}></View>
    </ScrollView>
  </View>
  );
}


