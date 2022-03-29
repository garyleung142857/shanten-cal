import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet, ActivityIndicator, Alert } from 'react-native'

import Hand from '../elements/Hand'
import ResultEntry from '../elements/ResultEntry'

import { sortTiles } from '../../lib/functions/hands';
const { tilesQuery } = require('../../lib/cal/InOut')

export default Result = ({ navigation, route}) => {
  // const result = route.params.result
  let agari
  let optShantenStr
  let infShantenStr
  let optDiscards = []  // discards with shanten being optimal
  let infDiscards = []  // discards with shanten not being optimal
  
  let hand = [...route.params.query]
  sortTiles(hand)
  const [result, setResult] = useState(null)

  useEffect(() => {
    tilesQuery(hand).then(r => {
      setResult(r)
    }, err => {
      Alert.alert('相公', err)  // TODO: Route back to query
    })
  }, [])

  if (result === null){
    return <View style={{flex : 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color="#0000ff"/>
    </View> 
  } else {
    const resShanten = result['shanten']
    agari = resShanten === -1  // already a winning hand
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
    optShantenStr = resShanten === 0 ? '聽牌' : `${resShanten}向聽`
    infShantenStr = infDiscards.length > 0 ? `${resShanten + 1}向聽` : null
  
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