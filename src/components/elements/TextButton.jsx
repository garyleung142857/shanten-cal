import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from './Icon';

export default TextButton = ({textLabel, iconLabel, btnValue, onPress}) => {
  return <TouchableOpacity
    onPress={() => onPress(btnValue)}
    style={[styles.button]}
  >
    {textLabel && <Text style={styles.textLabel}>
      {textLabel}
    </Text>}
    {iconLabel && <Text style={styles.iconLabel}>
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
    backgroundColor: 'oldlace'
  },
  textLabel: {
    flex: 1,
    fontSize: 18,
    color: 'coral',
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  iconLabel: {
    flex: 1,
    color: 'coral',
    textAlign: 'center',
    textAlignVertical: 'center'
  }
})