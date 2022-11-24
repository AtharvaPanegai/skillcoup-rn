import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient/build/LinearGradient'

const SuccessComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <LinearGradient
         colors={["#FFFFFF",
            "#D9D9D9",
            "#D6E6FF"]}/>
        <Image  style={{ height:73,width:80,marginVertical:43,marginLeft:18}}source={require("../AuthComponents/clientlogo.png")}/>
       <View style={styles.textContainer}>
        <Text style={{fontSize:18,fontWeight:"500"}}>Congratulations!</Text>
        <Text style={{fontSize:14,color:"#818589",paddingTop:10 }}>Your Proposal has</Text>
        <Text style={{fontSize:14,color:"#818589" }}>been accepted</Text>
       </View>
       
      </View>
      <TouchableOpacity onPress={()=>{navigation.navigate("Success")}}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#428DFB", "#073270"]}
          style={styles.linearGradientText}
        >
          <Text style={{ color: "#fff", alignSelf: "center", padding: 13 }}>
            Ask For Requirements
          </Text>
        </LinearGradient>
        </TouchableOpacity>
    </View>
  )
}

export default SuccessComponent

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    innerContainer:{
        marginTop:102,
        flexDirection:"row",
        marginHorizontal:32,
        borderRadius:15,
        borderColor:"#D3D3D3",borderWidth:2,

    },textContainer:{
        paddingVertical:37,
        marginLeft:43,
        
    },
    linearGradientText:{
        marginVertical: 62,
        width: 350,
        paddingVertical:13,
        alignSelf: "center",
        borderRadius: 30,
        
    }
})