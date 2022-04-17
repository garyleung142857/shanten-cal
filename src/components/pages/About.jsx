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
            <Text style={styles.subtitle}>{'Statistics Types\n'}</Text>
            
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
          {'\n'}
          <Text style={styles.para}>
            <Text style={styles.subtitle}>{'Ranking of Results\n'}</Text>
            <Text>{'When user input 3n+2 tiles, the hand is in discarding state. All discarding options are shown, and ordered as follows:\n'}</Text>
            <Icon name={'circle-small'} iconType={'MaterialCommunityIcons'} size={14}></Icon>
            <Text>{'Shanten number, smaller number ranks first, then \n'}</Text>
            <Icon name={'circle-small'} iconType={'MaterialCommunityIcons'} size={14}></Icon>
            <Text>{'Speed if it exists, else the number of acceptable tiles. Larger first.\n'}</Text>
          </Text>
          {'\n'}
        </Text>
      </ScrollView>
    )
  } else {
    return (
      <ScrollView style={[styles.about, {backgroundColor: color.appBg}]}>
        <Text style={{color: color.text}}>
          <Text style={styles.title}>{'關於\n'}</Text>
          <Text style={styles.para}>
            <Text>{'香港大學COMP7506課程專題項目\n'}</Text>
          </Text>
          {'\n'}
          <Text style={styles.para}>
            <Text style={styles.subtitle}>{'麻雀牌效計算機\n'}</Text>
            <Icon name={'circle-small'} iconType={'MaterialCommunityIcons'} size={14}></Icon>
            <Text>{'計算麻雀牌效等數據\n'}</Text>
            <Icon name={'circle-small'} iconType={'MaterialCommunityIcons'} size={14}></Icon>
            <Text>{'支援多種牌例(參見設定)\n'}</Text>
          </Text>
          {'\n'}
          <Text style={styles.para}>
            <Text style={styles.subtitle}>{'致謝\n'}</Text>
            <Text>{'此程式的麻雀牌圖示採用了 '} </Text>
            <Anchor href="https://github.com/FluffyStuff/riichi-mahjong-tiles">
              <Text style={styles.ul}>{'FluffyStuff/riichi-mahjong-tiles'}</Text>
            </Anchor>
            <Text>{' 內的圖檔，並根據以下授權條款獲得許可: '}</Text>
            <Anchor href="https://creativecommons.org/licenses/by/4.0/">
              <Text style={styles.ul}>{'姓名標示 4.0 國際 (CC BY 4.0)'}</Text>
            </Anchor>
            <Text>{'. \n'}</Text>
          </Text>
          {'\n'}
          <Text style={styles.para}>
            <Text style={styles.subtitle}>{'數據種類\n'}</Text>
            
            <Text>{'計數機提供的數據有以下幾種:\n'}</Text>
            <Text style={styles.lineBreak}>{'\n'}</Text>
            
            <Text style={styles.em}>{'向聽數'}</Text>
            <Text>{' : 還差多少張牌才可以'}</Text>
            <Text style={styles.it}>{'聽牌'}</Text><Text>{'。'}</Text>
            <Text>{'當一手牌在聽牌時，最少有一種牌能令手牌和牌(勝出)。\n'}</Text>
            <Text style={styles.lineBreak}>{'\n'}</Text>

            <Text style={styles.em}>{'聽n張 '}</Text>
            <Icon name="cards-outline" iconType={'MaterialCommunityIcons'} size={14}/>
            <Text>{' : 聽牌時，有多少張未見的牌能令手牌和牌。如果沒有剩餘未見的牌能令手牌和牌，就會成為'}</Text>
            <Text style={styles.it}>{'空聽'}</Text><Text>{'。\n'}</Text>
            <Text style={styles.lineBreak}>{'\n'}</Text>

            <Text style={styles.em}>{'入章 '}</Text>
            <Icon name="cards-outline" iconType={'MaterialCommunityIcons'} size={14}/>
            <Text>{' : 有多少張未見的牌能令向聽數減一。\n'}</Text>
            <Text style={styles.lineBreak}>{'\n'}</Text>

            <Text style={styles.em}>{'改良平均'}</Text>
            <Text>{' : 基本上等同於上述兩項數據，但會考慮摸牌後可能的改良。\n'}</Text>
            <Text>{'關閉了"詳細摸式"後，此據會在括號內顯示。\n'}</Text>
            <Text style={styles.lineBreak}>{'\n'}</Text>

            <Text style={styles.em}>{'下一向聽平均入章 '}</Text>
            <Icon name="step-forward" iconType={'MaterialCommunityIcons'} size={14}/>
            <Icon name="cards" iconType={'MaterialCommunityIcons'} size={14}/>
            <Text>{' : 入章後，下一向聽的加權平均入章數。\n'}</Text>
            <Text style={styles.lineBreak}>{'\n'}</Text>

            <Text style={styles.em}>{'參考速度 '}</Text>
            <Icon name="run-fast" iconType={'MaterialCommunityIcons'} size={14}/>
            <Text>{' : 速度參考指數，只會在手牌一向聽或二向聽時顯示。\n'}</Text>
            <Text>{'一向聽時，參考速度是手牌在未來十次摸牌內，和牌的機會率約算。\n'}</Text>
            <Text>{'二向聽時，參考速度是手牌在未來三次摸牌內，聽牌的機會率約算。\n'}</Text>
            <Text style={styles.lineBreak}>{'\n'}</Text>

          </Text>
          {'\n'}
          <Text style={styles.para}>
            <Text style={styles.subtitle}>{'計算結果的排序\n'}</Text>
            <Text>{'當用家輸入了 3n+2 張牌時，手牌會處於棄牌階段。計算機會顯示每張棄牌的結果，並按下列方法排序\n'}</Text>
            <Icon name={'circle-small'} iconType={'MaterialCommunityIcons'} size={14}></Icon>
            <Text>{'向聽數，由小至大，接着\n'}</Text>
            <Icon name={'circle-small'} iconType={'MaterialCommunityIcons'} size={14}></Icon>
            <Text>{'速度(優先)或入章數，由大至小\n'}</Text>
          </Text>
          {'\n'}
        </Text>
      </ScrollView>
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