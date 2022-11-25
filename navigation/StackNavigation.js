import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import SigninScreen from '../Screens/SigninScreen';
import SignupScreen from '../Screens/SignupScreen';
import ClientScreen from '../Screens/ClientScreen';
import ProjectScreen from '../Screens/ProjectScreen';
import SuccessScreen from '../Screens/SuccessScreen';
import ChatScreen from '../Screens/ChatScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName=" ProjectDetails">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Signin" component = {SigninScreen} options={{headerShown:false}} />
        <Stack.Screen name="Signup" component = {SignupScreen} options={{headerShown:false}} />
        <Stack.Screen name="ClientProfile" component = {ClientScreen} options={{headerShown:false}} />
        <Stack.Screen name="ProjectDetails" component = {ProjectScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Success" component = {SuccessScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Chat" component = {ChatScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})