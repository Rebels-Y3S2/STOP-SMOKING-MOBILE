import React, { useState } from 'react'
import {Dropdown} from 'react-native-element-dropdown'
import { styles } from './DropDownStyles';

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

