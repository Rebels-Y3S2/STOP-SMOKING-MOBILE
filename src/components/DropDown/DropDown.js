import React, { useState } from 'react'
import {Dropdown} from 'react-native-element-dropdown'
import { StyleSheet } from 'react-native';

export default function DropDown(props) {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    
  return (
    <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={props.data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          value={value}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
  )
}
const styles = StyleSheet.create({
    dropdown: {
      height:60,
      width:380,
      margin:'4%',
      backgroundColor:'white',
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });
