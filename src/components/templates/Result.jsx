import React from 'react'
import { View, Text } from 'react-native'

import ResultEntry from '../elements/ResultEntry'

import { tilesQuery } from '../../lib/cal/InOut'

export default Result = ({ navigation, route}) => {
  let result = route.params.result
  if (result['tiles']){
    result = result['tiles']
  } else {
    result = [{tile: null, analysis: result}]
  }

  // console.log(result)
  return <>
    {result.map((r, idx) => {
      return <ResultEntry
        tile={r.tile}
        analysis={r.analysis}
        key={idx}
      />
    })}
  </>
}