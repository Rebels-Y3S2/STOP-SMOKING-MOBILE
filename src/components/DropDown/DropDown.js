import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import {Dropdown} from 'react-native-element-dropdown'
import { CommonConstants } from '../../util/Constants/CommonConstants';
import { styles } from './DropDownStyles';

export default function DropDown({disable = true, data = [], setValue, placeholder}) {
    const [value, setValue_] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const placeholderValue = placeholder ? placeholder : CommonConstants.SELECT_ITEM;
  return (
    <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={disable === true? styles.placeholderStyle : styles.disabledPlaceholderStyle }
        selectedTextStyle={disable === true? styles.selectedTextStyle : styles.disabledSelectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        disable={!disable}
        valueField="value"
        placeholder={!isFocus && placeholderValue}
        value={value}
        onChange={item => {
          setValue_(item.value);
          setValue(item.value)
          setIsFocus(false);
        }}
      />
  )
}

