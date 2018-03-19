
import { Navigation } from 'react-native-navigation';

import Auth from '../modules/auth';
import SignUp from '../modules/auth/signUp';
import Home from '../modules/home';

// app initialization action
import { init } from '../modules/auth/action';

// store initialization
import { Provider } from 'react-redux';
import Store from '../store';

// navigation style configuration
const navigatorStyle = {
};

class Application {
  constructor (Store, Provider) {
    this._store = Store;
    this._provider = Provider;

    this._configureScreens = this._configureScreens.bind(this);
    this._configureScreens(Store, Provider);

    this.run = this.run.bind(this);
    this.startApp = this.startApp.bind(this);
  }

  _configureScreens (Store, Provider) {
    const screens = {
      Auth,
      SignUp,
      Home
    };
    Object.keys(screens).map(key => {
      Navigation.registerComponent(`${key}`, () => screens[key], Store, Provider);
    });
  }

  run () {
    this._store.dispatch(init());
  }

  startApp ({ screen, title }) {
    const app = {
      screen,
      title,
      navigatorStyle
    };
    Navigation.startSingleScreenApp({ screen: app });
  }
}

const App = new Application(Store, Provider); // singleton

export default App;
