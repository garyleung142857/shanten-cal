import React, { useContext } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import * as Linking from 'expo-linking';

import Icon from '../elements/Icon'

import AppContext from '../../lib/AppContext'


const Anchor = ({href, children}) => {
  return <Text
      onPress={() => Linking.openURL(href)}
    >
      {children}
    </Text>
}


export default About = () => {

  const context = useContext(AppContext)
  const color = context.cColor
  const lang = context.cLocale

  if (lang == 'en'){
    return (
      <ScrollView style={[styles.about, {backgroundColor: color.appBg}]}>
        <Text style={{color: color.text}}>
          <Text style={styles.title}>{'About\n'}</Text>
          <Text style={styles.para}>
            <Text>{'A project for HKU course COMP7506\n'}</Text>
          </Text>
          {'\n'}
          <Text style={styles.para}>
            <Text style={styles.subtitle}>{'Mahjong Efficiency Calculator\n'}</Text>
            <Icon name={'circle-small'} iconType={'MaterialCommunityIcons'} size={14}></Icon>
            <Text>{'Calculate key statistics for winning the hand.\n'}</Text>
            <Icon name={'circle-small'} iconType={'MaterialCommunityIcons'} size={14}></Icon>
            <Text>{'Support many rule variants. (See Settings)\n'}</Text>
          </Text>
          {'\n'}
          <Text style={styles.para}>
            <Text style={styles.subtitle}>{'Acknowledgement\n'}</Text>
            <Text>{'Uses '} </Text>
            <Anchor href="https://github.com/FluffyStuff/riichi-mahjong-tiles">
              <Text style={styles.ul}>{'FluffyStuff/riichi-mahjong-tiles'}</Text>
            </Anchor>
            <Text>{' as icons for the tiles, which are licensed under '}</Text>
            <Anchor href="https://creativecommons.org/licenses/by/4.0/">
              <Text style={styles.ul}>{'Creative Commons Attribution 4.0 International License'}</Text>
            </Anchor>
            <Text>{'. \n'}</Text>
          </Text>
          {'\n'}
          <Text style={styles.para}>
            <Text style={styles.subtitle}>{'Meaning of statistics\n'}</Text>
            
            <Text>{'The statistics given by the calculator include the following:\n'}</Text>
            <Text style={styles.lineBreak}>{'\n'}</Text>
            
            <Text style={styles.em}>{'Shanten'}</Text>
            <Text>{' : The number of tiles needed for reaching '}</Text>
            <Text style={styles.it}>{'Tenpai'}</Text><Text>{'. '}</Text>
            <Text>{'A hand is in the state of Tenpai when there is at least a type of tile that forms a winning hand with the hand.\n'}</Text>
            <Text style={styles.lineBreak}>{'\n'}</Text>

            <Text style={styles.em}>{'Waiting for n tiles '}</Text>
            <Icon name="cards-outline" iconType={'MaterialCommunityIcons'} size={14}/>
            <Text>{' : When the hand is in tenpai, it is the number of unseen tiles to form a winning hand. If there are 0 such tiles left, it will be '}</Text>
            <Text style={styles.it}>{'Karaten'}</Text><Text>{'.\n'}</Text>
            <Text style={styles.lineBreak}>{'\n'}</Text>

            <Text style={styles.em}>{'Accepting n tiles '}</Text>
            <Icon name="cards-outline" iconType={'MaterialCommunityIcons'} size={14}/>
            <Text>{' : Number of unseen tiles to reduce shanten number by 1.\n'}</Text>
            <Text style={styles.lineBreak}>{'\n'}</Text>

            <Text style={styles.em}>{'With n tiles improvement on avg.'}</Text>
            <Text>{' : Equivalent to the last 2 statistics, but with consideration on the possible improvments for drawing new tiles.\n'}</Text>
            <Text>{'Will be displayed in brackets in non-verbose mode.\n'}</Text>
            <Text style={styles.lineBreak}>{'\n'}</Text>

            <Text style={styles.em}>{'Accepting n tiles next shanten on avg.'}</Text>
            <Icon name="step-forward" iconType={'MaterialCommunityIcons'} size={14}/>
            <Icon name="cards" iconType={'MaterialCommunityIcons'} size={14}/>
            <Text>{' : The weighted average on acceptable tiles in the next shanten.\n'}</Text>
            <Text style={styles.lineBreak}>{'\n'}</Text>

            <Text style={styles.em}>{'Speed '}</Text>
            <Icon name="run-fast" iconType={'MaterialCommunityIcons'} size={14}/>
            <Text>{' : An indicator on the progress of the hand. Will only display when the hand is in 2- or 1-Shanten.\n'}</Text>
            <Text>{'In 1-Shanten, it is the approximate chance of winning in at most 10 draws. \n'}</Text>
            <Text>{'In 2-Shanten, it is the approximate chance of reaching tenpai in at most 3 draws. \n'}</Text>
            <Text style={styles.lineBreak}>{'\n'}</Text>

          </Text>
        </Text>

      </ScrollView>
    )
  } else {
    return (
      <View style={[styles.about, {backgroundColor: color.appBg}]}>
        <Text style={[styles.title, {color: color.text}]}>{'關於'}</Text>
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
    lineHeight: 28
  },
  para: {
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 20
  },
  em: {
    fontWeight: 'bold'
  },
  it: {
    fontStyle: 'italic'
  },
  ul: {
    textDecorationLine: 'underline'
  },
  lineBreak: {
    fontSize: 6,
    lineHeight: 6
  }

})