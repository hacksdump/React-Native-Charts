import React, {Component} from 'react';
import GraphButton from '../components/GraphButton';

export default class Home extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <>
        <GraphButton title="React Native Svg Charts" navigate={navigate} />
        <GraphButton title="React Native Chart Kit" navigate={navigate} />
        <GraphButton title="Google Charts" navigate={navigate} />
        <GraphButton title="Chart Js" navigate={navigate} />
      </>
    );
  }
}
