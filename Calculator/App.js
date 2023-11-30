import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, TouchableOpacity, Text, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import React from "react";

import Scanner from './screens/Scanner';
import Home from './screens/Home';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return(
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name={Scanner} component={Scanner} />
    </Stack.Navigator>
  );
}

export default () => {
  return(
    <NavigationContainer>
      <App/> 
    </NavigationContainer>
  )
}


const handleScan = () => {
  // Hier die QR-Code-Scan Logik
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8EACCD',
    color: '#F9F3CC',
    fontFamily: 'sans-serif',
    alignItems: 'center',
  },
  header: {
    fontSize: '3rem',
    padding: '60px',
    fontFamily: 'cursive',
  },
  Button: {
    borderRadius: '50px',
    backgroundColor: 'blue',
  },
});

// export default App;