import React, { Component, PropTypes } from 'react';
import { ScrollView, Button, StyleSheet, View } from 'react-native';

import { Sentry, SentrySeverity } from 'react-native-sentry';

import Info from '../components/Info';

import { GREETINGS_SCENE_NAME } from '../screens/GreetingsScreen';
import { JSX_SCENE_NAME } from '../screens/JsxScreen';
import { STATE_SCENE_NAME } from '../screens/StateScreen';

export const HOME_SCENE_NAME = 'HOME_SCENE';

// Add sentry DSN config
Sentry.config('https://862af0d2191f496faf1f2f1b5b22d80b:98dff8a67b404635930478b15047d0b2@sentry.io/192724').install();

Sentry.setTagsContext({
  environment: 'production',
  react: true,
});

Sentry.setUserContext({
  email: 'arnaud.lher@laposte.net',
  userID: '123451',
  username: 'alher',
  extra: {
    isAdmin: false,
  },
});

const styles = StyleSheet.create({
  margin: {
    marginTop: 25,
  },
});

export default class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);

    this.navigate = this.props.navigation.navigate;

    this.navigateToGreetings = this.navigateToGreetings.bind(this);
    this.navigateToJsx = this.navigateToJsx.bind(this);
    this.navigateToState = this.navigateToState.bind(this);
  }

  navigateToGreetings() {
    Sentry.captureMessage('Move to GREETINGS screen', {
      level: SentrySeverity.Info,
    });
    this.navigate(GREETINGS_SCENE_NAME);
  }

  navigateToJsx() {
    Sentry.captureMessage('Move to JSX screen (risky)', {
      level: SentrySeverity.Warning,
    });
    this.navigate(JSX_SCENE_NAME);
  }

  navigateToState() {
    this.navigate(STATE_SCENE_NAME);
  }

  render() {
    return (
      <ScrollView>
        <Info />
        <View style={styles.margin}>
          <Button
            onPress={this.navigateToGreetings}
            title="Greetings"
          />
        </View>

        <View style={styles.margin}>
          <Button
            onPress={this.navigateToJsx}
            title="Jsx"
          />
        </View>
        <View style={styles.margin}>
          <Button
            onPress={this.navigateToState}
            title="State"
          />
        </View>
        <View style={styles.margin}>
          <Button
            onPress={() => {
              Sentry.captureException(new Error('Exception screen not exists !'));
            }}
            title="Send exception"
          />
        </View>
        <View style={styles.margin}>
          <Button
            onPress={() => {
              throw new Error('Sentry Native crash launched !');
            }}
            title="Native crash"
          />
        </View>
      </ScrollView>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.any.isRequired,
  }).isRequired,
};
