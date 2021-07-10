import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '../Screens/HomeScreen';
import Toppacks from '../Screens/ToppacksScreen';

const TopTabNavigator = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#e91e63',
          labelStyle: {fontSize: 14},
          style: {backgroundColor: '#505050'},
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{tabBarLabel: 'Home'}}
        />
        <Tab.Screen
          name="Toppacks"
          component={Toppacks}
          options={{tabBarLabel: 'Toppacks'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tab: {},
});

export default TopTabNavigator;
