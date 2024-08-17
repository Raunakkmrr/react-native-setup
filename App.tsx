import React, {useEffect, useState} from 'react';
import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import {useSelector} from 'react-redux';
import messaging from '@react-native-firebase/messaging';
import {RootState} from './src/redux/store';
import MainNavigation from './src/navigation/MainNavigation';
import MainAuthNavigation from './src/navigation/MainAuthNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';
import GetLocation from 'react-native-get-location';

function App() {
  const [locationPermission, setLocationPermission] = useState(true);
  const {token} = useSelector((state: RootState) => state.auth);

  const requestNotificationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        PermissionsAndroid.check('android.permission.POST_NOTIFICATIONS')
          .then(response => {
            if (!response) {
              PermissionsAndroid.request(
                'android.permission.POST_NOTIFICATIONS',
                {
                  title: 'Notification',
                  message: 'Allow caspro to send notifications ',
                  buttonNegative: 'Cancel',
                  buttonPositive: 'OK',
                },
              );
            }
          })
          .catch(err => {
            console.log('Notification Error=====>', err);
          });
      } catch (err) {
        console.log(err);
      }
    }
  };

  async function requestUserPermission() {
    let authStatus = await messaging().requestPermission();
    requestNotificationPermission();
    requestLocationPermission();
    while (
      authStatus !== messaging.AuthorizationStatus.AUTHORIZED &&
      authStatus !== messaging.AuthorizationStatus.PROVISIONAL
    ) {
      authStatus = await messaging().requestPermission();
    }

    console.log('Authorization status:', authStatus);
    if (
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL
    ) {
      getToken();
    }
  }

  const getToken = async () => {
    try {
      // messaging().registerDeviceForRemoteMessages();
      let storageTok = await AsyncStorage.getItem('fcmToken');
      // console.log('storageTok', storageTok);
      if (!storageTok) {
        let token = await messaging().getToken();
        console.log('tok en fcm', token);
        if (token) {
          AsyncStorage.setItem('fcmToken', token);
        }
      }
    } catch (error) {
      console.log('err', error);
    }
  };

  useEffect(() => {
    const checkAndRequestLocationPermission = async () => {
      let locationPermissionGranted = false;

      while (!locationPermissionGranted) {
        if (Platform.OS === 'android') {
          const response = await PermissionsAndroid.check(
            'android.permission.ACCESS_FINE_LOCATION',
          );
          if (!response) {
            const granted = await PermissionsAndroid.request(
              'android.permission.ACCESS_FINE_LOCATION',
              {
                title: 'Location Permission',
                message: 'Location Permission is needed to get your location',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
              },
            );
            locationPermissionGranted =
              granted === PermissionsAndroid.RESULTS.GRANTED;
          } else {
            locationPermissionGranted = true;
          }
        } else if (Platform.OS === 'ios') {
          const status = await new Promise(resolve => {
            Geolocation.requestAuthorization(
              () => resolve('granted'),
              error => resolve('denied'),
            );
          });
          locationPermissionGranted = status === 'granted';
        }

        console.log('locationPermissionGranted', locationPermissionGranted);

        if (locationPermissionGranted) {
          setLocationPermission(false);
          getLocation();
        }
      }
    };

    checkAndRequestLocationPermission();
    requestUserPermission();
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        PermissionsAndroid.check('android.permission.ACCESS_FINE_LOCATION')
          .then(response => {
            if (!response) {
              PermissionsAndroid.request(
                'android.permission.ACCESS_FINE_LOCATION',
                {
                  title: 'Location Permission',
                  message: 'Location Permission is needed to get your location',
                  buttonNegative: 'Cancel',
                  buttonPositive: 'OK',
                },
              );
            } else {
              setLocationPermission(false);
            }
          })
          .catch(err => {
            console.log('Location Error=====>', err);
          });
      } catch (err) {
        console.warn(err);
      }
    } else if (Platform.OS === 'ios') {
      console.log('first location permission 1');
      try {
        const status = Geolocation.requestAuthorization(
          () => {
            console.log('You can use the location');
            getLocation();
            setLocationPermission(false);
          },
          error => {
            console.log('Location permission denied', error);
          },
        );
        console.log('status', status);
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const getLocation = async () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        console.log(location);
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  };

  if (locationPermission) {
    return (
      <SafeAreaView
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'white',
        }}>
        <Text>Please grant location permission to continue...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
      }}>
      {/* <MainNavigation /> */}
      {token ? <MainNavigation /> : <MainAuthNavigation />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
