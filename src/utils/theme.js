
import React, {Component} from 'react';
import {getTheme} from '@shoutem/ui';
import {StyleProvider} from '@shoutem/theme';
const theme = getTheme();
const customTheme = {
  ...theme,
  'shoutem.ui.Button': {
    ...theme['shoutem.ui.Button'],
    borderColor: '#000000'
  }
};

export const connectTheme = Scene => {
  return class extends Component {
    render () {
      return (
        <StyleProvider style={customTheme}>
          <Scene />
        </StyleProvider>
      );
    }
  };
};
