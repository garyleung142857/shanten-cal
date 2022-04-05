import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'

import InputQuery from './src/components/templates/InputQuery'
import Result from './src/components/templates/Result'
import About from './src/components/pages/About'
import Settings from './src/components/pages/Settings'

import AppContext from './src/lib/AppContext'
import { translations } from './src/i18n/i18n'
import Icon from './src/components/elements/Icon'

const Drawer = createDrawerNavigator()

export default function App() {
  const [locale, setLocale] = useState('tc')
  const [ruleName, setRuleName] = useState('Riichi')
  const [verbose, setVerbose] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [dict, setDict] = useState(translations[locale])

  const toggleVerbose = () => {setVerbose(v => !v)}
  const toggleDarkMode = () => {setDarkMode(v => !v)}

  useEffect(() => {
    setDict(translations[locale])
  }, [locale])

  const userSettings = {
    cLocale: locale,
    cRuleName: ruleName,
    cVerbose: verbose,
    cDarkMode: darkMode,
    cDict: dict,
    setLocale,
    setRuleName,
    toggleDarkMode,
    toggleVerbose
  }

  return (
    <AppContext.Provider value={userSettings}>
      <NavigationContainer style={styles.container}>
        <Drawer.Navigator>
          <Drawer.Screen
            name={'InputQuery'}
            component={InputQuery}
            options={{
              title: dict['inputQuery'],
              drawerIcon:() => <Icon name={'magnify'} iconType={'MaterialCommunityIcons'}/>
            }}
          />
          <Drawer.Screen
            name={'Settings'}
            component={Settings}
            options={{
              title: dict['settings'],
              drawerIcon:() => <Icon name={'settings'} />
            }}
          />
          <Drawer.Screen
            name={'About'}
            component={About}
            options={{
              title: dict['about'],
              drawerIcon:() => <Icon name={'info-outline'}/>
            }}
          />
          <Drawer.Screen
            name={'Result'}
            component={Result}
            options={{
              drawerItemStyle: {display: 'none'},  // don't show in the drawer
              unmountOnBlur: true  // don't cache the results
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
