import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootParamListType} from '../../navigation';

import MapboxGL from '@rnmapbox/maps';

MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setAccessToken(
  'pk.eyJ1IjoibW9oYW1tYWQtaW5kaXZpZHVhbCIsImEiOiJjbGVzY3djdzkxNTB4M3VvMXRlMnp3Ymp4In0.Ey1e3YI9H50OTJYnZglfyg',
);

type NavigationProps = NativeStackScreenProps<
  RootParamListType
  'DestinationScreen'
>;


const DestinationScreen: FC<NavigationProps> = ({navigation}) => {

  return (
    <View>
        <View style={styles.container}>
        <MapboxGL.MapView style={styles.map} />
      </View>
    </View>
  );
}

export default DestinationScreen;

const styles = StyleSheet.create({
  container:{flex: 1,},
  container: {
    height: '100%',
    width: '100%',
  },
  map: {
    flex: 1,
  },
});
