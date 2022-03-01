import React from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native'

import tileToPNGMap from '../../constants/TileMap';


export default Tile = ({tileName}) => {
  if(tileName === ''){
    const imgSource = tileToPNGMap['bk']
    return <View style={styles.tile}>
      <Image source={imgSource} style={styles.frontback} fadeDuration={0}/>
    </View>
  } else {
    const imgSource = tileToPNGMap[tileName]
    const frontSource = tileToPNGMap['fr']
    return <View style={styles.tile}>
      <ImageBackground source={frontSource} style={styles.frontback} fadeDuration={0}>
        <Image source={imgSource} style={styles.tileFace} fadeDuration={0}/>
      </ImageBackground>
    </View>
  }
}


const styles = StyleSheet.create({
  tile:{
    flex: 1
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
  }
})