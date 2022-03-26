import React from 'react';
import { View, StyleSheet } from 'react-native'

import Tile from './Tile'
import { SIZE, HEIGHT, MAX_TILES, MAX_A_KIND } from '../../constants/Constants';


export default Hand = ({tiles}) => {
  return <View style={styles.hand}>
    {tiles.map((tileName, idx) => {
      return <Tile key={idx} tileName={tileName} />
    })}
  </View>
}


const styles = StyleSheet.create({
  hand: {
    overflow: 'hidden',
    flexDirection: 'row',
    borderColor: 'red',
    borderRadius: 5,
    borderBottomWidth: 10,
    paddingHorizontal: 2,
    backgroundColor: 'pink',
    paddingTop: 5,
    height: 70,
    width: SIZE - 10,
    alignItems: 'flex-end'
  }
})