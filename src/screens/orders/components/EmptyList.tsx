import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface EmptyListProps {}

const EmptyList: FC<EmptyListProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Icon name={'receipt-outline'} color="gray" size={80} />
      <Text style={styles.text}>{"There's no available order"}</Text>
    </View>
  );
};

export default EmptyList;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 32,
    color: 'gray',
  },
});
