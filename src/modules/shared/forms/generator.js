
import React, {Component} from 'react';
import {
  Button, Caption,
  View, Text, TextInput
} from '@shoutem/ui';
import { Field, reduxForm } from 'redux-form';
import {errorColor} from '../../../utils/theme';

const validate = (values, props) => {
  return props.config.validate(values);
};

class Form extends Component {
  constructor (props) {
    super(props);
    this._renderInput = this._renderInput.bind(this);
    this._renderInputs = this._renderInputs.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _renderInput ({ input, config, meta: { touched, error } }) {
    return (
      <View style={{marginTop: 15}}>
        <TextInput
          style={(touched && error) ? {borderColor: errorColor} : {}}
          styleName='auth'
          {...input} {...config}
        />
        {touched && error && <Caption styleName='error'>{error}</Caption>}
      </View>
    );
  }

  _renderInputs () {
    const {config} = this.props;
    return config.fields.map(field => {
      return (
        <Field key={field.name} name={field.name} config={field} component={this._renderInput} />
      );
    });
  }

  _handleSubmit (value) {
    const {valid} = this.props;
    if (valid) {
      this.props.onSubmit(value);
    }
  }

  render () {
    const {handleSubmit, config} = this.props;
    return (
      <View>
        {this._renderInputs()}
        <View style={{marginTop: 15}}>
          <Button
            styleName='secondary auth'
            onPress={handleSubmit(this._handleSubmit)}
          >
            <Text>{config.submitText}</Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default reduxForm({
  validate
})(Form);
