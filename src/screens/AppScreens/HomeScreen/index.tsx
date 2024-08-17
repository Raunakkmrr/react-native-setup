import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import GetLocation from 'react-native-get-location';

const HomeScreen = () => {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  const getLocation = async () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        console.log(location);
        setLocation({
          latitude: location.latitude,
          longitude: location.longitude,
        });
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  };

  useEffect(() => {
    getLocation();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'orange',
      }}>
      {/* <Text>HomeScreen</Text> */}

      <MapView
        style={{height: '100%', width: '100%'}}
        showsUserLocation={true}
        // userInterfaceStyle="dark"
        zoomControlEnabled={true}
        scrollEnabled={true}
        rotateEnabled={true}
        pitchEnabled={true}
        zoomEnabled={true}
        onMarkerDrag={e => {
          console.log(e.nativeEvent.coordinate);
        }}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: location.latitude,
          longitudeDelta: location.longitude,
        }}>
        <Marker
          draggable={true}
          onDrag={e => {
            console.log(e.nativeEvent.coordinate);
          }}
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
        />
      </MapView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
export const HOMESCREENROUTE = 'HomeScreen';
