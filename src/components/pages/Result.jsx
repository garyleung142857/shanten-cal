import React, { useState, useEffect, useContext } from 'react'
import { View, Text, ScrollView, StyleSheet, ActivityIndicator, Alert, Button } from 'react-native'

import Hand from '../elements/Hand'
import ResultEntry from '../elements/ResultEntry'
import TextButton from '../elements/TextButton'

import AppContext from '../../lib/AppContext'

import { sortTiles } from '../../lib/functions/hands';
const { tilesQuery } = require('../../lib/cal/InOut')

export default Result = ({ navigation, route}) => {
  
  const context = useContext(AppContext)
  const t = context.cDict

  let agari
  let optShantenStr
  let infShantenStr
  let optDiscards = []  // discards with shanten being optimal
  let infDiscards = []  // discards with shanten not being optimal
  let solo  // true if hand is 3n + 1

  let hand = [...route.params.query]
  sortTiles(hand)
  const [result, setResult] = useState(null)

  useEffect(() => {
    tilesQuery(hand, context.cRuleName).then(r => {
      setResult(r)
    }, err => {
      Alert.alert(t.error, err, [{
        text: t.ok,
        onPress: () => navigation.navigate('InputQuery', {query: route.params.query}),
        style: 'default'
      }])
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
      solo = false
    } else {
      optDiscards = [{tile: null, analysis: result}]
      solo = true
    }
    optShantenStr = resShanten === 0 ? t.tenpai : t.shanten.replace('{0}', resShanten)
    infShantenStr = infDiscards.length > 0 ? t.shanten.replace('{0}', resShanten + 1) : null
  
    return <View style={styles.result}>
      <View style={styles.hand}>
        <Hand tiles={hand} onTilePressed={() => {}}/>
      </View>
      {!agari && <ScrollView style={styles.resultItems}>
        <Text style={styles.shantenText}>{optShantenStr}</Text>
        {optDiscards.map((r, idx) => {
          return <ResultEntry
            tile={r.tile}
            analysis={r.analysis}
            key={idx}
            initialShowUl={solo}
          />})}
        <Text style={styles.shantenText}>{infShantenStr}</Text>
        {infDiscards.map((r, idx) => {
          return <ResultEntry
            tile={r.tile}
            analysis={r.analysis}
            key={idx}
            initialShowUl={solo}
          />})}
      </ScrollView>}
      {agari &&  <ScrollView style={styles.resultItems}>
        <Text style={styles.agariText}>
          {t.msgAgari}
        </Text>
      </ScrollView>}
      <View style={styles.navBtnHolder}>
        <TextButton
          onPress={() => navigation.navigate('InputQuery', {query: hand})}
          textLabel={t.newHand}
        ></TextButton>
        <TextButton
          onPress={() => navigation.navigate('Settings')}
          textLabel={t.settings}
        ></TextButton>
      </View>
    </View> 
  }
  
}

const styles = StyleSheet.create({
  result: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  hand: {

  },
  resultItems: {
    alignSelf: 'stretch'
  },
  agariText: {
    fontSize: 36,
    padding: 10,
    fontWeight: "700",
  },
  shantenText: {
    fontSize: 20,
    fontWeight: '700'
  },
  navBtnHolder: {
    height: 50,
    padding: 5,
    flexDirection: 'row',
    flexGrow: 0,
    backgroundColor: 'darkblue'
  },
})