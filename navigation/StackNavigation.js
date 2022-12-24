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

import BottomTabNavigator from './Bottom';
import EditProject from '../Screens/EditProject';
import ProjectCompletedScreen from '../Screens/ProjectCompletedScreen';
import ProjectAssignedScreen from '../Screens/ProjectAssignedScreen';
import TotalProjectPostedScreen from '../Screens/TotalProjectPostedScreen';
import AssignedScreen from '../Screens/AssignedScreen';
import TotalProposalsScreeen from '../Screens/TotalProposalsScreeen';
import AcceptedProposalsScreen from '../Screens/AcceptedProposalsScreen';
import FreelancerTotalProjectsCompletedScreen from '../Screens/FreelancerTotalProjectsCompletedScreen';
import ProposalSubmittedScreen from '../Screens/ProposalSubmittedScreen';
import UserProfileScreen from '../Screens/UserProfileScreen';
import MessageListScreen from '../Screens/MessageListScreen';

const Stack = createNativeStackNavigator();



const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Signin" >
        {/* <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}} /> */}
        <Stack.Screen name="Signin" component = {SigninScreen} options={{headerShown:false}} />
        <Stack.Screen name="Signup" component = {SignupScreen} options={{headerShown:false}} />
        <Stack.Screen name="Profile" component = {ClientScreen} options={{headerShown:false}} />
        <Stack.Screen name="ProjectDetails" component = {ProjectDetailsScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Success" component = {SuccessScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Chat" component = {ChatScreen} options={{headerShown:false}}/>
        {/* <Stack.Screen name="UserProfile" component = {ProfileScreen} options={{headerShown:false}}/> */}
        <Stack.Screen name="ShowCase" component = {ShowCaseScreen} options={{headerShown:false}}/>
        {/* <Stack.Screen name="CreateProject" component = {CreateProjectScreen} options={{headerShown:false}}/> */}
        <Stack.Screen name="SubmitProposal" component = {SubmitProposalScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ProjectProposal" component = {ProjectProposalScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ProposalDetails" component = {ProposalDetails} options={{headerShown:true,headerTransparent:true,headerTitle:""}}/>
        <Stack.Screen name="EditProject" component = {EditProject} options={{headerShown:false}}/>
        <Stack.Screen name="BottomTab" component={BottomTabNavigator}  options={{headerShown:false}}/>
        <Stack.Screen name="ProjetCompleted" component={ProjectCompletedScreen} options={{headerTransparent:true}} />
        <Stack.Screen name="ProjectAssigned" component={ProjectAssignedScreen} options={{headerTransparent:true}} />
        <Stack.Screen name="ProjectPosted" component={TotalProjectPostedScreen} options={{headerTransparent:true}} />
        <Stack.Screen name="Assigned" component={AssignedScreen} options={{headerTransparent:true}} />
        <Stack.Screen name="TotalProposalsSubmiteed" component={TotalProposalsScreeen} />
        <Stack.Screen name="AcceptedProposals" component={AcceptedProposalsScreen} />
        <Stack.Screen name="FreelancerCompletedProjects" component={FreelancerTotalProjectsCompletedScreen} />
        <Stack.Screen name="ProposalSubmittedScreen" component={ProposalSubmittedScreen} options={{headerTransparent:true}} />
        <Stack.Screen name="EditProfile" component={UserProfileScreen} options={{headerTransparent:true}} />
        <Stack.Screen name="MessageListChatScreen" component={MessageListScreen} options={{headerTransparent:true}} />
    </Stack.Navigator>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})