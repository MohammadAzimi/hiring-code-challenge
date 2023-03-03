import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {BottomTabParamListType} from '../../navigation/RouteParamsType';

type NavigationProps = NativeStackScreenProps<
  BottomTabParamListType,
  'OrderScreen'
>;

const OrdersScreen: FC<NavigationProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Orders</Text>
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
