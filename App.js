import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

import InputQuery from './src/components/templates/InputQuery';
import Result from './src/components/templates/Result'
import Settings from './src/components/pages/Settings';

import AppContext from './src/lib/AppContext';

const Stack = createNativeStackNavigator()

export default function App() {
  const [locale, setLocale] = useState('中文')
  const [ruleName, setRuleName] = useState('Riichi')
  const [verbose, setVerbose] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  const toggleVerbose = () => {setVerbose(v => !v)}
  const toggleDarkMode = () => {setDarkMode(v => !v)}

  const userSettings = {
    settingLocale: locale,
    settingRuleName: ruleName,
    settingVerbose: verbose,
    settingDarkMode: darkMode,
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
