// https://reactnavigation.org/docs/typescript#nesting-navigators
import {NavigatorScreenParams} from '@react-navigation/native';

export type HomeStackParamListType = {
  HomeScreen: undefined;
  ProductListScreen: undefined;
  DestinationScreen: {productId: string};
};

export type BottomTabParamListType = {
  HomeStack: NavigatorScreenParams<HomeStackParamListType>;
  OrderScreen: undefined;
};

export type RootStackParamListType = {
  BottomTab: NavigatorScreenParams<BottomTabParamListType>;
};
