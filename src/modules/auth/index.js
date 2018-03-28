import React, {Component} from 'react';
import {
  Screen, View,
  Button, Text, ScrollView
} from '@shoutem/ui';
import {
  KeyboardAvoidingView, Animated, Keyboard
} from 'react-native';
import Form from '../shared/forms';
import { LOGIN_FORM, REGISTER_FORM } from '../shared/forms/config';
import {bindFunctions} from '../../utils';

export default class Auth extends Component {
  constructor (props) {
    super(props);
    const {navigator} = props;
    // navigator.setButtons({
    //   leftButtons: [
    //     {
    //       id: 'sideMenu',
    //       component: 'LeftDrawerButton',
    //       passProps: {
    //         navigator
    //       }
    //     }
    //   ]
    // });
    navigator.setDrawerEnabled({
      side: 'left',
      enabled: false
    });
    this.state = {
      tab: 'login'
    };
    bindFunctions.call(this, [
      '_onTabPress', '_logoResize',
      '_onKbrdShow', '_onKbrdHide'
    ]);

    this.logoDim = new Animated.Value(100);
    this.kbrdShow = Keyboard.addListener('keyboardDidShow', this._onKbrdShow);
    this.kbrdHide = Keyboard.addListener('keyboardDidHide', this._onKbrdHide);
  }

  componentWillUnmount () {
    this.kbrdShow.remove();
    this.kbrdHide.remove();
  }

  _onTabPress (tab) {
    this.setState({tab});
  }

  _logoResize (isKbrdOpen) {
    Animated.timing(
      this.logoDim,
      {
        toValue: isKbrdOpen ? 50 : 100,
        duration: 300
      }
    ).start();
  }

  _onKbrdShow () {
    this._logoResize(true);
  }

  _onKbrdHide () {
    this._logoResize(false);
  }

  render () {
    const {tab} = this.state;
    return (
      <Screen styleName='paper'>
        <KeyboardAvoidingView behavior='padding' style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View styleName='vertical h-center v-end' style={{flex: 1}}>
            <Animated.View style={{width: this.logoDim, height: this.logoDim, backgroundColor: 'black'}} />
          </View>
          <View styleName='vertical h-center' style={{flex: 3}}>
            <View styleName='horizontal'>
              <Button
                styleName={`full-width ${tab === 'login' ? '' : 'muted'}`}
                onPress={() => this._onTabPress('login')}
              >
                <Text>LOGIN</Text>
              </Button>
              <Button
                styleName={`full-width ${tab === 'register' ? '' : 'muted'}`}
                onPress={() => this._onTabPress('register')}
              >
                <Text>REGISTER</Text>
              </Button>
            </View>
            <ScrollView
              keyboardShouldPersistTaps='always'
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingBottom: 10}}
            >
              {
                (tab === 'login')
                  ? <Form key={LOGIN_FORM.name} onSubmit={(val) => console.log(val)} config={LOGIN_FORM} />
                  : <Form key={REGISTER_FORM.name} onSubmit={(val) => console.log(val)} config={REGISTER_FORM} />
              }
            </ScrollView>

          </View>
        </KeyboardAvoidingView>
      </Screen>
    );
  }
}

// import React from 'react';
// import {
//   TouchableOpacity, View, Text,
//   FlatList
// } from 'react-native';

// class MyListItem extends React.Component {
//   constructor () {
//     super();
//     this._onPress = this._onPress.bind(this);
//   }
//   _onPress () {
//     this.props.onPressItem(this.props.id);
//   }

//   shouldComponentUpdate (nextProps) {
//     return nextProps.selected !== this.props.selected;
//   }

//   render () {
//     const backgroundColor = `${this.props.selected ? 'limegreen' : 'white'}`;
//     return (
//       <TouchableOpacity onPress={this._onPress}>
//         <View style={{height: 50, width: 200, padding: 10, borderWidth: 1, backgroundColor}}>
//           <Text>
//             {this.props.title}
//           </Text>
//         </View>
//       </TouchableOpacity>
//     );
//   }
// }

// export default class MultiSelectList extends React.Component {
//   constructor () {
//     super();
//     let data = [];
//     for (let i = 1; i <= 100; i++) {
//       data.push({id: i, title: `title for ${i}`});
//     }
//     this.state = {
//       data,
//       selected: 1
//     };
//     this._keyExtractor = this._keyExtractor.bind(this);
//     this._onPressItem = this._onPressItem.bind(this);
//     this._renderItem = this._renderItem.bind(this);
//   }

//   _keyExtractor (item) {
//     return item.id.toString();
//   }

//   _onPressItem (id) {
//     this.setState({selected: id});
//   }

//   _renderItem ({item}) {
//     return (
//       <MyListItem
//         id={item.id}
//         onPressItem={this._onPressItem}
//         selected={item.id === this.state.selected}
//         title={item.title}
//       />
//     );
//   }

//   render () {
//     return (
//       <View style={{paddingLeft: 20}}>
//         <FlatList
//           data={this.state.data}
//           extraData={this.state}
//           keyExtractor={this._keyExtractor}
//           renderItem={this._renderItem}
//         />
//       </View>
//     );
//   }
// }
