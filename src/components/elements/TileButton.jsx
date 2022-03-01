import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import Tile from './Tile';


export default TileButton = ({tileName, onPress}) => {
  if(tileName === ''){
    return <View style={styles.button}>
      <Tile tileName='' />
    </View>
  } else {
    return (
      <TouchableOpacity style={styles.button} onPress={() => {onPress(tileName)}}>
        <Tile tileName={tileName} />
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  button: {
    flex: 1,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});