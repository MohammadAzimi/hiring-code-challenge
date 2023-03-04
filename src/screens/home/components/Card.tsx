import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {Pressable, Image, StyleSheet, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import {HomeStackParamListType} from '../../../navigation/RouteParamsType';

interface CardProps {
  iconName: string;
  name: string;
  imageUri: string;
}

type NavigationType = NativeStackScreenProps<HomeStackParamListType>;
const Card: FC<CardProps> = ({imageUri, name}) => {
  const navigation = useNavigation<NavigationType['navigation']>();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('ProductListScreen')}>
      {/* <Icon name={iconName} size={56} color={'dodgerblue'} /> */}
      <Image source={imageUri} style={styles.image} />
      <LinearGradient
        colors={['#DDDDDD00', '#000000FF']}
        style={styles.linearGradient}>
        <Text style={styles.title}>{name}</Text>
      </LinearGradient>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    aspectRatio: 1,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    elevation: 2,
    marginBottom: 16,
    marginHorizontal: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    ...StyleSheet.absoluteFillObject,
  },
  linearGradient: {
    flex: 0.6,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  title: {
    color: 'white',
    fontSize: 26,
    fontWeight: '600',
  },
});
