import React, { useContext, useState, useCallback, useEffect } from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'
import { rulesNames, langOpts } from '../../constants/Constants'
import DropDownPicker from 'react-native-dropdown-picker'

import AppContext from '../../lib/AppContext'

const TextLabel = ({text}) => {
  return <View style={styles.settingLabel}>
    <Text style={styles.labelText}>{text}</Text>
  </View>
}


export default Settings = ({navigation, route}) => {
  
  const context = useContext(AppContext)
  const t = context.cDict

  const [ddRulesOpen, setddRulesOpen] = useState(false);
  const [rns, setRns] = useState(rulesNames.map(name => {
    return {label: t['rule' + name], value: name}
  }));

  const [ddLangsOpen, setddLangsOpen] = useState(false)
  const [langs, setLangs] = useState(Object.entries(langOpts).map(([k, v]) => {
    return {label: v, value: k}
  }))
  
  const onddLangsOpen = useCallback(() => {
    setddRulesOpen(false)
  }, [])

  const onddRulesOpen = useCallback(() => {
    setddLangsOpen(false)
  }, [])

  useEffect(() => {
    setRns(rulesNames.map(name => {
      return {label: t['rule' + name], value: name}
    }))
  }, [context.cDict])

  return (
    <View>
      <Text style={styles.title}>{t.settings}</Text>
      <View style={styles.settingItem}>
        <TextLabel text={t.rule}/>
        <DropDownPicker
          containerStyle={{width: 150}}
          open={ddRulesOpen}
          onOpen={onddRulesOpen}
          value={context.cRuleName}
          items={rns}
          setOpen={setddRulesOpen}
          setValue={context.setRuleName}
          zIndex={3000}
          zIndexInverse={1000}
        />
      </View>
      <View style={styles.settingItem}>
        <TextLabel text={t.darkMode} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text>{context.cDarkMode ? t.stateOn : t.stateOff}</Text>
          <Switch
            value={context.cDarkMode}
            onChange={context.toggleDarkMode}
          />
        </View>
      </View>
      <View style={styles.settingItem}>
        <TextLabel text={t.verbose}/>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text>{context.cVerbose ? t.stateOn : t.stateOff}</Text>
          <Switch
            value={context.cVerbose}
            onChange={context.toggleVerbose}
          />
        </View>
      </View>
      <View style={styles.settingItem}>
        <TextLabel text={t.language}/>
        <DropDownPicker
          containerStyle={{width: 150}}
          open={ddLangsOpen}
          onOpen={onddLangsOpen}
          value={context.cLocale}
          items={langs}
          setOpen={setddLangsOpen}
          setValue={context.setLocale}
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