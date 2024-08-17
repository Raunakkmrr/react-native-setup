import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen, {HOMESCREENROUTE} from '../../screens/AppScreens/HomeScreen';

const Stack = createNativeStackNavigator();

export const HomeScreenNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={HOMESCREENROUTE}>
      <Stack.Screen
        name={HOMESCREENROUTE}
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeScreenNavigator;

export const HOMESCREENNAVIGATORROUTE = 'HomeScreenNavigator';
