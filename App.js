import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {DailyPic} from '../Screens/DailyPic'
import {SpaceCrafts} from '../Screens/SpaceCrafts'
import {StarMap} from '../Screens/StarMap'
import {HomeScreen} from '../Screens/HomeScreen'
export default function App(){
  return(
  <NavigationContainer>
    <StackView.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>

    <Stack.Screen name="HomeScreen" component={HomeScreen}/>
    <Stack.Screen name="SpaceCrafts" component={SpaceCrafts}/>
    <Stack.Screen name="DailyPic" component={DailyPic}/>
    <Stack.Screen name="StarMap" component={StarMap}/>

  </StackView.Navigator>
  </NavigationContainer>
  );
}

