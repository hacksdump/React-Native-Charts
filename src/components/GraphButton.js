import React, {Component} from 'react';
import {Button} from 'react-native';

export default class extends Component {
  render() {
    const navigate = this.props.navigate;
    const title = this.props.title;
    const navigateTo = title.replace(/\s/g, '');
    return (
      <>
        <Button title={title} onPress={() => navigate(navigateTo)} />
      </>
    );
  }
}
