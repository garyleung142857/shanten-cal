import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InputQuery from './src/components/templates/InputQuery';
import Tile from './src/components/elements/Tile';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <InputQuery />
    </View>
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
