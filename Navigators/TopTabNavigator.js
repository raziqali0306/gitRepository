import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '../Screens/HomeScreen';
import Toppacks from '../Screens/ToppacksScreen';
import {set} from 'react-native-reanimated';

const TopTabNavigator = () => {
  const [importData, setImportData] = useState([]);
  const [dependencies, setDependencies] = useState([]);
  const [devDependencies, setDevDependencies] = useState([]);
  const [topPacks, setTopPacks] = useState(new Map());

  const Tab = createMaterialTopTabNavigator();

  useEffect(() => {
    getDependencies();
  }, [importData]);

  useEffect(() => {
    getDevDependencies();
  }, [dependencies]);

  useEffect(() => {
    getTopPacks();
  }, [devDependencies]);

  const onImport = data => {
    setImportData(data);
  };

  const getDependencies = () => {
    if (importData != null) {
      console.log('=================  getDependencies');
      fetch(`https://api.github.com/repos/${importData.full_name}/contents`)
        .then(response => response.json())
        .then(resp => {
          console.log('getDependencies : ' + resp);
          setDependencies(resp);
        })
        .catch(error => {
          console.error('getdependencies: ' + error);
        });
    }
  };

  const getDevDependencies = () => {
    console.log('=================  getDevDependencies');
    let downloadURL;
    if (dependencies && dependencies.message) {
      console.log('no package.json found');
      return;
    } else {
      dependencies.map(item => {
        if (item.name === 'package.json') {
          downloadURL = item.download_url;
        }
      });
      console.log('downloadURL : ' + downloadURL);
      console.log(topPacks);
    }
    if (downloadURL != null) {
      fetch(`${downloadURL}`)
        .then(response => response.json())
        .then(resp => {
          if (resp && resp.devDependencies) {
            let devDep = [];
            Object.keys(resp.devDependencies).map(dependency => {
              devDep.unshift(dependency);
            });
            console.log(devDep);
            setDevDependencies(devDep);
          }
        })
        .catch(error => {
          console.error('getDevdependencies: ' + error);
        });
    }
  };

  const getTopPacks = () => {
    // TODO GET TOPPACKS
    console.log('=================  topPacks');
    let map = topPacks;
    devDependencies.map(element => {
      if (map.has(element)) {
        map.set(element, parseInt(map.get(element)) + 1);
      } else {
        map.set(element, 1);
      }
    });
    console.log(map);
  };

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
          children={() => <Home onImport={onImport} />}
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
