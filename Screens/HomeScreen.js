import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeComponent from '../Components/HomeComponent/HomeComponent'

const HomeScreen = () => {
  return (
    <View style = {styles.mainContainer}>
      <HomeComponent />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    mainContainer:{
        marginVertical : 25,
        marginHorizontal:5,
    }
})