import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native'

import TileKeyboard from '../elements/TileKeyboard';
import Hand from '../elements/Hand';

const handleInput = (queryHand, setQueryHand, input) => {
  if (input === 'Enter'){
    setQueryHand([])
  } else if (input === 'Delete'){
    if (queryHand.length > 0){
      setQueryHand(queryHand.slice(0, -1))
    }
  } else {
    setQueryHand([...queryHand, input])
  }
}


export default InputQuery = ({}) => {
  const [queryHand, setQueryHand] = useState([])

  return <View style={styles.inputQuery}>
    <View style={styles.hand}>
      <Hand tiles={queryHand} />
    </View>
    <View style={styles.keyboard}>
      <TileKeyboard
        handleInput={(input) => handleInput(queryHand, setQueryHand, input)}
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
    alignSelf: 'center'
  },
  keyboard: {
    position: 'absolute',
    bottom: 0
  },
})