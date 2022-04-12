import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import TileButton from './TileButton';
import TextButton from './TextButton';
import BOARDS from '../../constants/BoardsLayout'
import { SIZE, HEIGHT } from '../../constants/Constants'

import AppContext from '../../lib/AppContext'


const TilesPane = ({suit, onPress, bgColor}) => {
  const suitBoard = BOARDS[suit]
  return <View style={[styles.keyboardSuitContainer, {backgroundColor: bgColor}]}>
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


const ButtonsPane = ({selectedValue, setSelectedValue, onPress, t, bgColor}) => {

  return <View style={[styles.buttonContainer, {backgroundColor: bgColor}]}>
    <View style={styles.keyboardRow}>
      <TextButton
        btnValue={'man'}
        textLabel={t.manzu}
        selected={selectedValue=='man'}
        onPress={() => setSelectedValue('man')}
      ></TextButton>
      <TextButton
        btnValue={'pin'}
        textLabel={t.pinzu}
        selected={selectedValue=='pin'}
        onPress={() => setSelectedValue('pin')}
      ></TextButton>
    </View>
    <View style={styles.keyboardRow}>
      <TextButton
        btnValue={'sou'}
        textLabel={t.souzu}
        selected={selectedValue=='sou'}
        onPress={() => setSelectedValue('sou')}
      ></TextButton>
      <TextButton
        btnValue={'zi'}
        textLabel={t.zihai}
        selected={selectedValue=='zi'}
        onPress={() => setSelectedValue('zi')}
      ></TextButton>
    </View>
    <View style={[styles.keyboardRow, {flex: 2}]}>
      <View style={{flex: 1}}>
        <TextButton
          btnValue={'clear'}
          iconLabel={'delete-outline'}
          onPress={() => onPress('Clear')}
        ></TextButton>
        <TextButton
          btnValue={'delete'}
          iconLabel={'backspace'}
          onPress={() => onPress('Delete')}
        ></TextButton>
      </View>
      <View style={{flex: 1}}>
        <TextButton
          btnValue={'enter'}
          iconLabel={'check'}
          onPress={() => onPress('Enter')}
        ></TextButton>
      </View>
    </View>
  </View>
}


export default TileKeyboard = ({handleInput}) => {
  const context = useContext(AppContext)
  const t = context.cDict
  const color = context.cColor

  const [activeSuit, setActiveSuit] = useState('pin')
  
  return <View style={styles.keyboardContainer}>
    <TilesPane 
      suit={activeSuit} 
      onPress={handleInput}
      bgColor={color.keyboard}
    />
    <ButtonsPane 
      selectedValue={activeSuit}
      setSelectedValue={setActiveSuit}
      onPress={handleInput}
      bgColor={color.keyboard}
      t={t}
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
    paddingRight: 0
    // backgroundColor: 'skyblue'
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
    // backgroundColor: 'aliceblue'
  },
})

