
import React, {Component} from 'react';
import {Screen, View, ScrollView, Subtitle, TouchableOpacity} from '@shoutem/ui';
import {KeyboardAvoidingView, Animated, Keyboard} from 'react-native';
import {connect} from 'react-redux';
import Form from '../shared/forms';
import {LOGIN_FORM} from '../shared/forms/config';
import {bindFunctions, getNavInfo} from '../../utils';
import {loginReq} from './action';
import {pushScene} from '../../navigation/saga';
import {getLogin} from './store';

class Signin extends Component {
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
    bindFunctions.call(this, [
      '_logoResize', '_login',
      '_register',
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

  _login (obj) {
    obj.strategy = 'local';
    this.props.dispatch(loginReq(obj));
  }

  _register () {
    const navInfo = getNavInfo(this.props.navigator);
    const scene = {
      screen: 'Register',
      title: 'Register'
    };
    this.props.dispatch(pushScene({scene, navInfo}));
  }

  render () {
    const {login} = this.props;
    return (
      <Screen styleName='paper'>
        <KeyboardAvoidingView behavior='padding' style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View styleName='vertical h-center v-end' style={{flex: 1}}>
            <Animated.View style={{width: this.logoDim, height: this.logoDim, backgroundColor: 'black'}} />
          </View>
          <View styleName='vertical h-center' style={{flex: 2}}>
            <ScrollView
              keyboardShouldPersistTaps='always'
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingBottom: 10, paddingTop: 30}}
            >
              <Form key={LOGIN_FORM.name} loading={login.loading} onSubmit={this._login} config={LOGIN_FORM} />
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
        <TouchableOpacity onPress={this._register}>
          <View styleName='vertical h-center' style={{padding: 15, borderTopWidth: 1, backgroundColor: '#DCDCDC'}}>
            <Subtitle>Create New Account</Subtitle>
          </View>
        </TouchableOpacity>
      </Screen>
    );
  }
}

const stateToProps = state => ({
  login: getLogin(state)
});

export default connect(stateToProps, dispatch => ({dispatch}))(Signin);

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
