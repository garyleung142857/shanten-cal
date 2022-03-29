import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native'

import TileKeyboard from '../elements/TileKeyboard';
import Hand from '../elements/Hand';

import { sortTiles } from '../../lib/functions/hands';
const { tilesQuery } = require('../../lib/cal/InOut')

const handleInput = (queryHand, setQueryHand, nav, input) => {
  if (input === 'Enter'){
    nav('Result', {query: queryHand})
  } else if (input === 'Delete'){
    if (queryHand.length > 0){
      setQueryHand(queryHand.slice(0, -1))
    }
  } else if (input === 'Clear'){
    setQueryHand([])
  } else {
    setQueryHand([...queryHand, input])
  }
  return true
}


export default InputQuery = ({navigation}) => {
  const [queryHand, setQueryHand] = useState([])

  return <View style={styles.inputQuery}>
    <View style={styles.hand}>
      <Hand tiles={queryHand} />
    </View>
    <View style={styles.keyboard}>
      <TileKeyboard
        handleInput={(input) => handleInput(
          queryHand, setQueryHand, navigation.navigate, input
        )}
      />
    </View>
  </View>
}


const styles = StyleSheet.create({
  inputQuery: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  hand: {
    position: 'absolute',
    top: 5
  },
  keyboard: {
    position: 'absolute',
    bottom: 0
  },
})