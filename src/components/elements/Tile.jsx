import React from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native'

import tileToPNGMap from '../../constants/TileMap';

const frontSource = tileToPNGMap['fr']
const backSource = tileToPNGMap['bk']

const TileImage = ({tileName}) => {
  if (tileName === ''){
    return <Image source={backSource} style={styles.tileBack} fadeDuration={0}/>
  } else {
    const imgSource = tileToPNGMap[tileName]
    return <Image source={imgSource} style={styles.tileFace} fadeDuration={0}/>
  }
}

export default Tile = ({tileName, height=null}) => {
  return <View style={[styles.tile, {height: height}]}> 
    <ImageBackground source={frontSource} style={styles.frontback} fadeDuration={0}>
      <TileImage tileName={tileName} />
    </ImageBackground>
  </View>
}

const styles = StyleSheet.create({
  tile: {
    flexShrink: 1,
    flexGrow: 0,
    aspectRatio: 0.75
  },
  frontback: {
    flex: 1,
    aspectRatio: 0.75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tileFace: {
    flex: 0.9,
    aspectRatio: 0.75
  },
  tileBack: {
    flex: 1,
    aspectRatio: 0.75
  }
})