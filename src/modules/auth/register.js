
import React, {Component} from 'react';
import {Screen, View, ScrollView} from '@shoutem/ui';
import {KeyboardAvoidingView} from 'react-native';
import {connect} from 'react-redux';
import Form from '../shared/forms';
import {REGISTER_FORM} from '../shared/forms/config';
import {bindFunctions} from '../../utils';
import {registerReq} from './action';
import {getRegister} from './store';

class Register extends Component {
  constructor (props) {
    super(props);
    const {navigator} = props;
    navigator.setDrawerEnabled({
      side: 'left',
      enabled: false
    });
    bindFunctions.call(this, [
      '_register'
    ]);
  }

  _register (obj) {
    this.props.dispatch(registerReq(obj));
  }

  render () {
    const {register} = this.props;
    return (
      <Screen styleName='paper'>
        <KeyboardAvoidingView
          behavior='padding'
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        >
          <View styleName='vertical h-center' style={{flex: 1}}>
            <ScrollView
              keyboardShouldPersistTaps='always'
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingBottom: 10, paddingTop: 10}}
            >
              <Form
                key={REGISTER_FORM.name}
                loading={register.loading}
                onSubmit={this._register}
                config={REGISTER_FORM}
              />
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </Screen>
    );
  }
}

const stateToProps = state => ({
  register: getRegister(state)
});

export default connect(stateToProps, dispatch => ({dispatch}))(Register);
