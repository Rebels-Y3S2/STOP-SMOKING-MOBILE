import React, { useState } from 'react'
import {Dropdown} from 'react-native-element-dropdown'
import { styles } from './DropDownStyles';

export default function DropDown({disable = true, data = []}) {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    
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
          placeholder={!isFocus ? 'Select item' : '...'}
          value={value}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
  )
}

