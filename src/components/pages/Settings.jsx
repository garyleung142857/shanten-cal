import React, { useContext, useState, useCallback } from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'
import { rulesNames, langsList } from '../../constants/Constants'
import DropDownPicker from 'react-native-dropdown-picker'

import AppContext from '../../lib/AppContext'

const TextLabel = ({text}) => {
  return <View style={styles.settingLabel}>
    <Text style={styles.labelText}>{text}</Text>
  </View>
}


export default Settings = ({navigation, route}) => {
  
  const settings = useContext(AppContext)
  
  const [ddRulesOpen, setddRulesOpen] = useState(false);
  const [rns, setRns] = useState(rulesNames.map(name => {
    return {label: name, value: name}
  }));

  const [ddLangsOpen, setddLangsOpen] = useState(false)
  const [langs, setLangs] = useState(langsList.map(name => {
    return {label: name, value: name}
  }))
  
  const onddLangsOpen = useCallback(() => {
    setddRulesOpen(false)
  }, [])

  const onddRulesOpen = useCallback(() => {
    setddLangsOpen(false)
  }, [])

  return (
    <View>
      <Text style={styles.title}>設定</Text>
      <View style={styles.settingItem}>
        <TextLabel text={'規則'}/>
        <DropDownPicker
          containerStyle={{width: 150}}
          open={ddRulesOpen}
          onOpen={onddRulesOpen}
          value={settings.settingRuleName}
          items={rns}
          setOpen={setddRulesOpen}
          setValue={settings.setRuleName}
          setItems={setRns}
          zIndex={3000}
          zIndexInverse={1000}
        />
      </View>
      <View style={styles.settingItem}>
        <TextLabel text={'夜間模式'} />
        <Switch
          value={settings.settingDarkMode}
          onChange={settings.toggleDarkMode}
        />
      </View>
      <View style={styles.settingItem}>
        <TextLabel text={'詳細解釋'}/>
        <Switch
          value={settings.settingVerbose}
          onChange={settings.toggleVerbose}
        />
      </View>
      <View style={styles.settingItem}>
        <TextLabel text={'語言'}/>
        <DropDownPicker
          containerStyle={{width: 150}}
          open={ddLangsOpen}
          onOpen={onddLangsOpen}
          value={settings.settingLocale}
          items={langs}
          setOpen={setddLangsOpen}
          setValue={settings.setLocale}
          setItems={setLangs}
          zIndex={1000}
          zIndexInverse={3000}
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '700'
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  settingLabel: {
    width: 150,
    justifyContent: 'center'
  },
  labelText: {
    fontSize: 20
  }
})