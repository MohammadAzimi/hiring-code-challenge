import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {HomeStackParamListType} from '../../navigation/RouteParamsType';

type NavigationProps = NativeStackScreenProps<
  HomeStackParamListType,
  'HomeScreen'
>;

const HomeScreen: FC<NavigationProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
