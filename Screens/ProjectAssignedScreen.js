import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProjectAssignedComponent from '../Components/ProjectComponent/ProjectAssignedComponent'
import { LinearGradient } from 'expo-linear-gradient'

const ProjectAssignedScreen = () => {
  return(
  <View style = {styles.mainContainer}>
    <LinearGradient
        colors={["#FFFFFF", "#769ede"]}
        style={styles.background}
      />
      <ProjectAssignedComponent/>
    </View>
    
  )
}

export default ProjectAssignedScreen

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