import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import TileButton from './TileButton';
import TextButton from './TextButton';
import BOARDS from '../../constants/BoardsLayout'
import { SIZE, HEIGHT } from '../../constants/Constants'

import AppContext from '../../lib/AppContext'


const TilesPane = ({suit, onPress}) => {
  const suitBoard = BOARDS[suit]
  return <View style={styles.keyboardSuitContainer}>
    {suitBoard.map((keysRow, idx) => {
      return <View key={idx} style={styles.keyboardRow}>
        {keysRow.map((tn) => {
          return <View key={tn} style={styles.tileButton}>
            <TileButton tileName={tn} onPress={onPress}/>
          </View>
        })}
      </View>
    })}
  </View>
}


const ButtonsPane = ({selectedValue, setSelectedValue, onPress}) => {
  
  const context = useContext(AppContext)
  const t = context.cDict
  
  return <View style={styles.buttonContainer}>
    <View style={styles.keyboardRow}>
      <TextButton
        btnValue={'man'}
        textLabel={t.manzu}
        onPress={() => setSelectedValue('man')}
      ></TextButton>
      <TextButton
        btnValue={'pin'}
        textLabel={t.pinzu}
        onPress={() => setSelectedValue('pin')}
      ></TextButton>
    </View>
    <View style={styles.keyboardRow}>
      <TextButton
        btnValue={'sou'}
        textLabel={t.souzu}
        onPress={() => setSelectedValue('sou')}
      ></TextButton>
      <TextButton
        btnValue={'zi'}
        textLabel={t.zihai}
        onPress={() => setSelectedValue('zi')}
      ></TextButton>
    </View>
    <View style={[styles.keyboardRow, {flex: 2}]}>
      <View style={{flex: 1}}>
        <View style={styles.keyboardRow}>
          <TextButton
            btnValue={'clear'}
            iconLabel={'delete-outline'}
            onPress={() => onPress('Clear')}
          ></TextButton>
        </View>
        <View style={styles.keyboardRow}>
          <TextButton
            btnValue={'delete'}
            iconLabel={'backspace'}
            onPress={() => onPress('Delete')}
          ></TextButton>
        </View>
      </View>
      <TextButton
        btnValue={'enter'}
        iconLabel={'check-bold'}
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
    height: Math.min(HEIGHT * 0.4, 250),
    padding: 5,
    backgroundColor: 'skyblue'
  },
  keyboardRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tileButton: {
    flex: 1,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer:{
    width: Math.min(SIZE * 0.4, 150),
    height: Math.min(HEIGHT * 0.4, 250),
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

