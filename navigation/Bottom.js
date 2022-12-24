import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../Screens/HomeScreen';
import CreateProjectScreen from '../Screens/CreateProjectScreen';
import { Entypo, FontAwesome5, AntDesign } from '@expo/vector-icons';
import ClientScreen from '../Screens/ClientScreen';
import axios from 'axios';
import { BASE_URL } from '../Components/config';
import FreelancerProfileScreen from '../Screens/FreelancerProfileScreen';
import { useNavigation } from '@react-navigation/native';



const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  const navigation = useNavigation();
  const [showCreateProject, setShowCreateProject] = useState(true);
  const [userType, setUserType] = useState("");

  const getUserType = () => {
    axios.get(`${BASE_URL}/whoami`).then((res) => {
      (res.data.user.userType == "freelancer") ? setShowCreateProject(false) : setShowCreateProject(true)
      setUserType(res.data.user.userType)
      console.log(showCreateProject)
    }).catch((err) => {
      console.log(err);
    })
  }
  useEffect(() => {
    getUserType();
  }, [])

  const handleOnChatIconPress = () =>{
    navigation.navigate("MessageListChatScreen")
  }

  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        position: 'absolute',
        elevation: 2,
        borderTopColor: "transparent",

      },
      tabBarActiveTintColor: "black",
      tabBarInactiveTintColor: "black",
      tabBarActiveBackgroundColor: "#769ede"
    }} initialRouteName="Home" >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        headerShown: true,
        headerRight : () =>(<Entypo onPress={handleOnChatIconPress} style = {{paddingRight : 10}} name='chat' size={24} color="black" />),
        tabBarIcon: () => <Entypo name='home' size={24} color="black" />
      }} />
      {showCreateProject && (<Tab.Screen name="CreateProject" component={CreateProjectScreen} options={{
        headerShown: false,
        tabBarIcon: () => <AntDesign name="plussquare" size={24} color="black" />
      }} />)}
      {userType == "client" && (<Tab.Screen name="UserProfile" component={ClientScreen} options={{
        headerShown: false,
        tabBarIcon: () => <FontAwesome5 name="user-alt" size={24} color="black" />
      }} />)}
      {userType == "freelancer" && (<Tab.Screen name="UserProfile" component={FreelancerProfileScreen} options={{
        headerShown: false,
        tabBarIcon: () => <FontAwesome5 name="user-alt" size={24} color="black" />
      }} />)}
    </Tab.Navigator>
  )
}
export default BottomTabNavigator





