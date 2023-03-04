import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackParamListType} from './RouteParamsType';
import HomeScreen from '../screens/home/HomeScreen';
import ProductListScreen from '../screens/products/ProductListScreen';
import DestinationScreen from '../screens/destination/DestinationScreen';

// HOME STACK
const HomeStackProvider = createNativeStackNavigator<HomeStackParamListType>();
export function HomeStack() {
  return (
    <HomeStackProvider.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'HomeScreen'}>
      <HomeStackProvider.Screen name={'HomeScreen'} component={HomeScreen} />
      <HomeStackProvider.Screen
        name={'ProductListScreen'}
        component={ProductListScreen}
      />
      <HomeStackProvider.Screen
        name={'DestinationScreen'}
        component={DestinationScreen}
      />
    </HomeStackProvider.Navigator>
  );
}
