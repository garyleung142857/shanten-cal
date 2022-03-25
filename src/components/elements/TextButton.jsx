import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';


export default TextButton = ({textLabel, btnValue, onPress}) => {
  return <TouchableOpacity
    onPress={() => onPress(btnValue)}
    style={[styles.button]}
  >
    <Text style={styles.buttonLabel}>
      {textLabel}
    </Text>
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
  buttonLabel: {
    flex: 1,
    fontSize: 18,
    color: 'coral',
    textAlign: 'center',
    textAlignVertical: 'center'
  },
})