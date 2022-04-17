import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native'

import TileButton from './TileButton';
import { SIZE } from '../../constants/Constants';

import AppContext from '../../lib/AppContext'


export default Hand = ({tiles, onTilePressed}) => {
  const color = useContext(AppContext).cColor
  return <View style={[styles.hand, {borderBottomColor: color.hand, backgroundColor: color.handBg}]}>
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
    borderRadius: 2,
    borderBottomWidth: 10,
    paddingTop: 5,
    marginTop: 10,
    height: 70,
    width: SIZE - 10,
    alignItems: 'flex-end'
  }
})