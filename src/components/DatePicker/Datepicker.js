import React, {useState} from 'react'
import { View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TextInput } from '@react-native-material/core'
import { styles } from './DatePickerStyles';

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
        let fTime = tempDate.getHours() + ':' + tempDate.getMinutes() + ' hrs';


        if(props.mode === 'date'){
          props.setText(fDate)
          setText(fDate)
        }else{
          props.setText(fTime)
          setText(fTime)
        }
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };

  return (
    <View>
        <View>
            <TextInput variant="outlined" label={props.lable} value={text} style={styles.input}></TextInput>
            {
              props.mode === 'date' ?
              <MaterialIcons name='date-range'size={30} onPress={()=> showMode(props.mode)} style={styles.icon} />:
              <AntDesign name='clockcircleo'size={30} onPress={()=> showMode(props.mode)} style={styles.icon} />
            }
        </View>
        <View style={{marginTop:'5%'}}></View>
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
