import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

import Hand from '../elements/Hand'
import ResultEntry from '../elements/ResultEntry'

export default Result = ({ navigation, route}) => {
  let result = route.params.result
  let agari = false
  if (result['tiles']){
    result = result['tiles']
  } else {
    agari = result['shanten'] === -1  // already a winning hand
    result = [{tile: null, analysis: result}]
  }
  
  return <>
    <View style={styles.hand}>
      <Hand tiles={route.params.query} />
    </View>
    {!agari && <ScrollView>
      {result.map((r, idx) => {
        return <ResultEntry
          tile={r.tile}
          analysis={r.analysis}
          key={idx}
        />})}
    </ScrollView>}
    {agari && <Text style={styles.agariText}>
      和牌
    </Text>}
  </> 
}

const styles = StyleSheet.create({
  hand: {
    
  },
  agariText: {
    fontSize: 36,
    padding: 10,
    fontWeight: "700",
    color: 'red'
  }
})