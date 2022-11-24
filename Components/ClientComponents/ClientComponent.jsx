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
  
} from "react-native";

import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, FontAwesome5,Feather } from "@expo/vector-icons";
import Jobs from "../../Test/jobs.json";
import HomeScreenJobComponent from "../UtilityComponents/HomeScreenJobComponent";
const ClientComponent = () => {
  const [email, setEmail] = useState("");
  const navigation=useNavigation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
       <LinearGradient colors={["#FFFFFF", "#D6E6FF"]} style={styles.background}/>
        <View style={{flexDirection:'row' ,paddingVertical:30}}>
        <Feather name="arrow-left" size={24} color="black" onPress={()=>{navigation.navigate("Home")}} />
          <Text style={{fontSize:20,marginLeft:10}}>My Profile</Text>

        </View>
         <View style={styles.innerContainer}>
          <Image  style ={styles.image}source={require("../AuthComponents/viit.png")}/>
          <Text style={styles.userText}>Stanford Fores</Text>
         </View>
          
           <View style={{paddingTop:20,flexDirection:'row'}}>
               <AntDesign name="mail" size={24} color="grey"/>
               <Text style={{paddingHorizontal:10,fontWeight:"bold",color:"black"}} onPress={()=>Linking.openURL('mailto:yash.21910487@viit.ac.in')}>yash.21910487@viit.ac.in</Text>
           </View>
           <View style={{paddingTop:20,flexDirection:'row'}}>
           <AntDesign name="phone" size={24} color="grey" />
               <Text style={{paddingHorizontal:10,fontWeight:"bold",color:"black"}} onPress={()=>Linking.openURL(`tel:876798529`)}>8975688287</Text>
           </View>
           <View style={{paddingTop:20,flexDirection:'row'}}>
           <AntDesign name="linkedin-square" size={24} color="grey" />
               <Text style={{paddingHorizontal:10,fontWeight:"bold",color:"black"}} onPress={()=>Linking.openURL("https://www.linkedin.com/in/yash-dikkar-b55329192/")}>yash-dikkar-b55329192</Text>
           </View>
              <Text style={styles.project}>Project Posted</Text>
           
           <ScrollView>
           {Jobs.map((item) => {
           return (
         
            <HomeScreenJobComponent jobTitle = {item.jobTitle} jobDescription = {item.jobDescription} jobBudget = {item.jobBudget} id={item.id} jobTags={item.jobTags}/>
    
             ) 
              })}
         </ScrollView>  
       </View>
       
    </TouchableWithoutFeedback>
    
  );
};

export default ClientComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:18
  },
   background:{
     position:'absolute',
     top:0,
     left:0,
     right:0,
     height:900
   },
 
  image: {
    height: 95,
    width: 95,
    borderRadius: 50,
    borderColor:'grey',
    borderWidth:1,
    
  },
  innerContainer:{
    flexDirection:'row',
    marginHorizontal:30,
    alignItems:'center'
  },
  userText:{
    marginHorizontal:50,
    fontSize:20,
    fontWeight:'bold'
  },
  project:{
    borderRadius:30,
    marginTop:20,
    alignSelf:'center',
    borderColor:'grey',
    borderWidth:1,
    padding:20,
   backgroundColor:'white',
    paddingHorizontal:140,
    elevation:10
    
    
  }
  
  
});
