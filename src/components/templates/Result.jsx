import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

import Hand from '../elements/Hand'
import ResultEntry from '../elements/ResultEntry'

export default Result = ({ navigation, route}) => {
  let result = route.params.result
  if (result['tiles']){
    result = result['tiles']
  } else {
    result = [{tile: null, analysis: result}]
  }

  // console.log(result)
  return <>
    <View style={styles.hand}>
      <Hand tiles={route.params.query} />
    </View>
    <ScrollView>
      {result.map((r, idx) => {
        return <ResultEntry
          tile={r.tile}
          analysis={r.analysis}
          key={idx}
        />
      })}
    </ScrollView>
  </> 
}

const styles = StyleSheet.create({
  hand: {
    
  },
})