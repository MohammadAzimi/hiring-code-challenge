import React, {FC, useState} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {HomeStackParamListType} from '../../navigation/RouteParamsType';

import MapboxGL from '@rnmapbox/maps';

MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setAccessToken(
  'pk.eyJ1IjoibW9oYW1tYWQtaW5kaXZpZHVhbCIsImEiOiJjbGVzY3djdzkxNTB4M3VvMXRlMnp3Ymp4In0.Ey1e3YI9H50OTJYnZglfyg',
);

type NavigationProps = NativeStackScreenProps<
  HomeStackParamListType,
  'DestinationScreen'
>;

const PIN_SIZE = 32;
const INITIAL_COORDS = [51.3857, 35.7019];

const DestinationScreen: FC<NavigationProps> = ({navigation}) => {
  const [layout, setLayout] = useState<{
    width: number | null;
    height: number | null;
  }>({width: null, height: null});
  return (
    <View style={styles.container}>
      <View
        style={styles.mapContainer}
        onLayout={e =>
          setLayout({
            width: e.nativeEvent.layout.width,
            height: e.nativeEvent.layout.height,
          })
        }>
        <MapboxGL.MapView style={styles.map}>
          <MapboxGL.Camera zoomLevel={11} centerCoordinate={INITIAL_COORDS} />
        </MapboxGL.MapView>
        {!!layout.width && !!layout.height && (
          <View
            style={[
              styles.pinContainer,
              {
                transform: [
                  {translateX: layout.width / 2 - PIN_SIZE / 2},
                  {translateY: layout.height / 2 - PIN_SIZE},
                ],
              },
            ]}>
            <Icon name={'pin'} color={'red'} size={PIN_SIZE} />
          </View>
        )}
      </View>
      <View style={styles.bottomContainer}>
        <Text>{'Select your delivery location to submit your order'}</Text>
        <Pressable
          style={styles.buttonContainer}
          // @ts-ignore
          onPress={() => navigation.navigate('OrderScreen')}>
          <Text style={styles.buttonText}>{'Submit'}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DestinationScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  mapContainer: {
    height: '100%',
    width: '100%',
  },
  map: {
    flex: 1,
  },
  pinContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: PIN_SIZE,
    height: PIN_SIZE,
    // top: '50%',
    // alignSelf: 'center',
    // backgroundColor: 'yellow',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 130,
    backgroundColor: 'white',
    elevation: 5,
    paddingVertical: 16,
    paddingHorizontal: 32,
    justifyContent: 'space-between',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  buttonContainer: {
    width: '100%',
    height: 48,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'dodgerblue',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});
