import React from 'react';
import {StatusBar} from 'react-native';
import colors from './src/styles/global/colors';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/views/Home';
import ReactNativeSvgCharts from './src/views/GraphScreens/ReactNativeSvgCharts';
import ReactNativeChartKit from './src/views/GraphScreens/ReactNativeChartKit';
import GoogleCharts from './src/views/GraphScreens/GoogleCharts';
import ChartJs from './src/views/GraphScreens/ChartJs';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    ReactNativeSvgCharts: {screen: ReactNativeSvgCharts},
    ReactNativeChartKit: {screen: ReactNativeChartKit},
    GoogleCharts: {screen: GoogleCharts},
    ChartJs: {screen: ChartJs},
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
