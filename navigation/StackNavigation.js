import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import SigninScreen from '../Screens/SigninScreen';
import SignupScreen from '../Screens/SignupScreen';
import ClientScreen from '../Screens/ClientScreen';
import SuccessScreen from '../Screens/SuccessScreen';
import ChatScreen from '../Screens/ChatScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import ShowCaseScreen from '../Screens/ShowCaseScreen';
import CreateProjectScreen from '../Screens/CreateProjectScreen';
import SubmitProposalScreen from '../Screens/SubmitProposalScreen';
import ProjectProposalScreen from '../Screens/ProjectProposalScreen';
import ProposalDetails from '../Screens/ProposalDetails';
import ProjectDetailsScreen from '../Screens/ProjectDetailsScreen';

import Bottom from './Bottom';
import EditProject from '../Screens/EditProject';

const Stack = createNativeStackNavigator();



const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Signin" >
        <Stack.Screen name="Main" component={Bottom}  options={{headerShown:false}}/>
        <Stack.Screen name="Signin" component = {SigninScreen} options={{headerShown:false}} />
        <Stack.Screen name="Signup" component = {SignupScreen} options={{headerShown:false}} />
        <Stack.Screen name="Profile" component = {ClientScreen} options={{headerShown:false}} />
        <Stack.Screen name="ProjectDetails" component = {ProjectDetailsScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Success" component = {SuccessScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Chat" component = {ChatScreen} options={{headerShown:false}}/>
        <Stack.Screen name="UserProfile" component = {ProfileScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ShowCase" component = {ShowCaseScreen} options={{headerShown:false}}/>
        <Stack.Screen name="CreateProject" component = {CreateProjectScreen} options={{headerShown:false}}/>
        <Stack.Screen name="SubmitProposal" component = {SubmitProposalScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ProjectProposal" component = {ProjectProposalScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ProposalDetails" component = {ProposalDetails} options={{headerShown:false}}/>
        <Stack.Screen name="EditProject" component = {EditProject} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})