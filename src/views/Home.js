import React, {Component} from 'react';
import {Button} from 'react-native';

export default class Home extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <>
        <Button
          title="React Native Svg Charts"
          onPress={() => navigate('ReactNativeSvgCharts')}
        />
        <Button
          title="React Native Chart Kit"
          onPress={() => navigate('ReactNativeChartKit')}
        />
      </>
    );
  }
}
