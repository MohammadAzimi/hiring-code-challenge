import React, {FC} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import {useInterval} from '../../../components/interval';
import {getOrderByIdOperator} from '../../../components/processor';
import {useAppDispatch} from '../../../redux';
import {orderSlice} from '../../../redux/slices';
import {Order} from '../../../types';
import {numberWithCommas} from '../../../utils/Helper';

interface CardProps {
  item: Order;
}

const convertStatusToNumber = (
  status: 'pending' | 'in-process' | 'delivery' | 'delivered',
) => {
  switch (status) {
    case 'pending':
      return 0;
    case 'in-process':
      return 1;
    case 'delivery':
      return 2;
    case 'delivered':
      return 3;
    default:
      return -1;
  }
};

const Card: FC<CardProps> = ({item}) => {
  const reduxDispatch = useAppDispatch();

  const fetch = () => {
    let data = getOrderByIdOperator(item.id);
    if (data && item.status !== data.status) {
      reduxDispatch(orderSlice.actions.update({...data}));
    }
  };

  useInterval(fetch, 5000);
  const getStatusColor = (status: number, targetStatus: string) => {
    // @ts-ignore
    const target = convertStatusToNumber(targetStatus);

    if (status <= target) {
      return 'dodgerblue';
    } else {
      return 'gray';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={{uri: item.imageUri}} style={styles.image} />
        <Text style={styles.title}>{item.name}</Text>
        <View style={[styles.row]}>
          <Text style={styles.price}>
            {'Paid: ' + numberWithCommas(item.price) + ' $'}
          </Text>
        </View>
      </View>
      <View style={[styles.deliveryChart]}>
        <View style={[styles.row]}>
          <View
            style={[
              styles.statusContainer,
              {backgroundColor: getStatusColor(0, item.status)},
            ]}>
            <Text style={styles.statusText}>{'pending'}</Text>
          </View>
        </View>
        <View
          style={[
            styles.border,
            {backgroundColor: getStatusColor(1, item.status)},
          ]}
        />
        <View style={[styles.row]}>
          <View
            style={[
              styles.statusContainer,
              {backgroundColor: getStatusColor(1, item.status)},
            ]}>
            <Text style={styles.statusText}>{'in-process'}</Text>
          </View>
        </View>
        <View
          style={[
            styles.border,
            {backgroundColor: getStatusColor(2, item.status)},
          ]}
        />
        <View style={[styles.row]}>
          <View
            style={[
              styles.statusContainer,
              {backgroundColor: getStatusColor(2, item.status)},
            ]}>
            <Text style={styles.statusText}>{'delivery'}</Text>
          </View>
        </View>
        <View
          style={[
            styles.border,
            {backgroundColor: getStatusColor(3, item.status)},
          ]}
        />
        <View style={[styles.row]}>
          <View
            style={[
              styles.statusContainer,
              {backgroundColor: getStatusColor(3, item.status)},
            ]}>
            <Text style={styles.statusText}>{'delivered'}</Text>
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
    flex: 1,
  },
  deliveryChart: {
    marginLeft: 16,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    marginTop: 8,
    fontSize: 18,
    color: 'black',
    fontWeight: '700',
  },
  image: {
    borderRadius: 8,
    width: 120,
    height: 120,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  price: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
  },
  statusText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
    color: 'white',
    textTransform: 'capitalize',
    marginRight: 8,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    width: 116,
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: 'gray',
  },
  border: {width: 2, flex: 1},
});
