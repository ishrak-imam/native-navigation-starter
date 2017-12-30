import { Navigation } from 'react-native-navigation';
import React from 'react';
import {
  View, Text
} from 'react-native';

const First = () => (<View><Text>First</Text></View>);
const Second = () => (<View><Text>Second</Text></View>);

// register all screens of the app (including internal ones)
export function registerScreens () {
  Navigation.registerComponent('First', () => First);
  Navigation.registerComponent('Second', () => Second);
}
