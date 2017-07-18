import _ from 'lodash';

import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Greeting from './Greeting';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default class GreetingsList extends Component {

  static propTypes = {
    names: PropTypes.array.required,
  };


  static handleFunction(param) {
    Alert.alert(`Received: ${JSON.stringify(param)}`);
  }

  render() {
    const greetings = _.map(this.props.names,
    name => (<Greeting key={name} name={name} handleFunction={this.handleFunction} />));

    return (
      <View style={styles.container}>
        {greetings}
      </View>
    );
  }
}

GreetingsList.defaultProps = {
  names: [],
};

GreetingsList.propType = {
  names: PropTypes.arrayOf(PropTypes.string).required,
};
