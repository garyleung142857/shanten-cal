import React, { useState, useContext } from 'react';
import { View, StyleSheet, Alert } from 'react-native'

import TileKeyboard from '../elements/TileKeyboard';
import Hand from '../elements/Hand';


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


export default InputQuery = ({navigation, route}) => {
  const initialHand = route.params ? route.params.query || [] : []
  const [queryHand, setQueryHand] = useState(initialHand)

  const onTilePressed = (idx) => {
    setQueryHand(queryHand.filter((item, i) => i !== idx))
  }

  return <View style={styles.inputQuery}>
    <Hand tiles={queryHand} onTilePressed={onTilePressed}/>
    <View style={{flexGrow: 1}} />
    <TileKeyboard
      handleInput={(input) => handleInput(
        queryHand, setQueryHand, navigation.navigate, input
      )}
    />
  </View>
}


const styles = StyleSheet.create({
  inputQuery: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
})