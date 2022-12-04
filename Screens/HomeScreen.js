import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeComponent from '../Components/HomeComponent/HomeComponent'
import { LinearGradient } from 'expo-linear-gradient'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab=createBottomTabNavigator();
const HomeScreen = () => {
  return (
    
    <View style = {styles.mainContainer}>
    <LinearGradient
        colors={["#FFFFFF", "#769ede"]}
        style={styles.background}
      />
      <HomeComponent />
    </View>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    mainContainer:{
        flex:1
    },
    background:{
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 900,
    }
})