import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {View, Pressable, StyleSheet, Text, Image} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import {HomeStackParamListType} from '../../../navigation/RouteParamsType';
import {Product} from '../../../types';
import {numberWithCommas} from '../../../utils/Helper';
import DiscountBadge from './DiscountBadge';

interface CardProps {
  item: Product;
}

type NavigationType = NativeStackScreenProps<HomeStackParamListType>;
const Card: FC<CardProps> = ({item}) => {
  const navigation = useNavigation<NavigationType['navigation']>();

  return (
    <View style={styles.container}>
      <Image source={{uri: item.imageUri}} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.name}</Text>
        <View style={[styles.row]}>
          <Text style={styles.price}>
            {numberWithCommas(item.price) + ' $'}
          </Text>
          <Pressable
            style={styles.buyButton}
            onPress={() => navigation.navigate('DestinationScreen')}>
            <Text style={styles.buyText}>{'Buy'}</Text>
          </Pressable>
        </View>
      </View>
      {item.discount > 0 && (
        <View style={styles.discount}>
          <DiscountBadge value={item.discount} />
        </View>
      )}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 2,
    marginBottom: 16,
    padding: 16,
    flexDirection: 'row',
  },
  image: {
    borderRadius: 8,
    width: 100,
    height: 100,
  },
  content: {
    flex: 1,
    marginLeft: 24,
    justifyContent: 'space-between',
  },
  title: {
    color: 'black',
  },
  buyButton: {
    width: 100,
    borderRadius: 10,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'dodgerblue',
    alignSelf: 'flex-end',
  },
  buyText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'white',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  discount: {
    position: 'absolute',
    top: 0,
    right: 16,
  },
  price: {
    textAlign: 'left',
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
  },
});
