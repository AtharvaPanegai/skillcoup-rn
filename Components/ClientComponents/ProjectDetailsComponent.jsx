/** @format */

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Skills from "../../Test/skills.json";
import axios from "axios";
import { BASE_URL } from "../config";

const ProjectDetailsComponent = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [username, setUsername] = useState("");
  const [clientName, setClientName] = useState("");

  const { jobTitle, jobDescription, jobBudget, jobId, jobTags, ClientId } =
    route.params;
  const clientdata = {
    userIdInput: ClientId,
  };

  const fetchClientofProject = () => {
    axios
      .post(`${BASE_URL}/getUserDetails`, {
        userIdInput: ClientId,
      })
      .then((res) => {
        console.log(res.data);
        setUsername(res.data.user.username);
        setClientName(`${res.data.user.firstName} ${res.data.user.lastName}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchClientofProject();
  }, []);
  // const objToGetDetail = {
  //   jobId: jobId,
  // };
  // const fetchProjectDetails = () => {
  //   axios
  //     .post(`${BASE_URL}/freelancer/getJobDetailById`, objToGetDetail)
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // useEffect(() => {}, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            position: "relative",
            flexDirection: "row",
            paddingHorizontal: 20,
          }}>
          <Feather
            name='arrow-left'
            size={24}
            color='black'
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text style={{ fontSize: 20, marginLeft: 10 }}>Project Details</Text>
        </View>

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
            <Text onPress={()=>{navigation.navigate("ShowCase",{name:clientName,username:username})}}>{username}</Text>
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
                  <Text style={{ color: "#fff" }} key={item.tag}>
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
          {/* <TouchableOpacity
            onPress={() => {
              navigation.navigate("Chat");
            }}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#428DFB", "#073270"]}
              style={styles.linearGradientText}>
              <Text style={{ color: "#fff", alignSelf: "center", padding: 13 }}>
                Message Client
              </Text>
            </LinearGradient>
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SubmitProposal",{jobId:jobId});
            }}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#428DFB", "#073270"]}
              style={styles.linearGradientText}>
              <Text style={{ color: "#fff", alignSelf: "center", padding: 13 }}>
                Submit Proposal
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProjectDetailsComponent;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
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
});
