import React, {FC} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Order} from '../../../types';
import {numberWithCommas} from '../../../utils/Helper';

interface CardProps {
  item: Order;
}

const Card: FC<CardProps> = ({item}) => {
  const getStatusColor = (
    status: 'pending' | 'in-process' | 'delivery' | 'delivered',
  ) => {
    switch (status) {
      case 'pending':
        return 'gold';
      case 'in-process':
      case 'delivery':
        return 'lightblue';
      case 'delivered':
        return 'limegreen';
      default:
        return 'red';
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: item.imageUri}} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.name}</Text>
        <View style={[styles.row]}>
          <Text style={styles.price}>
            {'Paid: ' + numberWithCommas(item.price) + ' $'}
          </Text>
        </View>
        <View style={[styles.row]}>
          <Text style={styles.price}>{'Status: '}</Text>
          <View
            style={[
              styles.statusContainer,
              {backgroundColor: getStatusColor(item.status)},
            ]}>
            <Text style={styles.statusText}>{item.status}</Text>
            <Icon name={'time-outline'} color={'white'} size={20} />
          </View>
        </View>
      </View>
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
  content: {
    marginLeft: 16,
    flex: 1,
  },
  title: {
    fontSize: 12,
    color: 'black',
  },
  image: {
    borderRadius: 8,
    width: 100,
    height: 100,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
  },
  statusText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
    textTransform: 'uppercase',
    marginRight: 8,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 8,
  },
});
