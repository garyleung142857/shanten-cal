import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import TileButton from './TileButton';
import BOARDS from '../../constants/BoardsLayout'

const TilesPane = ({suit, onPress}) => {
  const suitBoard = BOARDS[suit]
  return <View style={styles.keyboardSuitContainer}>
    {suitBoard.map((keysRow, idx) => {
      return <View key={idx} style={styles.keyboardRow}>
        {keysRow.map((tn) => {
          return <TileButton key={tn} tileName={tn} onPress={onPress}/>
        })}
      </View>
    })}
  </View>
}

const ButtonsPane = ({selectedValue, setSelectedValue, onPress}) => {
  const buttons = [['man', 'pin'], ['sou', 'zi']]
  return <View style={styles.buttonContainer}>
    {buttons.map((btnRow, idx) => {
      return <View key={idx} style={styles.keyboardRow}>
        {btnRow.map((suit) => {
          return <TouchableOpacity
            key={suit}
            onPress={() => {setSelectedValue(suit)}}
            style={[styles.button, selectedValue === suit && styles.selected]}
          >
            <Text style={[styles.buttonLabel, selectedValue === suit && styles.selectedLabel]}>
              {suit}
            </Text>
          </TouchableOpacity>
        })}
      </View>
    })}
    <View key={2} style={styles.keyboardRow}>
      <TouchableOpacity
        key={'delete'}
        onPress={() => onPress('Delete')}
        style={[styles.button]}
      >
        <Text style={styles.buttonLabel}>
          Delete
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        key={'enter'}
        onPress={() => onPress('Enter')}
        style={[styles.button]}
      >
        <Text style={styles.buttonLabel}>
          Enter
        </Text>
      </TouchableOpacity>
    </View>
  </View>
}


export default TileKeyboard = ({handleInput}) => {
  const [activeSuit, setActiveSuit] = useState('pin')
  return <View style={styles.keyboardContainer}>
    <TilesPane 
      suit={activeSuit} 
      onPress={handleInput}
    />
    <ButtonsPane 
      selectedValue={activeSuit}
      setSelectedValue={setActiveSuit}
      onPress={handleInput}
    />
  </View>
}

const styles = StyleSheet.create({
  keyboardContainer: {
    flexDirection: 'row'
  },
  keyboardSuitContainer: {
    width: 200,
    height: 250,
    padding: 5,
    backgroundColor: 'skyblue'
  },
  keyboardRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer:{
    width: 150,
    height: 250,
    padding: 5,
    backgroundColor: 'aliceblue'
  },
  button: {
    flex: 1,
    padding: 2,
    margin: 2,
    borderRadius: 4,
    backgroundColor: 'oldlace'
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    flex: 1,
    fontSize: 18,
    color: 'coral',
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  selectedLabel: {
    color: 'white',
  },
})

