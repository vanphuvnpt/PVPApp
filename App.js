/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { Provider } from 'react-redux';
import store from './src/store/store';

const App =({navigation})=>{
  return (
    <Provider store={store}>
    <AppNavigator/>
    </Provider>
  );
}


export default App;
