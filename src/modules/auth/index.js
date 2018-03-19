import React, {Component} from 'react';
import {
  Tile, Text, Button
} from '@shoutem/ui';
import {connect} from 'react-redux';
import {showModal} from '../../navigation/saga';
import {getNavInfo} from '../../utils/navigation';

class Auth extends Component {
  constructor (props) {
    super(props);
    this._navigate = this._navigate.bind(this);
  }

  _navigate () {
    const scene = {screen: 'SignUp', title: 'Sign up'};
    const navInfo = getNavInfo(this.props.navigator);
    this.props.dispatch(showModal({scene, navInfo}));
  }

  render () {
    return (
      <Tile styleName='text-centric'>
        <Text>Auth</Text>
        <Button onPress={this._navigate}>
          <Text>nav</Text>
        </Button>
      </Tile>
    );
  }
}

export default connect(null, dispatch => ({dispatch}))(Auth);
