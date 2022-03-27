import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

import Hand from '../elements/Hand'
import ResultEntry from '../elements/ResultEntry'

export default Result = ({ navigation, route}) => {
  const result = route.params.result
  const resShanten = result['shanten']
  const agari = resShanten === -1  // already a winning hand
  let optDiscards = []  // discards with shanten being optimal
  let infDiscards = []  // discards with shanten not being optimal

  if (result['tiles']){
    result['tiles'].forEach(r => {
      if (r.analysis.shanten == resShanten){
        optDiscards.push(r)
      } else {
        infDiscards.push(r)
      }
    })
  } else {
    optDiscards = [{tile: null, analysis: result}]
  }
  let optShantenStr = resShanten === 0 ? '聽牌' : `${resShanten}向聽`
  let infShantenStr = infDiscards.length > 0 ? `${resShanten + 1}向聽` : null
  
  return <>
    <View style={styles.hand}>
      <Hand tiles={route.params.query} />
    </View>
    {!agari && <ScrollView>
      <Text style={styles.shantenText}>{optShantenStr}</Text>
      {optDiscards.map((r, idx) => {
        return <ResultEntry
          tile={r.tile}
          analysis={r.analysis}
          key={idx}
        />})}
      <Text style={styles.shantenText}>{infShantenStr}</Text>
      {infDiscards.map((r, idx) => {
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
  },
  shantenText: {
    fontSize: 20,
    fontWeight: '700'
  }
})