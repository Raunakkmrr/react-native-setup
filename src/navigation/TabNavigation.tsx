import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {Dimensions, Platform, Pressable, StyleSheet, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDispatch, useSelector} from 'react-redux';

import {useAppDispatch} from '../redux/hooks';

import {RootState} from '../redux/store';

import HomeScreenNavigator, {
  HOMESCREENNAVIGATORROUTE,
} from './TabNavigators/HomeScreenNavigator';

import ActiveHome from '../../assets/svgs/ActiveHome.js';
import ActiveJobSvg from '../../assets/svgs/ActiveJob.js';
import ActiveProfile from '../../assets/svgs/ActiveProfile.js';
import InactiveHome from '../../assets/svgs/InactiveHome.js';
import InactiveJobSvg from '../../assets/svgs/InactiveJob.js';
import InactiveProfile from '../../assets/svgs/InactiveProfile.js';
import dashboardScreenNavigator, {
  DASHBOARDSCREENNAVIGATORROUTE,
} from './TabNavigators/DashboardNavigator.tsx';
import ProfileScreenNavigator, {
  PROFILESCREENNAVIGATORROUTE,
} from './TabNavigators/ProfileScreenNavigator';

const Tab = createBottomTabNavigator();

type TabParamList = {
  Home: undefined;
  Dashboard: undefined;
  Profile: undefined;
};

const TabNavigation = ({navigation}: any) => {
  const dispatch = useDispatch();
  const dispatchVideo = useAppDispatch();
  const {reportModal} = useSelector((state: RootState) => state.dashboard);
  const MyUserData = useSelector((state: RootState) => state.auth.userDetails);
  const [showButtons, setShowButtons] = useState(false);
  const {width, height} = Dimensions.get('window');

  return (
    <View style={Platform.OS === 'ios' ? {flex: 1} : {width, height: height}}>
      <Tab.Navigator
        initialRouteName={HOMESCREENNAVIGATORROUTE}
        backBehavior="initialRoute"
        screenOptions={({route}: any) => ({
          // tabBarHideOnKeyboard: true,
          gestureEnabled: false,
          tabBarIcon: ({focused, color, size}: any) => {
            // console.log('route.name', route.name);
            // console.log('focused', focused);
            let iconName;
            if (route.name === HOMESCREENNAVIGATORROUTE) {
              iconName = focused ? <ActiveHome /> : <InactiveHome />;
            } else if (route.name === DASHBOARDSCREENNAVIGATORROUTE) {
              iconName = focused ? <ActiveJobSvg /> : <InactiveJobSvg />;
            } else if (route.name === PROFILESCREENNAVIGATORROUTE) {
              iconName = focused ? <ActiveProfile /> : <InactiveProfile />;
            }
            return iconName;
          },
          tabBarStyle: {
            paddingBottom: RFValue(Platform.OS === 'ios' ? 5 : 14),
            backgroundColor: '#000000',
            height: RFValue(Platform.OS === 'ios' ? 40 : 60),
          },
        })}>
        <Tab.Screen
          name={DASHBOARDSCREENNAVIGATORROUTE}
          component={dashboardScreenNavigator}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            unmountOnBlur: true,
          }}
        />
        <Tab.Screen
          name={HOMESCREENNAVIGATORROUTE}
          component={HomeScreenNavigator}
          options={{headerShown: false, tabBarShowLabel: false}}
        />
        <Tab.Screen
          // name={UPLOADSCREENROUTE}
          name={PROFILESCREENNAVIGATORROUTE}
          component={ProfileScreenNavigator}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarButton: () => (
              <Pressable
                onPress={() => {
                  setShowButtons(!showButtons);
                }}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <InactiveProfile />
              </Pressable>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
export const TABNAVIGATIONROUTE = 'TabNavigation';
