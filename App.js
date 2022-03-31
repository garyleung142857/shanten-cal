import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

import InputQuery from './src/components/templates/InputQuery';
import Result from './src/components/templates/Result'
import Settings from './src/components/pages/Settings';

import AppContext from './src/lib/AppContext';
import { translations } from './src/i18n/i18n';

const Stack = createNativeStackNavigator()

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
        <Stack.Navigator>
          <Stack.Screen
            name="InputQuery"
            component={InputQuery}
          />
          <Stack.Screen
            name="Result"
            component={Result}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
          />
        </Stack.Navigator>
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
