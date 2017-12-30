import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screen';

registerScreens();

// // start the app
// Navigation.startTabBasedApp({
//   tabs: [
//     {
//       label: 'One',
//       screen: 'First',
//       title: 'Screen One'
//     },
//     {
//       label: 'Two',
//       screen: 'Second',
//       title: 'Screen One'
//     }
//   ]
// });

Navigation.startSingleScreenApp({
  screen: {
    screen: 'First', // unique ID registered with Navigation.registerScreen
    title: 'Welcome' // title of the screen as appears in the nav bar (optional)
  }
});
