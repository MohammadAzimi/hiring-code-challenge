import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import RNBootSplash from 'react-native-bootsplash';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './MainTabNavigator';
import {RootStackParamListType} from './RouteParamsType';
const RootStackProvider = createNativeStackNavigator<RootStackParamListType>();

function AppNavigator() {
  useEffect(() => {
    // hide native splash
    // RNBootSplash.hide({fade: true});
  }, []);

  return (
    // https://reactnavigation.org/docs/navigation-container
    <NavigationContainer
      documentTitle={{
        enabled: false,
      }}
      // onStateChange={onStateChange}
    >
      <RootStackProvider.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'BottomTab'}>
        <RootStackProvider.Screen name={'BottomTab'} component={BottomTabs} />
        {/* start of LogScreens */}
        {/* <RootStackProvider.Screen name={'LogScreen'} component={LogScreen} /> */}
      </RootStackProvider.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
