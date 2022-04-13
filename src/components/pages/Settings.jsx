import React, { useContext, useState, useCallback, useEffect } from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'
import { rulesNames, langOpts } from '../../constants/Constants'
import DropDownPicker from 'react-native-dropdown-picker'

import AppContext from '../../lib/AppContext'

const TextLabel = ({text, textColor}) => {
  return <View style={styles.settingLabel}>
    <Text style={[styles.labelText, {color: textColor}]}>{text}</Text>
  </View>
}


export default Settings = ({navigation, route}) => {
  
  const context = useContext(AppContext)
  const t = context.cDict
  const color = context.cColor

  const [ddRulesOpen, setddRulesOpen] = useState(false);
  const [rns, setRns] = useState(rulesNames.map(name => {
    return {label: t['rule' + name], value: name}
  }));

  const [ddLangsOpen, setddLangsOpen] = useState(false)

  let langs = Object.entries(langOpts).map(([k, v]) => {
    return {label: v, value: k}
  })
  
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

  useEffect(() => {
    DropDownPicker.setTheme(context.cDarkMode ? 'DARK' : 'LIGHT')
  }, [context.cDarkMode])

  return (
    <View style={[styles.settings, {backgroundColor: color.appBg}]}>
      <Text style={[styles.title, {color: color.text}]}>{t.settings}</Text>
      <View style={styles.settingItem}>
        <TextLabel text={t.rule} textColor={color.text}/>
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
        <TextLabel text={t.darkMode} textColor={color.text}/>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: color.text}}>{context.cDarkMode ? t.stateOn : t.stateOff}</Text>
          <Switch
            value={context.cDarkMode}
            onValueChange={context.toggleDarkMode}
          />
        </View>
      </View>
      <View style={styles.settingItem}>
        <TextLabel text={t.verbose} textColor={color.text}/>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: color.text}}>{context.cVerbose ? t.stateOn : t.stateOff}</Text>
          <Switch
            value={context.cVerbose}
            onValueChange={context.toggleVerbose}
          />
        </View>
      </View>
      <View style={styles.settingItem}>
        <TextLabel text={t.language} textColor={color.text}/>
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
  settings: {
    flex: 1,
    padding: 10
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
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