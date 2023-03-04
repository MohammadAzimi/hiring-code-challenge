import React, {FC} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Card} from './components';
import {HomeStackParamListType} from '../../navigation/RouteParamsType';
import {MOCK_PRODUCTS} from '../../utils/data';
import {Product} from '../../types';

type NavigationProps = NativeStackScreenProps<
  HomeStackParamListType,
  'ProductListScreen'
>;

const ProductListScreen: FC<NavigationProps> = ({}) => {
  const renderItem = ({item}: {item: Product}) => {
    return <Card item={item} />;
  };

  const keyExtractor = (item: Product) => item.id;

  return (
    <View style={styles.container}>
      <FlatList
        data={MOCK_PRODUCTS}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default ProductListScreen;

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
