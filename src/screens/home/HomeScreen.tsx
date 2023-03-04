import React, {FC} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Card} from './components';

import {HomeStackParamListType} from '../../navigation/RouteParamsType';
import {MOCK_CATEGORIES} from '../../utils/data';
import {Category} from '../../types';

type NavigationProps = NativeStackScreenProps<
  HomeStackParamListType,
  'HomeScreen'
>;

const HomeScreen: FC<NavigationProps> = ({}) => {
  const renderItem = ({item}: {item: Category}) => {
    return (
      <Card
        name={item.name}
        iconName={item.iconName}
        imageUri={item.imageUri}
      />
    );
  };

  const keyExtractor = (item: Category) => item.id;

  return (
    <View style={styles.container}>
      <FlatList
        data={MOCK_CATEGORIES}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={2}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default HomeScreen;

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
