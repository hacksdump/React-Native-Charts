import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

export default class extends Component {
  render() {
    const screenWidth = Dimensions.get('window').width;
    const chartConfig = {
      backgroundGradientFrom: '#FFF',
      backgroundGradientFromOpacity: 1,
      backgroundGradientTo: '#FFF',
      backgroundGradientToOpacity: 1,
      color: (opacity = 1) => `rgba(50, 150, 50, ${opacity})`,
      strokeWidth: 3,
      barPercentage: 0.5,
    };
    const data = {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      datasets: [
        {
          data: new Array(12)
            .fill()
            .map((a, i) => (a = parseInt(Math.random() * 100))),
        },
      ],
    };

    return (
      <LineChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
      />
    );
  }
}
