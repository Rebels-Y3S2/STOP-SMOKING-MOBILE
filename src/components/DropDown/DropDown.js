import React, { useState } from 'react'
import {Dropdown} from 'react-native-element-dropdown'
import { styles } from './DropDownStyles';

export default function DropDown({disable = true, data = [], setValue, placeholder}) {
    const [value, setValue_] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const placeholderValue = placeholder ? placeholder : 'Select item';
    
  return (
    <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={disable ? styles.placeholderStyle : styles.disabledPlaceholderStyle }
          selectedTextStyle={disable ? styles.placeholderStyle : styles.disabledPlaceholderStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          disable={!disable}
          valueField="value"
          disabled={disable}
          placeholder={!isFocus ? placeholderValue : '...'}
          value={value}
          onChange={item => {
            setValue_(item.value);
            props.setValue(item.value)
            setIsFocus(false);
          }}
        />
  )
}

