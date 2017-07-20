import React from 'react';
import { AppRegistry } from 'react-native';
import { Sentry } from 'react-native-sentry';


import NavigationContainer from './src/NavigationContainer';

Sentry.config('https://862af0d2191f496faf1f2f1b5b22d80b:98dff8a67b404635930478b15047d0b2@sentry.io/192724').install();


export default function ReactNativeSample() {
  return (<NavigationContainer />);
}

AppRegistry.registerComponent('ReactNativeSample', () => ReactNativeSample);
