/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Navigator from './src/navigator/navigator'

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.appContainer} >
        <Navigator/>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  appContainer: {
      flex: 1,
  }
});

export default App;
