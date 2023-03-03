import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
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

const DestinationScreen: FC<NavigationProps> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapboxGL.MapView style={styles.map} />
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
});
