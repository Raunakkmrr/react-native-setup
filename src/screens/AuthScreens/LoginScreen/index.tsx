import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {authActions} from '../../../redux/slices/auth-slice';
import {useDispatch} from 'react-redux';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(authActions.login('token'));
  };

  return (
    <View>
      <Text>LoginScreen</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
export const LOGINSCREENROUTE = 'LoginScreen';
