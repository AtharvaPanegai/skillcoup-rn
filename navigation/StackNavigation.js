import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import SigninScreen from '../Screens/SigninScreen';
import SignupScreen from '../Screens/SignupScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Signin">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Signin" component = {SigninScreen} options={{headerShown:false}} />
        <Stack.Screen name="Signup" component = {SignupScreen} options={{headerShown:false}} />
    </Stack.Navigator>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})