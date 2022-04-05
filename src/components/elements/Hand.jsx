import React from 'react';
import { View, StyleSheet } from 'react-native'

import TileButton from './TileButton';
import { SIZE, HEIGHT, MAX_TILES, MAX_A_KIND } from '../../constants/Constants';


export default Hand = ({tiles, onTilePressed}) => {
  return <View style={styles.hand}>
    {tiles.map((tileName, idx) => {
      return <TileButton 
        key={idx} 
        tileName={tileName} 
        onPress={() => onTilePressed(idx)}
      />
    })}
  </View>
}


const styles = StyleSheet.create({
  hand: {
    overflow: 'hidden',
    flexDirection: 'row',
    borderRadius: 5,
    paddingHorizontal: 2,
    backgroundColor: 'pink',
    padding: 5,
    height: 60,
    width: SIZE - 10,
    alignItems: 'flex-end'
  }
})