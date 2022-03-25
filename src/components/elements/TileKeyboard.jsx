import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import TileButton from './TileButton';
import TextButton from './TextButton';
import BOARDS from '../../constants/BoardsLayout'
import { SIZE, HEIGHT } from '../../constants/Constants'


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
    <View style={styles.keyboardRow}>
      <TextButton
        btnValue={'man'}
        textLabel={'萬'}
        onPress={() => setSelectedValue('man')}
      ></TextButton>
      <TextButton
        btnValue={'pin'}
        textLabel={'筒'}
        onPress={() => setSelectedValue('pin')}
      ></TextButton>
    </View>
    <View style={styles.keyboardRow}>
      <TextButton
        btnValue={'sou'}
        textLabel={'索'}
        onPress={() => setSelectedValue('sou')}
      ></TextButton>
      <TextButton
        btnValue={'zi'}
        textLabel={'字'}
        onPress={() => setSelectedValue('zi')}
      ></TextButton>
    </View>
    <View style={styles.keyboardRow}>
      <TextButton
        btnValue={'delete'}
        textLabel={'取消'}
        onPress={() => onPress('Delete')}
      ></TextButton>
      <TextButton
        btnValue={'enter'}
        textLabel={'確定'}
        onPress={() => onPress('Enter')}
      ></TextButton>
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
    width: Math.min(SIZE * 0.6, 200),
    height: Math.min(HEIGHT * 0.3, 250),
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
    width: Math.min(SIZE * 0.4, 150),
    height: Math.min(HEIGHT * 0.3, 250),
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

