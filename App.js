import React, { useState, useEffect } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { Text } from 'react-native'

import InputQuery from './src/components/pages/InputQuery'
import Result from './src/components/pages/Result'
import About from './src/components/pages/About'
import Settings from './src/components/pages/Settings'

import AppContext from './src/lib/AppContext'
import { translations } from './src/i18n/i18n'
import { colorTheme } from './src/styles/theme.style'
import Icon from './src/components/elements/Icon'

const Drawer = createDrawerNavigator()

export default function App() {
  const [locale, setLocale] = useState('en')
  const [ruleName, setRuleName] = useState('Riichi')
  const [verbose, setVerbose] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [dict, setDict] = useState(translations[locale])
  const [color, setColor] = useState(darkMode ? 'dark': 'light')

  const toggleVerbose = () => {setVerbose(v => !v)}
  const toggleDarkMode = () => {setDarkMode(v => !v)}

  useEffect(() => {
    setDict(translations[locale])
  }, [locale])

  useEffect(() => {
    setColor(colorTheme[darkMode ? 'dark': 'light'])
  }, [darkMode])

  // hack: https://stackoverflow.com/questions/54069253/the-usestate-set-method-is-not-reflecting-a-change-immediately
  console.log((color || dict) ? '' : '')  // do not remove
  
  const userSettings = {
    cLocale: locale,
    cRuleName: ruleName,
    cVerbose: verbose,
    cDarkMode: darkMode,
    cDict: dict,
    cColor: color,
    setLocale,
    setRuleName,
    toggleDarkMode,
    toggleVerbose
  }

  return (
    <AppContext.Provider value={userSettings}>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerStyle: {backgroundColor: color['appBg']},
            headerStyle: {backgroundColor: color['appBg']},
            headerTintColor: color['text']
          }}
        >
          <Drawer.Screen
            name={'InputQuery'}
            component={InputQuery}
            options={{
              title: dict['inputQuery'],
              drawerIcon:() => <Text style={{color: color['text']}}><Icon name={'magnify'} iconType={'MaterialCommunityIcons'}/></Text>,
              drawerLabelStyle:{color: color['text']}
            }}
          />
          <Drawer.Screen
            name={'Settings'}
            component={Settings}
            options={{
              title: dict['settings'],
              drawerIcon:() => <Text style={{color: color['text']}}><Icon name={'settings'} /></Text>,
              drawerLabelStyle:{color: color['text']}
            }}
          />
          <Drawer.Screen
            name={'About'}
            component={About}
            options={{
              title: dict['about'],
              drawerIcon:() => <Text style={{color: color['text']}}><Icon name={'info-outline'}/></Text>,
              drawerLabelStyle:{color: color['text']}
            }}
          />
          <Drawer.Screen
            name={'Result'}
            component={Result}
            options={{
              title: dict['result'],
              drawerItemStyle: {display: 'none'},  // don't show in the drawer
              unmountOnBlur: true  // don't cache the results
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

