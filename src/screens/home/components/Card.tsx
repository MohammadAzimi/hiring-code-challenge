import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {HomeStackParamListType} from '../../../navigation/RouteParamsType';

interface CardProps {
  iconName: string;
  name: string;
  imageUri: string;
}

type NavigationType = NativeStackScreenProps<HomeStackParamListType>;
const Card: FC<CardProps> = ({iconName, name}) => {
  const navigation = useNavigation<NavigationType['navigation']>();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('ProductListScreen')}>
      <Icon name={iconName} size={56} color={'dodgerblue'} />
      {/* <Image source={{uri: imageUri}} style={styles.image} /> */}
      <Text>{name}</Text>
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
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 80,
    height: 80,
  },
});
