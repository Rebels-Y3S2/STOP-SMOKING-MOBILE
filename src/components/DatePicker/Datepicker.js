import React, {useState} from 'react'
import { StyleSheet,View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import Entypo from 'react-native-vector-icons/Entypo';
import { TextInput } from '@react-native-material/core'

export default function Datepicker(props) {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('')

    const onChange = (event, selectedDate) =>{
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        let fTime = 'Hours' + tempDate.getHours() + '| Minutes: ' + tempDate.getMinutes();
        props.setText(fDate)
        setText(fDate)
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
  return (
    <View>
        <View>
            <TextInput variant="outlined" label={props.lable} value={text} style={{ margin: 16 }}></TextInput>
            <Entypo name='calendar'size={30} onPress={()=> showMode('date')} style={styles.calendar} />
        </View>
        {
            show && (
            <DateTimePicker
                testID='dateTimePicker'
                value={date}
                mode={mode}
                is24Hour={true}
                display='default'
                onChange={onChange}
            />
        )
    }
    </View>
  )
}
const styles = StyleSheet.create({
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
    calendar:{
        textAlign:'right',
        marginRight:25,
        marginTop:-65
    }
  })