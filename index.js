/**
 * @format
 */

import {AppRegistry, Linking} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import messaging from '@react-native-firebase/messaging';
import {NavigationContainer} from '@react-navigation/native';

// register background message handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('<INDEX.JS> - A new FCM message arrived!', remoteMessage);
});

const ProvidedApp = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => ProvidedApp);
