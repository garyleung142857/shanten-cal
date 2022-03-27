import React, {useState} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import Tile from './Tile'
import TextButton from './TextButton'

export default ResultEntry = ({tile, analysis}) => {
  let s1 = ''
  if (analysis.shanten == 0){
    if (analysis.ukeire > 0){
      s1 = `聽${analysis.ukeire}張` 
    } else {
      s1 = `空聽`
    }
    if (analysis.avgWithImprovment > analysis.ukeire){
      s1 += ` 改良平均${analysis.avgWithImprovment.toFixed(2)}張`
    }
  } else {
    s1 = `入章${analysis.ukeire}張`
    if (analysis.avgWithImprovment > analysis.ukeire){
      s1 += ` 改良平均${analysis.avgWithImprovment.toFixed(2)}張`
    }
    s1 += ` 下一向聽平均入章${analysis.avgNextUkeire.toFixed(2)}張`
    if (analysis.speedRef){
      s1 += ` 參考速度${analysis.speedRef.toFixed(2)}`
    }
  }

  const [showUL, setShowUL] = useState(false)

  return <View style={[styles.resultEntry]}>
    {tile && <View style={styles.discardTile}><Tile
      tileName={tile}
    /></View>}
    <View style={styles.resultMiddle}>
      <Text numberOfLines={3} style={styles.resultText}>
        {s1}
      </Text>
      {showUL && <View style={styles.ukeireList}>
        {analysis.ukeireList.map((tileName, idx) => {
          return <Tile key={idx} tileName={tileName} height={30}/>
        })}
      </View>}
    </View>
    <View style={styles.viewUkeireBtn}>
      <TextButton
        textLabel={'詳細'}
        btnValue={'detail'}
        onPress={() => setShowUL(!showUL)}
      />
    </View>
  </View>
}


const styles = StyleSheet.create({
  resultEntry:{
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 70,
    borderWidth: 5,
    borderColor: 'orange',
    backgroundColor: 'pink',
    margin: 5
  },
  discardTile:{
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0,
  },
  resultMiddle:{
    flex: 1
  },
  resultText:{
    fontSize: 18,
  },
  viewUkeireBtn:{
    width: 50,
    height: 50,
    flex: 0
  },
  ukeireList:{
    overflow: 'hidden',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-end'
  }
})