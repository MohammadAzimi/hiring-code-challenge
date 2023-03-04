/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import {store} from './redux';
import {Provider} from 'react-redux';
import {StartOrderRepository} from './components/processor';
import {StatusBar} from 'react-native';

StartOrderRepository();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} />
      <AppNavigator />
    </Provider>
  );
}

export default App;
