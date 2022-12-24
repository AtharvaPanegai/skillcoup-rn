import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeComponent from '../Components/HomeComponent/HomeComponent'
import { LinearGradient } from 'expo-linear-gradient'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useEffect } from 'react'
import { useState } from 'react'
import HomeComponentForClient from '../Components/HomeComponent/HomeComponentForClient'
import axios from 'axios'
import { BASE_URL } from '../Components/config'
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const [userType, setUserType] = useState("");

  const whoAmi = () => {
    axios
      .get(`${BASE_URL}/whoami`)
      .then((res) => {
        console.log(res.data);
        setUserType(res.data.user.userType)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    whoAmi();
  }, [])


  return (

    <View style={styles.mainContainer}>
      <LinearGradient
        colors={["#FFFFFF", "#769ede"]}
        style={styles.background}
      />
      {userType == "freelancer" && (<HomeComponent />)}
      {userType == "client" && (<HomeComponentForClient />)}
    </View>

  )
}

export default HomeScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingBottom : 25,
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 900,
  }
})