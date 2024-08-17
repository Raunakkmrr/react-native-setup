import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen, {
  LOGINSCREENROUTE,
} from '../screens/AuthScreens/LoginScreen';
import TabNavigation, {TABNAVIGATIONROUTE} from './TabNavigation';
const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <>
      <Stack.Navigator initialRouteName={TABNAVIGATIONROUTE}>
        <Stack.Screen
          name={LOGINSCREENROUTE}
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={TABNAVIGATIONROUTE}
          component={TabNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default MainNavigation;
