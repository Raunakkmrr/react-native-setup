import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen, {
  LOGINSCREENROUTE,
} from '../screens/AuthScreens/LoginScreen';
import SignUpScreen, {
  SIGNUPSCREENROUTE,
} from '../screens/AuthScreens/SignUpScreen';

const Stack = createNativeStackNavigator();

const MainAuthNavigation = () => {
  return (
    <>
      <Stack.Navigator initialRouteName={LOGINSCREENROUTE}>
        <Stack.Screen
          name={LOGINSCREENROUTE}
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SIGNUPSCREENROUTE}
          component={SignUpScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default MainAuthNavigation;
export const MAINAUTHNAVIGATIONROUTE = 'MainAuthNavigation';
