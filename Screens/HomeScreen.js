import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeComponent from '../Components/HomeComponent/HomeComponent'
import { LinearGradient } from 'expo-linear-gradient'

const HomeScreen = () => {
  return (
    <LinearGradient colors={["#FFFFFF", "#D6E6FF"]}>

    <View style = {styles.mainContainer}>
      <HomeComponent />
    </View>
    </LinearGradient>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    mainContainer:{
        marginVertical : 25,
        marginHorizontal:5,
    }
})