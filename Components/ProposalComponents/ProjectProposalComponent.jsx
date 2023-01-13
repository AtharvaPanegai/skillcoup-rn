/** @format */

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Skills from "../../Test/skills.json";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import proposal from "../../Test/proposal.json";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import { BASE_URL } from "../config";

const ProjectProposalComponent = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [proposals, setProposals] = useState([]);
  const [clientName, setClientName] = useState("");
  const [clientUsername, setClientUsername] = useState("");

  const { jobBid, updatedJobPost } = route.params;

  const getJobProposals = () => {
    axios
      .post(`${BASE_URL}/job/proposals`, { jobIdInput: updatedJobPost._id })
      .then((res) => {
        console.log("------------------");
        console.log(res.data.jobs)
        setProposals(res.data.jobs);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getClientDetails = () => {
    axios
      .post(`${BASE_URL}/getUserDetails`, {
        userIdInput: updatedJobPost.Client,
      })
      .then((res) => {
        console.log(res.data);
        setClientName(`${res.data.user.firstName} ${res.data.user.lastName}`)
        setClientUsername(res.data.user.username)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getJobProposals();
    getClientDetails();
  }, []);

  return (
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

      <ScrollView style={{ marginTop: 60, borderRadius: 30 }}>
        <LinearGradient
          colors={["#D6E6FF", "#F8FBFF", "#D6E6FF"]}
          style={styles.background}
        />

        <Text style={styles.headerText}>{updatedJobPost.jobTitle}</Text>

        <View style={{ flexDirection: "row-reverse", paddingLeft: 20 }}>
        <Text onPress={()=>{navigation.navigate("ShowCase",{name:clientName,username:clientUsername})}}>{clientName}</Text>
          <Text
            style={{
              color: "#818589",
              alignSelf: "center",
              marginRight: 10,
            }}>
            Posted by
          </Text>
        </View>
        <View style={{ marginVertical: 20 }}>
          <Text
            style={{
              alignSelf: "center",
              paddingTop: 32,
              paddingHorizontal: 32,
              marginBottom: 70,
              textAlign: "justify",
              letterSpacing: 1,
            }}>
            {updatedJobPost.jobDescription}
          </Text>
        </View>

        <Text
          style={{ paddingHorizontal: 32, fontSize: 14, fontWeight: "800" }}>
          Skills Required
        </Text>
        <ScrollView horizontal={true} style={{ marginHorizontal: 32 }}>
          {updatedJobPost.jobTags.map((item) => {
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
            <Text style={{ color: "#818589" }}>{updatedJobPost.jobBudget}</Text>
          </View>
          <View style={{ marginLeft: 230 }}>
            <Text style={{ fontWeight: "bold" }}>Timeline</Text>
            <Text style={{ color: "#818589" }}>3 months</Text>
          </View>
        </View>
        {proposals.map((item) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ProposalDetails", {
                  freelancerId: item.freelancer,
                  month: item.jobTimeRequired.months,
                  budget: item.proposalQutation,
                  jobId: updatedJobPost._id,
                  day: item.jobTimeRequired.days,
                  expertise: item.proposalDescription,
                  showButtons:true,
                });
              }}>
              <View key={item.id} style={styles.proposalcontainer}>
                <Text
                  style={{
                    fontSize: 16,
                    paddingTop: 10,
                    paddingLeft: 10,
                    fontWeight: "bold",
                  }}>
                  Freelancer@{item.freelancer}
                </Text>
                <Text style={{ paddingLeft: 10, color: "grey", paddingTop: 2 }}>
                  Duration : {item.jobTimeRequired.months} months {item.jobTimeRequired.days} days
                </Text>

                <Text style={{ paddingLeft: 10, paddingTop: 2, color: "grey" }}>
                  Expertise: {item.proposalDescription}
                </Text>
                <Text
                  style={{
                    paddingLeft: 10,
                    paddingTop: 2,
                    fontWeight: "bold",
                    paddingBottom: 10,
                  }}>
                  Quotation:{item.proposalQutation}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ProjectProposalComponent;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
  },
  background: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 1500,
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
    marginVertical: 20,
    width: 300,
    alignSelf: "center",
    borderRadius: 22,
  },
  proposalcontainer: {
    marginHorizontal: 20,
    marginVertical: 15,
    paddingVertical:5,
    borderRadius: 10,
    backgroundColor: "#D9D9D9",
    opacity: 0.4
  },
});
