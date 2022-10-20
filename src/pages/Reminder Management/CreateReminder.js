import { Button, Text, TextInput } from '@react-native-material/core'
import React, { useState } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import Datepicker from '../../components/DatePicker/Datepicker.js'
import DropDown from '../../components/DropDown/DropDown.js'
import CheckBox from 'expo-checkbox';

export default function CreateReminder({navigation}) {
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

  return (
    <View>
      <ScrollView>
        <TextInput variant="outlined" placeholder='Reminder Title' style={{ margin: 16 }} onChange={handleChange}></TextInput>
        <Text variant='subtitle 2' style={styles.textLable}>Reminder Title</Text>
        
        <Datepicker
          setText={setSDate}
          lable='Start Date' 
        />
        <View style={{marginTop:'5%'}}></View>

        <Datepicker
          setText={setEDate} 
          lable='End Date' 
        />
        <View style={{marginTop:'5%'}}></View>

        <TextInput variant="outlined" placeholder='Custom Quote' style={{ margin: 16 }}></TextInput>
        <Text variant='subtitle 2' style={styles.textLable}>Custom Quote</Text>
        <CheckBox style={styles.checkbox}
          testID='quote'
          disabled={false}
          value={customQuoteCheck}
          onValueChange={(quoteChk) => setCustomQuoteCheck(quoteChk)}
        />

        <DropDown data={data}/>
        <Text variant='subtitle 2' style={styles.textLable}>Select Challenge</Text>
        <CheckBox style={styles.checkbox}
          testID='challenge'
          disabled={false}
          value={challengeCheck}
          onValueChange={(challengeChk) => setChallengeCheck(challengeChk)}
        />

        <DropDown data={data}/>
        <Text variant='subtitle 2' style={styles.textLable}>Select Diary</Text>
        <CheckBox style={styles.checkbox}
          testID='diary'
          disabled={false}
          value={diaryCheck}
          onValueChange={(diaryChk) => setDiaryCheck(diaryChk)}
        />

        <Button title="Cancel" style={styles.button} variant="outlined" color='#5B5B5B' />
        <Button title="Save" style={styles.button} color="#1658CD" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  textLable:{
    marginLeft:'5%',
    marginTop:'-3%'
  },
  dateLable:{
    marginLeft:'5%',
    marginTop:'-3%'
  },
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#A8E9CA'
  },
  title: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
  },
  datePickerStyle: {
    width: 230,
  },
  text: {
    textAlign: 'left',
    width: 230,
    fontSize: 16,
    color : "#000"
  },
  checkbox:{
    marginLeft:365,
    marginTop:-20
  },
  button:{
    padding: 5,
    width: 200,
    marginLeft:100,
    marginTop:20
  }
})

