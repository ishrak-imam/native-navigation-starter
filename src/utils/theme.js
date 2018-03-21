import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import {getTheme} from '@shoutem/ui';
import {StyleProvider} from '@shoutem/theme';
const {width} = Dimensions.get('window');
const theme = getTheme();
console.log('THEME ::: ', theme);
const customTheme = {
  ...theme,
  'shoutem.ui.Button': {
    ...theme['shoutem.ui.Button'],
    borderColor: '#000000'
  },
  'shoutem.ui.TextInput': {
    ...theme['shoutem.ui.TextInput'],
    borderWidth: 1,
    width: width - 100,
    paddingVertical: 0,
    height: 45
  }
};

export const connectTheme = Scene => {
  return class extends Component {
    render () {
      return (
        <StyleProvider style={customTheme}>
          <Scene {...this.props} />
        </StyleProvider>
      );
    }
  };
};
