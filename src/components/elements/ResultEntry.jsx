import React, {useState, useContext} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'


import Tile from './Tile'
import TextButton from './TextButton'
import Icon from './Icon';

import AppContext from '../../lib/AppContext'

import { interpolateColor } from '../../lib/functions/colorMixing'


const SymbolicResult = ({a}) => {

  return <Text style={styles.resultText}>
    {(a.shanten == 0 && a.ukeire == 0) ?
      <Icon name="checkbox-blank-off-outline" iconType={'MaterialCommunityIcons'}/> :
      <><Icon name="cards-outline" iconType={'MaterialCommunityIcons'}/>{a.ukeire}</>
    }
    {
      a.avgWithImprovment > a.ukeire &&
      <>{`(${a.avgWithImprovment.toFixed(2)})`}</>
    }
    <>  </>
    {
      a.shanten > 0 &&
      <><Icon name="step-forward" iconType={'MaterialCommunityIcons'}/>
      <Icon name="cards" iconType={'MaterialCommunityIcons'}/>
      {a.avgNextUkeire.toFixed(2)}</>
    }
    <>  </>
    {
      a.speedRef && 
      <><Icon name="run-fast" iconType={'MaterialCommunityIcons'}/>
      {a.speedRef.toFixed(2)}%</>
    }
  </Text>
}

const TextResult = ({a, t}) => {
  let s1 = ''
  if (a.shanten == 0){
    if (a.ukeire > 0){
      s1 = t.msgTenpai.replace('{0}', a.ukeire) 
    } else {
      s1 = t.msgKaraten
    }
    if (a.avgWithImprovment > a.ukeire){
      s1 += t.msgAvgWithImp.replace('{0}', a.avgWithImprovment.toFixed(2))
    }
  } else {
    s1 = t.msgUkeire.replace('{0}', a.ukeire) 
    if (a.avgWithImprovment > a.ukeire){
      s1 += t.msgAvgWithImp.replace('{0}', a.avgWithImprovment.toFixed(2))
    }
    s1 += t.msgNextUkeire.replace('{0}', a.avgNextUkeire.toFixed(2))
    if (a.speedRef){
      s1 += t.msgSpeedRef.replace('{0}', a.speedRef.toFixed(2))
    }
  }

  return <Text style={styles.resultText}>
    {s1}
  </Text>
}

export default ResultEntry = ({tile, analysis}) => {

  const context = useContext(AppContext)
  const t = context.cDict

  const backgroundColorStr = interpolateColor(analysis.shanten - 1, analysis.avgNextUkeire, false)
  const borderColorStr = interpolateColor(analysis.shanten, analysis.ukeire, true)

  const [showUL, setShowUL] = useState(false)

  return <View style={[
      styles.resultEntry,
      {backgroundColor: backgroundColorStr, borderColor: borderColorStr}
    ]}>
    {tile && <View style={styles.discardTile}><Tile
      tileName={tile}
    /></View>}
    <View style={styles.resultMiddle}>
      {context.cVerbose ? <TextResult a={analysis} t={t} />: <SymbolicResult a={analysis}/>}
      {showUL && <View style={styles.ukeireList}>
        {analysis.ukeireList.map((tileName, idx) => {
          return <Tile key={idx} tileName={tileName} height={30}/>
        })}
      </View>}
    </View>
    <View style={styles.viewUkeireBtn}>
      <TextButton
        iconLabel={'more-vert'}
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
    // borderColor: 'rgb(255, 0, 0)',
    // backgroundColor: 'pink',
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