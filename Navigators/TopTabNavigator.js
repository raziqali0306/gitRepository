import React from 'react';
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
          activeTintColor: '#FFF',
          inactiveTintColor: '#FFFFFFAA',
          labelStyle: {fontSize: 14},
          style: {backgroundColor: '#181818'},
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

export default TopTabNavigator;
