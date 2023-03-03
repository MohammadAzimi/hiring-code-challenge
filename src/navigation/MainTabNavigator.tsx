import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {HomeStack} from './ScreenStacks';
import {BottomTabParamListType} from './RouteParamsType';
import OrdersScreen from '../screens/orders/OrdersScreen';

const Tab = createBottomTabNavigator<BottomTabParamListType>();

const rippleEffect = {
  foreground: false,
  // color: Colors.primaryLightColor,
  borderless: true,
};

function CustomTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  const helperStyle = React.useMemo(
    () => ({
      paddingBottom: insets.bottom,
    }),
    [insets.bottom],
  );

  return (
    <View style={[styles.barStyle, helperStyle]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            //@ts-ignore
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <Pressable
            key={index.toString()}
            android_ripple={rippleEffect}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabItem}>
            <View>
              {/* {isFocused ? options.tabBarIconActive : options.tabBarIcon} */}
              <Icon
                // @ts-ignore
                name={options.tabBarIconName!}
                size={24}
                color={isFocused ? 'dodgerblue' : 'gray'}
              />
            </View>
            <Text
              // textStyle="Button"
              allowFontScaling={false}
              style={[styles.labelText, isFocused && styles.labelTextActive]}>
              {label as string}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName={'HomeStack'}
      tabBar={props => <CustomTabBar {...props} />}
      backBehavior={'initialRoute'}
      screenOptions={
        {
          // tabBarActiveTintColor: Colors.primaryColor,
          // tabBarInactiveTintColor: Colors.iconInactiveColor,
          // headerShown: false,
        }
      }>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          //@ts-ignore
          tabBarIconName: 'home-outline',
        }}
        name={'HomeStack'}
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Orders',
          //@ts-ignore
          tabBarIconName: 'cube-outline',
        }}
        name={'OrderScreen'}
        component={OrdersScreen}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  labelText: {
    color: 'gray',
  },
  labelTextActive: {
    color: 'dodgerblue',
  },
  tabBarIcon: {
    alignSelf: 'flex-start',
  },
  barStyle: {
    flexDirection: 'row',
    width: '100%',
    // backgroundColor: Colors.whiteColor,
  },
  tabItem: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    height: 72,
  },
});

export default BottomTabs;
