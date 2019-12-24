import React from 'react';
import {StatusBar} from 'react-native';
import colors from './src/styles/global/colors';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/views/Home';
import Graph from './src/views/Graph';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    Graph: {screen: Graph},
  },
  {
    initialRouteName: 'Home',
  },
);

const Navigator = createAppContainer(MainNavigator);

const App = props => {
  return (
    <>
      <StatusBar
        backgroundColor={colors.statusBarColor}
        barStyle="light-content"
      />

      <Navigator />
    </>
  );
};

export default App;
