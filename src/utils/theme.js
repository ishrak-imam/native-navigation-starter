import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import {getTheme} from '@shoutem/ui';
import {StyleProvider} from '@shoutem/theme';

const {width} = Dimensions.get('window');
const theme = getTheme();

export const baseColor = '#000000';
export const errorColor = '#a94442';

const textInput = {
  borderWidth: 1,
  width: width - 100,
  paddingVertical: 0,
  height: 40,
  borderRadius: 5
};

const authTextInput = textInput;
const authButton = textInput;

const errorText = {
  color: errorColor,
  fontSize: 13,
  marginTop: 7,
  marginLeft: 2
};

const customTheme = {
  ...theme,
  'shoutem.ui.Button': {
    ...theme['shoutem.ui.Button'],
    '.auth': authButton,
    borderColor: '#000000'
  },
  'shoutem.ui.TextInput': {
    ...theme['shoutem.ui.TextInput'],
    '.auth': authTextInput
  },
  'text': {
    ...theme['text'],
    '.error': errorText
  }
};
console.log('CUSTOM THEME ::: ', customTheme);

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
