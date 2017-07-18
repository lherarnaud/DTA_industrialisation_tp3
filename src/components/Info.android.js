import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const $color333333 = '#333333';
const $colorF5FCFF = '#F5FCFF';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: $colorF5FCFF,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: $color333333,
    marginBottom: 5,
  },
});

export default function Info() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
      <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
      <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
    </View>
  );
}
