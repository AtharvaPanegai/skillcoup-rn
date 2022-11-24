import { ScrollView, StyleSheet, Text, View } from "react-native";
import React,{useState} from 'react'
import { AntDesign } from "@expo/vector-icons";
import Jobs from "../../Test/jobs.json";
import HomeScreenJobComponent from "../UtilityComponents/HomeScreenJobComponent";

const HomeComponent = () => {
  // const jobTagsArray = Jobs.jobTags.tagTitle;
  

  return (
    <ScrollView style={{}}>
      {Jobs.map((item) => {
        return (
         
            <HomeScreenJobComponent jobTitle = {item.jobTitle} jobDescription = {item.jobDescription} jobBudget = {item.jobBudget} id={item.id} jobTags={item.jobTags}/>
    
        ) 
      })}
    </ScrollView>
  );
};

export default HomeComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignSelf: "center",
    borderWidth: 0.5,
    marginHorizontal: 10,
  },
  subContainer: {
    flexDirection: "row",
    paddingVertical: 20,
    marginHorizontal: 10,
  },
  mainText: {
    fontWeight: "bold",
    marginRight: 15,
    fontSize: 14,
  },
  icon: {
    paddingHorizontal: 7,
  },
  bidText: {
    padding: 10,
    color: "grey",
  },
  skillText: {
    borderColor: "grey",
    borderWidth: 0.5,
    backgroundColor: "grey",
    color: "white",
    borderRadius: 10,
    padding: 5,
    marginRight: 10,
  },
  toggleText:{
    color:"#3742fa",
   
  }
});
