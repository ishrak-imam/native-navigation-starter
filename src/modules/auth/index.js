import React, {Component} from 'react';
import {
  Screen, Text, View, Button
} from '@shoutem/ui';

export default class Auth extends Component {
  render () {
    return (
      <Screen styleName='paper'>
        <View styleName='horizontal'>
          <Button styleName='confirmation'>
            <Text>REMOVE</Text>
          </Button>

          <Button styleName='confirmation secondary'>
            <Text>UPDATE</Text>
          </Button>
        </View>
      </Screen>
    );
  }
}
