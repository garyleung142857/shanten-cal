import React from 'react'
import { View, Text } from 'react-native'
import { Tile } from './Tile'


export default ResultEntry = ({tile, analysis}) => {
  return <Text>
    {tile}
    {analysis.ukeire}
  </Text>
}