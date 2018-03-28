
export const LOGIN_FORM = {
  name: 'login',
  submitText: 'LOGIN',
  fields: [
    {
      name: 'email',
      keyboardType: 'email-address',
      placeholder: 'Email *',
      autoCapitalize: 'none'
    },
    { name: 'password',
      secureTextEntry: true,
      placeholder: 'Password *'
    }
  ],
  validate: values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Enter email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Enter a valid email';
    }
    if (!values.password) {
      errors.password = 'Enter password';
    }
    return errors;
  }
};

export const REGISTER_FORM = {
  name: 'register',
  submitText: 'REGISTER',
  fields: [
    {
      name: 'username',
      placeholder: 'User name *',
      autoCapitalize: 'none'
    },
    {
      name: 'email',
      keyboardType: 'email-address',
      placeholder: 'Email *',
      autoCapitalize: 'none'
    },
    {
      name: 'password',
      secureTextEntry: true,
      placeholder: 'Password *'
    }
  ],
  validate: values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Enter user name';
    }
    if (!values.email) {
      errors.email = 'Enter email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Enter a valid email';
    }
    if (!values.password) {
      errors.password = 'Enter password';
    }
    return errors;
  }
};