/** @format */

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  FontAwesome,
  MaterialIcons,
  Entypo,
  FontAwesome5,
} from "@expo/vector-icons";
import Skills from "../../Test/skills.json";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { BASE_URL } from "../config";

const ProposalDetailsComponent = () => {
  const [showFull, setShowFull] = useState(false);
  const { jobId, month, day, freelancerId, expertise, budget } =
    useRoute().params;
  const [freelancerName, setFreelancerName] = useState("");
  const [freelancerSkills, setFreelancerSkills] = useState([]);

  const getUserById = () => {
    axios
      .post(`${BASE_URL}/getUserDetails`, { userIdInput: freelancerId })
      .then((res) => {
        console.log(res.data);
        setFreelancerName(
          `${res.data.user.firstName}  ${res.data.user.lastName}`
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const assignProjData = {
    jobIdInput: jobId,
    freelancerId: freelancerId,
  };

  const assignProjectToFreelancer = () => {
    console.log("assign proj triggered")
    axios
      .post(`${BASE_URL}/client/assignJob`, assignProjData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserById();
  }, []);

  return (
    <View key={jobId} style={styles.container}>
      <LinearGradient
        colors={["#FFFFFF", "#769ede"]}
        style={styles.background}
      />
      <View style={{ marginTop: 70, paddingHorizontal: 35 }}>
        <Text style={styles.header}>Proposal Details</Text>
        <View style={{ marginTop: 30 }}>
          <Image
            style={{ height: 90, width: 90, borderRadius: 10 }}
            source={require("../AuthComponents/user.jpg")}
          />
          <Text
            style={{
              position: "absolute",
              left: 120,
              fontWeight: "bold",
              fontSize: 20,
            }}>
            {freelancerName}
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 35 }}>
          <FontAwesome name='id-card' size={24} color='black' />
          <Text style={{ marginLeft: 22, fontSize: 16 }}>Expertise:</Text>
        </View>
        <Text style={{ textAlign: "justify", paddingTop: 5 }}>{expertise}</Text>
        <View style={{ flexDirection: "row", marginTop: 35 }}>
          <MaterialIcons name='watch-later' size={24} color='black' />
          <Text style={{ marginLeft: 22, fontSize: 16 }}>Duration:</Text>
          <Text style={{ marginLeft: 10, fontSize: 16 }}>{month} mon</Text>
          <Text style={{ fontSize: 16 }}>-{day} day</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 35 }}>
          <Entypo name='code' size={24} color='black' />
          <Text style={{ marginLeft: 22, fontSize: 16 }}>Skills:</Text>
        </View>
        <ScrollView horizontal={true} style={{ marginTop: 10 }}>
          {freelancerSkills.map((item) => {
            return (
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#428DFB", "#073270"]}
                style={styles.linearGradientbutton}>
                <Text style={{ color: "white" }} key={item._id}>
                  {item.tagTitle}
                </Text>
              </LinearGradient>
            );
          })}
        </ScrollView>
        <View style={{ flexDirection: "row", marginTop: 35 }}>
          <FontAwesome5 name='coins' size={24} color='black' />
          <Text style={{ marginLeft: 22, fontSize: 16 }}>Quotation:</Text>
          <Text style={{ marginLeft: 10, fontSize: 16 }}>{budget}</Text>
        </View>
        <TouchableOpacity onPress={assignProjectToFreelancer}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#428DFB", "#073270"]}
            style={styles.linearGradientText}>
            <Text style={{ color: "#fff", alignSelf: "center", padding: 13 }}>
              ASSIGN PROJECT
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#428DFB", "#073270"]}
            style={styles.linearGradientText}>
            <Text style={{ color: "#fff", alignSelf: "center", padding: 13 }}>
              MESSAGE FREELANCER
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProposalDetailsComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 900,
  },
  header: {
    fontSize: 24,
    fontWeight: "500",
  },
  linearGradientbutton: {
    padding: 5,
    margin: 5,
    borderRadius: 10,
    marginLeft: 10,
  },
  linearGradientText: {
    marginTop: 30,
    width: 300,
    alignSelf: "center",
    borderRadius: 22,
  },
});
