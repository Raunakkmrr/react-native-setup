import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import DashboardScreen, {
  DASHBOARDSREENROUTE,
} from '../../screens/AppScreens/DashboardScreen';

const Stack = createNativeStackNavigator();

const DashboardScreenNavigator = ({navigation}: {navigation: any}) => {
  return (
    <View style={{flex: 1}}>
      <Stack.Navigator
        // initialRouteName={PROFILESCREENROUTE}
        screenOptions={{gestureEnabled: false}}>
        <Stack.Screen
          name={DASHBOARDSREENROUTE}
          component={DashboardScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </View>
  );
};

export default DashboardScreenNavigator;

const styles = StyleSheet.create({});
export const DASHBOARDSCREENNAVIGATORROUTE = 'DashboardScreenNavigator';
