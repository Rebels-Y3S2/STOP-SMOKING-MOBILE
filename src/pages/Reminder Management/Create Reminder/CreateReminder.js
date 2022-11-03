import { Button, Text,} from '@react-native-material/core'
import React, { useState } from 'react'
import { View, ScrollView, TextInput, Alert  } from 'react-native'
import Datepicker from '../../../components/DatePicker/Datepicker.js'
import DropDown from '../../../components/DropDown/DropDown.js'
import CheckBox from 'expo-checkbox';
import BigHeaderBackground from '../../../components/HeaderBackground/HeaderBackground.js'
import PopupContainer from '../../../components/Contaner/PopupContainer.js'
import { styles } from './CreateReminderStyles.js'
import { addReminder } from '../../../api/reminder.api.js'
import { useNavigation } from '@react-navigation/native'
import { ReminderConstants } from '../../../util/Constants/ReminderConstants.js'
import { Colors, CommonConstants } from '../../../util/Constants/CommonConstants.js'

export default function CreateReminder() {
  // Reminder Data
  const [reminderTitle, setReminderTitle] = useState('');
  const [sDate, setSDate] = useState('')
  const [eDate, setEDate] = useState('')
  const [sTime,setSTime] = useState(null)
  const [customQuote, setCustomQuote] = useState('');
  const [challenge, setChallenge] = useState('')
  const [diary, setDiary] = useState('')

  // Checkbox data
  const [customQuoteCheck, setCustomQuoteCheck] = useState(false)
  const [challengeCheck, setChallengeCheck] = useState(false)
  const [diaryCheck, setDiaryCheck] = useState(false)

  // Navigation
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

  /**
   * Takes the reminder title value from the text input field and assign in to reminderTitle const
   * @param {*} e 
   */
  const handlReminderTitle = (e) =>{
    setReminderTitle(e.nativeEvent.text)
  }

  /**
   * Takes the custom quote value from the text input field and assign it to customQuote const
   * @param {*} e 
   */
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
      navigation.navigate(CommonConstants.REMINDERS_PATH, 
        {
          title:ReminderConstants.REMINDER_CREATE_SUCCESS, 
          type:CommonConstants.CREATE, success:true
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
            placeholder={ReminderConstants.REMINDER_TITLE_LABEL}
            style={styles.input} 
            onChange={handlReminderTitle}
          />
          <Text variant='subtitle 2' style={styles.textLable}>{ReminderConstants.REMINDER_TITLE_LABEL}</Text>
          
          <Datepicker
            setText={setSDate}
            lable={ReminderConstants.START_DATE_LABEL}
            mode={CommonConstants.DATE} 
          />

          <Datepicker
            setText={setEDate} 
            lable={ReminderConstants.END_DATE_LABEL} 
            mode={CommonConstants.DATE}
          />

          <Datepicker
            setText={setSTime} 
            lable={ReminderConstants.START_TIME_LABEL}
            mode={CommonConstants.TIME} 
          />

          <TextInput 
            placeholder={ReminderConstants.CUSTOM_QUOTE_LABEL} 
            editable={customQuoteCheck} 
            onChange={handleCustomQuote} 
            style={styles.input}
          />
          <Text variant='subtitle 2' style={styles.textLable}>{ReminderConstants.CUSTOM_QUOTE_LABEL} </Text>
          <CheckBox style={styles.checkbox}
            testID={ReminderConstants.QUOTE_TEST_ID}
            disabled={false}
            value={customQuoteCheck}
            onValueChange={(quoteChk) => setCustomQuoteCheck(quoteChk)}
          />

          <DropDown setValue={setChallenge} data={data} disable={challengeCheck}/>
          <Text variant='subtitle 2' style={styles.textLable}>{ReminderConstants.SELECT_CHALLENGE_LABEL}</Text>
          <CheckBox style={styles.checkbox}
            testID={ReminderConstants.CHALLENGE_TEST_ID}
            disabled={false}
            value={challengeCheck}
            onValueChange={(challengeChk) => setChallengeCheck(challengeChk)}
          />

          <DropDown setValue={setDiary} data={data} disable={diaryCheck}/>
          <Text variant='subtitle 2' style={styles.textLable}>{ReminderConstants.SELECT_DIARY_LABEL}</Text>
          <CheckBox style={styles.checkbox}
            testID={ReminderConstants.DIARY_TEST_ID}
            disabled={false}
            value={diaryCheck}
            onValueChange={(diaryChk) => setDiaryCheck(diaryChk)}
          />

          <Button title={CommonConstants.CANCEL} style={styles.button} onPress={() => navigation.goBack()} variant="outlined" color={Colors.GRAY} />
          <Button title={CommonConstants.SAVE} style={styles.button} onPress={handleSubmit} color={Colors.BLUE} />
          <View style={{marginBottom:'-10%'}}></View>
        </PopupContainer>
        <View style={{marginBottom:'50%'}}></View>
      </ScrollView>
    </View>
  );
}


