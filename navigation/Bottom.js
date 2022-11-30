import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../Screens/HomeScreen';
import CreateProjectScreen from '../Screens/CreateProjectScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import { TouchableNativeFeedbackComponent } from 'react-native';
import { color } from '@rneui/base';
import { Entypo, FontAwesome5 ,AntDesign} from '@expo/vector-icons';
import ShowCaseScreen from '../Screens/ShowCaseScreen';
import ClientScreen from '../Screens/ClientScreen';



const Tab = createBottomTabNavigator();
const Bottom = () => {
return (
  <Tab.Navigator screenOptions={{
    tabBarStyle: {backgroundColor: 'transparent',
          position: 'absolute',
          elevation:0,
          borderTopColor:"transparent",
          marginBottom:5
         },
         tabBarActiveTintColor:"black",
         tabBarInactiveTintColor:"black",
         tabBarActiveBackgroundColor:"#769ede"
  }}
  
  
  initialRouteName="Home" >
    <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false,
      tabBarIcon:()=><Entypo name='home' size={24} color="black"/>
    }} />
    <Tab.Screen name="CreateProject" component = {CreateProjectScreen} options={{
            tabBarStyle: { display: "none"},headerShown:false,
            tabBarIcon:()=><AntDesign name="plussquare" size={24} color="black" />
          }}/>
    <Tab.Screen name="UserProfile" component = {ClientScreen} options={{
            tabBarStyle: { display: "none" },headerShown:false,
            tabBarIcon:()=><FontAwesome5 name="user-alt" size={24} color="black"/>
          }}/>
  </Tab.Navigator>
  )
}
export default Bottom





