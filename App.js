import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TopTabNavigator from './Navigators/TopTabNavigator';
const App = () => {
  return (
    <SafeAreaProvider>
      <TopTabNavigator />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
