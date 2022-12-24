/** @format */

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { BASE_URL } from "../config";

const AssignedComponent = () => {
  const { jobTitle, jobDescription, jobBudget, jobId, jobTags, freelancer } =
    useRoute().params;

    const [freelancerName, setFreelancerName] = useState("");
    const [username, setUsername] = useState("");

  const getFreelancerDetails = () => {
    axios
      .post(`${BASE_URL}/getUserDetails`, { userIdInput: freelancer })
      .then((res) => {
        console.log(res.data);
        setFreelancerName(`${res.data.user.firstName} ${res.data.user.lastName}`);
        setUsername(res.data.user.username);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  useEffect(() => {
    getFreelancerDetails();
  }, []);

  return (
    
      <View key={jobId} style={styles.container}>
        <View style={{ marginTop: 60, borderRadius: 30 }}>
          <LinearGradient
            colors={["#D6E6FF", "#F8FBFF", "#D6E6FF"]}
            style={styles.background}
          />

          <Text style={styles.headerText}>{jobTitle}</Text>

          <View style={{ flexDirection: "row-reverse", paddingLeft: 20 }}>
            {/* <Image
            style={{ height: 30, width: 30, borderRadius: 50 }}
            source={require("../AuthComponents/clientlogo.png")}
          /> */}
            <Text>{username}</Text>
            <Text
              style={{
                color: "#818589",
                alignSelf: "center",
                marginRight: 10,
              }}>
              Posted by
            </Text>
          </View>
          <ScrollView style={{ height: 232, marginVertical: 20 }}>
            <Text
              style={{
                alignSelf: "center",
                paddingTop: 32,
                paddingHorizontal: 32,
                marginBottom: 70,
                textAlign: "justify",
                letterSpacing: 1,
              }}>
              {jobDescription}
            </Text>
          </ScrollView>

          <Text
            style={{ paddingHorizontal: 32, fontSize: 14, fontWeight: "800" }}>
            Skills Required
          </Text>
          <ScrollView horizontal={true} style={{ marginHorizontal: 32 }}>
            {jobTags.map((item) => {
              return (
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={["#428DFB", "#073270"]}
                  style={styles.linearGradientbutton}>
                  <Text style={{ color: "#fff" }} key={item._id}>
                    {item.tagTitle}
                  </Text>
                </LinearGradient>
              );
            })}
          </ScrollView>
          <View
            style={{
              flexDirection: "row",
              marginTop: 30,
              marginHorizontal: 32,
            }}>
            <View>
              <Text style={{ fontWeight: "bold" }}>Budget</Text>
              <Text style={{ color: "#818589" }}>{jobBudget}</Text>
            </View>
            <View style={{ marginLeft: 230 }}>
              <Text style={{ fontWeight: "bold" }}>Timeline</Text>
              <Text style={{ color: "#818589" }}>3 months</Text>
            </View>
          </View>
        </View>
        <Text style={{marginHorizontal:30,marginTop:20,fontSize:20,fontWeight:"bold"}}>Assigned To:</Text>
        <View  style={styles.proposalcontainer}>
                <Text
                  style={{
                    fontSize: 16,
                    paddingTop: 10,
                    paddingLeft: 10,
                    fontWeight: "bold",
                  }}>
                  Freelancer@{freelancerName}
                </Text>
                <Text style={{ paddingLeft: 10, color: "grey", paddingTop: 2 }}>
                  Duration : 3 months 3 days
                </Text>

                <Text style={{ paddingLeft: 10, paddingTop: 2, color: "grey" }}>
                  Expertise: 
                </Text>
                <Text
                  style={{
                    paddingLeft: 10,
                    paddingTop: 2,
                    fontWeight: "bold",
                    paddingBottom: 10,
                  }}>
                  Quotation:
                </Text>
              </View>
      </View>
    
  );
};

export default AssignedComponent;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 900,
    borderRadius: 30,
  },
  headerText: {
    alignSelf: "center",
    paddingTop: 50,
    fontSize: 22,
    fontWeight: "bold",
  },
  linearGradientbutton: {
    padding: 5,
    margin: 5,
    borderRadius: 10,
    marginLeft: 10,
  },
  linearGradientText: {
    marginVertical: 13,
    width: 300,
    alignSelf: "center",
    borderRadius: 22,
  },
  proposalcontainer: {
    marginHorizontal: 32,
    marginVertical: 13,
    borderRadius: 10,
    backgroundColor: "#D9D9D9",
  },
});
