import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from './Icon';

import AppContext from '../../lib/AppContext'


export default TextButton = ({textLabel, iconLabel, btnValue, selected, onPress}) => {
  const color = useContext(AppContext).cColor
  
  return <TouchableOpacity
    onPress={() => onPress(btnValue)}
    style={[styles.button, {backgroundColor: selected ? color.btnDark : color.btnLight}]}
  >
    {textLabel && <Text style={[styles.textLabel, {color: selected ? color.btnLight : color.btnDark}]}>
      {textLabel}
    </Text>}
    {iconLabel && <Text style={[styles.iconLabel, {color: selected ? color.btnLight : color.btnDark}]}>
      <Icon name={iconLabel}
    /></Text>}
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    padding: 2,
    margin: 2,
    borderRadius: 4,
  },
  textLabel: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  iconLabel: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
})