import React, { useContext, useEffect, useState } from 'react';
import { View, ScrollView, TextInput } from 'react-native';
import { Button, Text,} from '@react-native-material/core';
import Datepicker from '../../../components/DatePicker/Datepicker.js';
import DropDown from '../../../components/DropDown/DropDown.js';
import CheckBox from 'expo-checkbox';
import BigHeaderBackground from '../../../components/HeaderBackground/HeaderBackground.js';
import PopupContainer from '../../../components/Contaner/PopupContainer.js';
import { addReminder } from '../../../api/reminder.api.js';
import { getChallenges } from '../../../api/challenge.api.js';
import { useNavigation } from '@react-navigation/native';
import { ReminderConstants } from '../../../util/Constants/ReminderConstants.js';
import { Colors, CommonConstants } from '../../../util/Constants/CommonConstants.js';
import { styles } from './CreateReminderStyles.js';
import { fetchDiaryRecords } from '../../../api/diary.api.js';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../AuthContext.js';
import { NotificationContext } from '../Context/ReminderContext.js';

export default function CreateReminder() {

  const  notificationHandler  = useContext(NotificationContext);
  console.log(notificationHandler)
  
  // Navigation
  const navigation = useNavigation();

  // User Info
  const authContext = useContext(AuthContext); 

  // Translation
  const { t } = useTranslation();

  // Reminder Data
  const [reminderTitle, setReminderTitle] = useState('');
  const [sDate, setSDate] = useState('');
  const [eDate, setEDate] = useState('');
  const [sTime,setSTime] = useState(null);
  const [customQuote, setCustomQuote] = useState('');
  const [challenge, setChallenge] = useState(null);
  const [diary, setDiary] = useState(null);

  // Checkbox data
  const [customQuoteCheck, setCustomQuoteCheck] = useState(false);
  const [challengeCheck, setChallengeCheck] = useState(false);
  const [diaryCheck, setDiaryCheck] = useState(false);

  const [challenges] = useState([]);
  const [challengeDropDown, setChallengeDropDown] = useState([]);
  const [diaries] = useState([]);
  const [diaryDropDown, setDiaryDropdown] = useState([]);

  /**
   * Takes the reminder title value from the text input field and assign in to reminderTitle const
   * @param {*} e 
   */
  const handlReminderTitle = (e) =>{
    setReminderTitle(e.nativeEvent.text);
  }

  /**
   * Takes the custom quote value from the text input field and assign it to customQuote const
   * @param {*} e 
   */
  const handleCustomQuote = (e) =>{
    setCustomQuote(e.nativeEvent.text);
  }
  
  /**
   *  Will be called when the screen is loaded
   */
  useEffect(() =>{
    getChallengesDetails();
    getDiaryDetails();
  }, [])


  /**
   * Takes the reminder details set in the form and save the data with the use of 
   * addReminder(reminder) API 
   */
  const handleSubmit = () =>{
    const reminder = {
      userId: authContext.userInfo._id, //Will be replaced once user auth is integrated
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
      navigation.navigate(CommonConstants.REMINDERS_PATH, 
        {
          title:ReminderConstants.REMINDER_CREATE_SUCCESS, 
          type:CommonConstants.CREATE, success:true
        }
      )
      // const reimnderObj = {
      //   reminderTitle:res.data.data.reminderTitle

      // }
      notificationHandler(res.data.data);
    }).catch((error) =>{
      console.log(error);
    })
  }

/**
 * Fetch challenge details relating to the userId
 */
  const getChallengesDetails = () =>{
    getChallenges(authContext.userInfo._id)
    .then((res)=>{
      // Loops the response and isolate the name and id and assign to challengeObj
      for(let i = 0; i<res.data.data.length; i++ ){
        const challengeObj = {
          label:res.data.data[i].name,
          value:res.data.data[i]._id
        }
        challenges.push(challengeObj); // Store challengeObj in challenges array
      }
      setChallengeDropDown(challenges); // set the challengeDropDown data 
    }).catch((error) =>{
      console.log(error);
    })
  }

  /**
 * Fetch diary details relating to the userId
 */
   const getDiaryDetails = () =>{
    fetchDiaryRecords(authContext.userInfo._id)
    .then((res)=>{
      //Loops the response and isolate the titlle and id and assign to diaryObj
      for(let i = 0; i<res.data.data.length; i++ ){
        const diaryObj = {
          label:res.data.data[i].title,
          value:res.data.data[i]._id
        }
        diaries.push(diaryObj); // Store diaryObj in diary array
      }
      setDiaryDropdown(diaries); // set the diaryDropDown data 
    }).catch((error) =>{
      console.log(error);
    })
  }

  return (
    <View>
      <ScrollView>
        <BigHeaderBackground/>
        <PopupContainer  firstContainer>
          <TextInput 
            placeholder={t(ReminderConstants.REMINDER_TITLE_LABEL)}
            style={styles.input} 
            onChange={handlReminderTitle}
          />
          <Text variant='subtitle 2' style={styles.textLable}>{t(ReminderConstants.REMINDER_TITLE_LABEL)}</Text>
          
          <Datepicker
            setText={setSDate}
            lable={t(ReminderConstants.START_DATE_LABEL)}
            mode={CommonConstants.DATE} 
          />

          <Datepicker
            setText={setEDate} 
            lable={t(ReminderConstants.END_DATE_LABEL)} 
            mode={CommonConstants.DATE}
          />

          <Datepicker
            setText={setSTime} 
            lable={t(ReminderConstants.START_TIME_LABEL)}
            mode={CommonConstants.TIME} 
          />

          <TextInput 
            placeholder={t(ReminderConstants.CUSTOM_QUOTE_LABEL)} 
            editable={customQuoteCheck} 
            onChange={handleCustomQuote} 
            style={styles.input}
          />
          <Text variant='subtitle 2' style={styles.textLable}>{t(ReminderConstants.CUSTOM_QUOTE_LABEL)} </Text>
          <CheckBox style={styles.checkbox}
            testID={ReminderConstants.QUOTE_TEST_ID}
            disabled={false}
            value={customQuoteCheck}
            onValueChange={(quoteChk) => setCustomQuoteCheck(quoteChk)}
          />

          <DropDown setValue={setChallenge} data={challengeDropDown} disable={challengeCheck}/>
          <Text variant='subtitle 2' style={styles.textLable}>{t(ReminderConstants.SELECT_CHALLENGE_LABEL)}</Text>
          <CheckBox style={styles.checkbox}
            testID={ReminderConstants.CHALLENGE_TEST_ID}
            disabled={false}
            value={challengeCheck}
            onValueChange={(challengeChk) => setChallengeCheck(challengeChk)}
          />

          <DropDown setValue={setDiary} data={diaryDropDown} disable={diaryCheck}/>
          <Text variant='subtitle 2' style={styles.textLable}>{t(ReminderConstants.SELECT_DIARY_LABEL)}</Text>
          <CheckBox style={styles.checkbox}
            testID={ReminderConstants.DIARY_TEST_ID}
            disabled={false}
            value={diaryCheck}
            onValueChange={(diaryChk) => setDiaryCheck(diaryChk)}
          />

          <Button title={t(CommonConstants.CANCEL)} style={styles.button} onPress={() => navigation.goBack()} variant="outlined" color={Colors.GRAY} />
          <Button title={t(CommonConstants.SAVE)} style={styles.button} onPress={handleSubmit} color={Colors.BLUE} />
          <View style={{marginBottom:10}}></View>
        </PopupContainer>
        <View style={{marginBottom:125}}></View>
      </ScrollView>
    </View>
  );
}


