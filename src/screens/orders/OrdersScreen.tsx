import React, {FC} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Card, EmptyList} from './components';
import {BottomTabParamListType} from '../../navigation/RouteParamsType';
import {Order} from '../../types';
import {useAppSelector} from '../../redux';

type NavigationProps = NativeStackScreenProps<
  BottomTabParamListType,
  'OrderScreen'
>;

const OrdersScreen: FC<NavigationProps> = ({}) => {
  const orders = useAppSelector(state => state.orderState.orders);

  const renderItem = ({item}: {item: Order}) => {
    return <Card item={item} />;
  };

  const keyExtractor = (item: Order) => item.id;

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentContainer}
        ListEmptyComponent={<EmptyList />}
      />
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 8,
    paddingTop: 16,
    paddingBottom: 8,
  },
});
