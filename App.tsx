import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppBar from './src/components/AppBar'
import MemoListScreen from './src/screens/MemoListScreen'
import MemoDetailScreen from './src/screens/MemoDetailScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />
      <MemoListScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78
  },
});
