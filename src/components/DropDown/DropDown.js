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
        selectedTextStyle={props.disable === true? styles.selectedTextStyle : styles.disabledSelectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={props.data}
        maxHeight={300}
        labelField="label"
        disable={!props.disable}
        valueField="value"
        placeholder={!isFocus && props.defaultValue ? props.defaultValue : !isFocus ? "Select Item" : '...'}
        value={value}
        onChange={item => {
          setValue(item.value);
          props.setValue(item.value)
          setIsFocus(false);
        }}
      />
  )
}

