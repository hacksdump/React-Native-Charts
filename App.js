import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import colors from './src/styles/global/colors';

const App = () => {
  return (
    <>
      <StatusBar
        backgroundColor={colors.statusBarColor}
        barStyle="light-content"
      />
      <View>
        <Text>Charts Comparison</Text>
      </View>
    </>
  );
};

export default App;
