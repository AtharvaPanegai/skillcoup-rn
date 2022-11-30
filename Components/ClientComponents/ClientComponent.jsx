import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Linking,
  TouchableOpacity
} from "react-native";

import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, FontAwesome5, Feather } from "@expo/vector-icons";
import Jobs from "../../Test/jobs.json";
import HomeScreenJobComponent from "../UtilityComponents/HomeScreenJobComponent";
import { Entypo } from "@expo/vector-icons";
import axios from "axios";
import { BASE_URL } from "../config";

const ClientComponent = ({ UserType="Client"}) => {
  
  const navigation = useNavigation();
  
  const handleSignout = ()=>{
    axios.get(`${BASE_URL}/logout`).then((res)=>{
      
      navigation.replace("signin")

    }).catch((err)=>{
      console.log(err);
      alert("Invalid Credentials!")
    })
  }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <LinearGradient
          colors={["#FFFFFF", "#769ede"]}
          style={styles.background}
        />
        <View style={{ flexDirection: "row", paddingVertical: 30 }}>
          <Feather
            name="arrow-left"
            size={24}
            color="black"
            onPress={() => {
              navigation.navigate("Home");
            }}
          />
           <TouchableOpacity onPress={handleSignout}>
           <View style={styles.log}>
          <Entypo name="log-out" size={20} color="black" style={{alignSelf:"center",marginLeft:5}} />
            <Text style={styles.logout}>Logout</Text>
          </View>
           </TouchableOpacity>
          
        </View>
        <View style={styles.innerContainer}>
          <Image
            style={styles.image}
            source={require("../AuthComponents/viit.png")}
          />
          <Text style={styles.userText}>Stanford Fores</Text>
           <Text style={{marginBottom:48}}>stanford_73Fores</Text> 
        </View>
       <TouchableOpacity >
              <View style={styles.seperateContainer}>
                {UserType=="Client" && (<Text style={styles.seperateText}>Total Project Posted</Text>)}
                {UserType=="Freelancer" && (<Text style={styles.seperateText}>Total Proposals Submitted</Text>)}
                <AntDesign name="arrowright" size={20} style={{alignSelf:"center",right:10,position:"absolute"}} color="black" />
               </View>
           </TouchableOpacity>
           <TouchableOpacity >
              <View style={styles.seperateContainer}>
                {UserType=="Client" && (<Text style={styles.seperateText}>Project Assigned</Text>)}
                {UserType=="Freelancer" && (<Text style={styles.seperateText}>Accepted Propsals</Text>)}
                <AntDesign name="arrowright" size={20} style={{alignSelf:"center",right:10,position:"absolute"}} color="black" />
               </View>
           </TouchableOpacity>
           <TouchableOpacity>
              <View style={styles.seperateContainer}>
                {UserType=="Client" && (<Text style={styles.seperateText}>Project Completed</Text>)}
                {UserType=="Freelancer" && (<Text style={styles.seperateText}>Complete Projects</Text>)}
                <AntDesign name="arrowright" size={20} style={{alignSelf:"center",right:10,position:"absolute"}} color="black" />
               </View>
           </TouchableOpacity>
           <TouchableOpacity>
              <View style={styles.seperateContainer}>
              <Text style={styles.seperateText}>Edit Profile</Text>
                <AntDesign name="arrowright" size={20} style={{alignSelf:"center",right:10,position:"absolute"}} color="black" />
               </View>
           </TouchableOpacity>
           <TouchableOpacity>
              <View style={styles.seperateContainer}>
              <Text style={styles.seperateText}>Complete Profile</Text>
                <AntDesign name="arrowright" size={20} style={{alignSelf:"center",right:10,position:"absolute"}} color="black" />
               </View>
           </TouchableOpacity>          
         
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ClientComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 900,
  },

  image: {
    height: 140,
    width: 140,
    borderRadius: 70,
   
    borderWidth: 1,
    marginBottom:10
  },
  innerContainer: {
    
    marginHorizontal: 30,
    alignItems: "center",
  },
  userText: {
    marginHorizontal: 50,
    fontSize: 20,
    fontWeight: "bold",
   
  },
  project: {
    borderRadius: 30,
    marginTop: 20,
    alignSelf: "center",
    borderColor: "grey",
    borderWidth: 1,
    padding: 20,
    backgroundColor: "white",
    paddingHorizontal: 140,
    elevation: 10,
  },
  
  log: {
    flexDirection:"row",
    left: 260,
    alignSelf: "center",
    borderRadius: 50,
    borderColor:"#D6E6FF",
    borderWidth:2,
    
  },
  logout: {
    margin:5
  },
  seperateContainer:{
    flexDirection:"row",
    alignItems:"flex-start",
    borderColor:"#D6E6FF",
    borderWidth:2,
    borderRadius:20,
    marginBottom:25,
    backgroundColor:"#D6E6FF"
  },
  seperateText:{
    margin:20,
    fontSize:16
  }
});
