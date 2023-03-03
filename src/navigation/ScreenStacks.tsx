import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import {HomeStackParamListType} from './RouteParamsType';

// HOME STACK
const HomeStackProvider = createNativeStackNavigator<HomeStackParamListType>();
export function HomeStack() {
  return (
    <HomeStackProvider.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'HomeScreen'}>
      <HomeStackProvider.Screen name={'HomeScreen'} component={HomeScreen} />
    </HomeStackProvider.Navigator>
  );
}
