import React, { useState } from 'react'
import {Dropdown} from 'react-native-element-dropdown'
import { styles } from './DropDownStyles';

export default function DropDown(props) {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    
  return (
    <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={props.disable === true? styles.placeholderStyle : styles.disabledPlaceholderStyle }
          selectedTextStyle={props.disable === true? styles.placeholderStyle : styles.disabledPlaceholderStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={props.data}
          maxHeight={300}
          labelField="label"
          disable={!props.disable}
          valueField="value"
          disabled={true}
          placeholder={!isFocus ? 'Select item' : '...'}
          value={value}
          onChange={item => {
            setValue(item.value);
            props.setValue(item.value)
            setIsFocus(false);
          }}
        />
  )
}

