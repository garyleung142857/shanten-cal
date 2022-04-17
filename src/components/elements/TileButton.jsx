import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import Tile from './Tile';


export default TileButton = ({tileName, onPress}) => {
  if(tileName === ''){
    return <Tile tileName='' />
  } else {
    return (
      <TouchableOpacity style={styles.tile} onPress={() => {onPress(tileName)}}>
        <Tile tileName={tileName} />
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  tile: {
    flexShrink: 1
  }
});