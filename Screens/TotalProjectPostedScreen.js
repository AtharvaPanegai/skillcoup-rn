import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import TotalProjectsPosted from '../Components/ProjectComponent/TotalProjectsPosted'
import { LinearGradient } from 'expo-linear-gradient'

const TotalProjectPostedScreen = () => {
  return (
    <View style = {styles.mainContainer}>
    <LinearGradient
        colors={["#FFFFFF", "#769ede"]}
        style={styles.background}
      />
      <TotalProjectsPosted/>
    </View>
    
  )
}

export default TotalProjectPostedScreen

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