import React, { useEffect, useState } from 'react';
import { Button, Text } from '@react-native-material/core';
import { View, ScrollView, TextInput } from 'react-native';
import Datepicker from '../../../components/DatePicker/Datepicker.js';
import DropDown from '../../../components/DropDown/DropDown.js';
import CheckBox from 'expo-checkbox';
import BigHeaderBackground from '../../../components/HeaderBackground/HeaderBackground.js';
import PopupContainer from '../../../components/Contaner/PopupContainer.js';
import { fetchReminder, updateReminder } from '../../../api/reminder.api.js';
import { getChallenges } from '../../../api/challenge.api.js';
import { useNavigation } from '@react-navigation/native';
import { ReminderConstants } from '../../../util/Constants/ReminderConstants.js';
import {CommonConstants, Colors } from '../../../util/Constants/CommonConstants.js';
import { styles } from './UpdateReminderStyles.js';
import { fetchDiaryRecords } from '../../../api/diary.api.js';
import { useTranslation } from 'react-i18next';

export default function UpdateReminder({route}) {
  // Navigation values
  const navigation = useNavigation();
  const {reminderId} = route.params;

  //Translation
  const { t } = useTranslation();

  //Input values
  const [reminderTitle, setReminderTitle] = useState('');
  const [sDate, setSDate] = useState('');
  const [eDate, setEDate] = useState('');
  const [sTime,setSTime] = useState(null);
  const [customQuote, setCustomQuote] = useState('');
  const [challenge, setChallenge] = useState('');
  const [diary, setDiary] = useState('');

  // Checkbox values
  const [customQuoteCheck, setCustomQuoteCheck] = useState(false);
  const [challengeCheck, setChallengeCheck] = useState(false);
  const [diaryCheck, setDiaryCheck] = useState(false);

  // Prefill data
  const [reminder, setReminder] = useState({});
  const [challengeName, setChallengeName] = useState('');
  const [challenges] = useState([]);
  const [challengeDropDown, setChallengeDropDown] = useState([]);
  const [diaryTitle, setDiaryTitle] = useState('');
  const [diaries] = useState([]);
  const [diaryDropDown, setDiaryDropDown] = useState([]);

  /**
   * Called when the screen is loaded
   */
  useEffect(() =>{
    getReminderDetails();
    getChallengesDetails();
    getDiaryDetails();
  },[]);

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
   * Fetch the reminder details relating to the reminderId
   */
  const getReminderDetails = () =>{
    fetchReminder(reminderId)
    .then((res) =>{
      setReminder(res.data.data);
      setChallengeName(res.data.data.challenge.name);
      setDiaryTitle(res.data.data.diary.title);
    }).catch((error) =>{
      console.log(error);
    })
  }

  /**
   * Fetch challenge details relating to the userId
   */
  const getChallengesDetails = () =>{
    getChallenges("63632b9d0cae67041458ba21")
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
  fetchDiaryRecords("635b10baf383232439911869")
    .then((res)=>{
      //Loops the response and isolate the title and id and assign to diaryObj
      for(let i = 0; i<res.data.data.length; i++ ){
        const diaryObj = {
          label:res.data.data[i].title,
          value:res.data.data[i]._id
        }
        diaries.push(diaryObj); // Store diaryObj in diary array
      }
      setDiaryDropDown(diaries); // set the diaryDropDown data 
    }).catch((error) =>{
      console.log(error);
    })
  }

  /**
   * Takes the reminder data that has been changed and updates the reminder details
   * using the updateReminder(reminderId) API
   */
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
    updateReminder(reminderId, newReminder)
    .then((res) =>{
      navigation.navigate(CommonConstants.REMINDERS_PATH, 
        {
          title:ReminderConstants.REMINDER_EDIT_SUCCESS, 
          type:CommonConstants.UPDATE, success:true
        }
      )
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
          defaultValue={reminder.reminderTitle} 
          onChange={handlReminderTitle} 
        />
        <Text variant='subtitle 2' style={styles.textLable}>{t(ReminderConstants.REMINDER_TITLE_LABEL)}</Text>
        
        <Datepicker
          setText={setSDate}
          lable={sDate === '' ? t(ReminderConstants.STARTS_ON) + '  ' + reminder.startDate: ReminderConstants.START_DATE_LABEL}
          mode={CommonConstants.DATE} 
        />

        <Datepicker
          setText={setEDate} 
          lable={eDate === '' ? t(ReminderConstants.ENDS_ON) + '  ' + reminder.endDate : ReminderConstants.END_DATE_LABEL} 
          mode={CommonConstants.DATE}
        />

        <Datepicker
          setText={setSTime} 
          lable={sTime === null ? t(ReminderConstants.NOTIFIES_AT) + '  ' + reminder.startTime + 'hrs' : ReminderConstants.START_TIME_LABEL}
          mode={CommonConstants.TIME} 
        />

        <TextInput 
          placeholder={t(ReminderConstants.CUSTOM_QUOTE_LABEL)} 
          editable={customQuoteCheck} 
          onChange={handleCustomQuote} 
          style={styles.input}
          defaultValue={reminder.customQuote}
        />
        <Text variant='subtitle 2' style={styles.textLable}>{t(ReminderConstants.CUSTOM_QUOTE_LABEL)}</Text>
        <CheckBox style={styles.checkbox}
          testID={ReminderConstants.QUOTE_TEST_ID}
          disabled={false}
          value={customQuoteCheck}
          onValueChange={(quoteChk) => setCustomQuoteCheck(quoteChk)}
        />

        <DropDown placeholder={challengeName} setValue={setChallenge} data={challengeDropDown} disable={challengeCheck}/>
        <Text variant='subtitle 2' style={styles.textLable}>{t(ReminderConstants.SELECT_CHALLENGE_LABEL)}</Text>
        <CheckBox style={styles.checkbox}
          testID={ReminderConstants.CHALLENGE_TEST_ID}
          disabled={false}
          value={challengeCheck}
          onValueChange={(challengeChk) => setChallengeCheck(challengeChk)}
        />

        <DropDown placeholder={diaryTitle} setValue={setDiary} data={diaryDropDown} disable={diaryCheck}/>
        <Text variant='subtitle 2' style={styles.textLable}>{t(ReminderConstants.SELECT_DIARY_LABEL)}</Text>
        <CheckBox style={styles.checkbox}
          testID={ReminderConstants.DIARY_TEST_ID}
          disabled={false}
          value={diaryCheck}
          onValueChange={(diaryChk) => setDiaryCheck(diaryChk)}
        />

        <Button title={t(CommonConstants.CANCEL)} style={styles.button} onPress={() => navigation.goBack()} variant="outlined" color={Colors.GRAY} />
        <Button title={t(CommonConstants.EDIT)} style={styles.button} onPress={handleSubmit} color={Colors.BLUE} />
        <View style={{marginBottom:10}}></View>
      </PopupContainer>
      <View style={{marginBottom:125}}></View>
    </ScrollView>
  </View>
  );
}


