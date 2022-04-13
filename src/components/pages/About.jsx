import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import AppContext from '../../lib/AppContext'

export default About = () => {

  const context = useContext(AppContext)
  const t = context.cDict
  const color = context.cColor
  const lang = context.cLocale

  if (lang == 'en'){
    return (
      <View style={[styles.about, {backgroundColor: color.appBg}]}>
        <Text style={{color: color.text}}>
          <Text style={styles.title}>{t.about}{'\n'}</Text>
          <Text style={styles.para}>
            <Text>{'A project for course COMP7506\n'}</Text>
          </Text>
          <Text style={styles.para}>
            <Text style={styles.subtitle}>{'Mahjong Efficiency Calculator\n'}</Text>
            <Text>{'Input a hand to calculate key statistics for winning the hand. Support many rule variants.\n'}</Text>
          </Text>
          <Text></Text>
        </Text>
      </View>
    )
  } else {
    return (
      <View style={[styles.about, {backgroundColor: color.appBg}]}>
        <Text style={[styles.title, {color: color.text}]}>{t.about}</Text>
      </View>
    )
  }

}


const styles = StyleSheet.create({
  about: {
    flex: 1,
    padding: 10
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  para: {
    fontSize: 18,
    fontWeight: 'normal',
    lineHeight: 20,
    marginTop: 24,
  },
  em: {
    fontWeight: 'bold'
  }

})