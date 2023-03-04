import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const SIZE = 60;

interface DiscountProps {
  value: number;
}

const DiscountBadge: FC<DiscountProps> = ({value}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.left} />
        <View style={styles.right} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{value + '%'}</Text>
        {/* <Text style={styles.text}>{'OFF'}</Text> */}
      </View>
    </View>
  );
};

export default DiscountBadge;

const styles = StyleSheet.create({
  wrapper: {
    width: (SIZE * 2) / 3,
    height: SIZE + ((SIZE / 2) * Math.sqrt(2)) / 2,
    overflow: 'hidden',
  },
  container: {
    backgroundColor: 'green',
    height: (SIZE * 2) / 3,
    width: (SIZE * 2) / 3,
    // overflow: 'hidden',
  },
  left: {
    position: 'absolute',
    bottom: -SIZE / 6,
    left: -SIZE / 4,
    // alignSelf: 'flex-end',
    width: SIZE / 2,
    height: SIZE / 2,
    backgroundColor: 'green',
    transform: [{rotateZ: '60deg'}],
  },
  right: {
    position: 'absolute',
    bottom: -SIZE / 6,
    right: -SIZE / 4,
    width: SIZE / 2,
    height: SIZE / 2,
    backgroundColor: 'green',
    transform: [{rotateZ: '-60deg'}],
  },
  textContainer: {
    position: 'absolute',
    width: '100%',
    top: 10,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
