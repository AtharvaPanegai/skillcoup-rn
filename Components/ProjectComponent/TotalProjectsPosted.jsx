/** @format */

import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from "react-native";
import React, { useState,useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../config";
import Lottie from "lottie-react-native";
import HomeScreenJobComponent from "../UtilityComponents/HomeScreenJobComponent";
import { useNavigation } from "@react-navigation/native";

const TotalProjectsPosted = () => {

  const navigation = useNavigation();

  const [isZeroJobs, setIsZeroJobs] = useState(false);
  const [Jobs, setJobs] = useState([]);

  const getTotalProjectPosted = () => {
    axios
      .get(`${BASE_URL}/client/jobsPosted`)
      .then((res) => {
        console.log(res.data);
        if (!res.data.jobsPosted.length) {
          setIsZeroJobs(true);
          console.log(isZeroJobs);
        }
        setJobs(res.data.jobsPosted);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTotalProjectPosted();
  }, []);

  return (
    <ScrollView style={{}}>
      {!isZeroJobs && (<View style={{marginTop:30}}>
        {Jobs.map((item) => {
          return (
            <TouchableOpacity key={item.jobId}
              onPress={() => {navigation.navigate("ProjectProposal",{updatedJobPost : item})}}>
              <HomeScreenJobComponent
                jobTitle={item.jobTitle}
                jobDescription={item.jobDescription}
                jobBudget={item.jobBudget}
                jobId={item._id}
                jobTags={item.jobTags}
              />
            </TouchableOpacity>
          );
        })}
      </View>)}
      {isZeroJobs && (
          <View>
           <Lottie
          style={styles.animation}
          source={require("../../assets/empty.json")}
          autoPlay
          loop
        />
          <Text style={{alignSelf:"center",fontSize:20,color:"grey"}}>No Projects Posted</Text>
          </View>
      )}
    </ScrollView>
  );
};

export default TotalProjectsPosted;

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
  toggleText: {
    color: "#3742fa",
  },
  animation: {
    marginVertical: 160,
    alignSelf: "center",
    height: 200,
    width: 200,
    alignContent: "center",
  },
});
