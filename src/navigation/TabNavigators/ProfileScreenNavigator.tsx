import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import ProfileScreen, {
  PROFILESCREENROUTE,
} from '../../screens/AppScreens/ProfileScreen';

const Stack = createNativeStackNavigator();

const ProfileScreenNavigator = ({navigation}: {navigation: any}) => {
  return (
    <View style={{flex: 1}}>
      <Stack.Navigator
        initialRouteName={PROFILESCREENROUTE}
        screenOptions={{gestureEnabled: false}}>
        <Stack.Screen
          name={PROFILESCREENROUTE}
          component={ProfileScreen}
          options={{headerShown: false, gestureEnabled: false}}
        />
      </Stack.Navigator>
    </View>
  );
};

export default ProfileScreenNavigator;

const styles = StyleSheet.create({});
export const PROFILESCREENNAVIGATORROUTE = 'ProfileScreenNavigator';
