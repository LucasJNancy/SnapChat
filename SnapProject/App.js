/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import Login from './src/pages/login';
import Signup from './src/pages/Signup';

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
        <View style={styles.container}>

          <StatusBar
            backgroundColor="#5c007a"
            barStyle="light-content"
          />
          
        <Signup/>

        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8e24aa",
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },

});

export default App;
