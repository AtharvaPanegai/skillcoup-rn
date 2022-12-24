/** @format */

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Dropdown } from "react-native-element-dropdown";
import Skills from "../../Test/skills.json";
import axios from "axios";
import { BASE_URL } from "../config";
import { useNavigation, useRoute } from "@react-navigation/native";
const data = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
  { label: "6", value: 6 },
  { label: "7", value: 7 },
  { label: "8", value: 8 },
  { label: "9", value: 9 },
  { label: "10", value: 10 },
  { label: "11", value: 11 },
  { label: "12", value: 12 },
  { label: "13", value: 13 },
  { label: "14", value: 14 },
  { label: "15", value: 15 },
  { label: "16", value: 16 },
  { label: "17", value: 17 },
  { label: "18", value: 18 },
  { label: "19", value: 19 },
  { label: "20", value: 20 },
  { label: "21", value: 21 },
  { label: "22", value: 22 },
  { label: "23", value: 23 },
  { label: "24", value: 24 },
  { label: "25", value: 25 },
  { label: "26", value: 26 },
  { label: "27", value: 27 },
  { label: "28", value: 28 },
  { label: "29", value: 29 },
  { label: "30", value: 30 },
];
const data1 = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
  { label: "6", value: 6 },
  { label: "7", value: 7 },
  { label: "8", value: 8 },
  { label: "9", value: 9 },
  { label: "10", value: 10 },
  { label: "11", value: 11 },
];

const SubmitProposalComponent = () => {
  const [days, setDays] = useState(0);
  const [months, setMonths] = useState(0);
  const [quotation, setQuotation] = useState(0);
  const [skills, setSkills] = useState([]);
  const [description, setDescription] = useState("");
  const { jobId } = useRoute().params;

  const navigation = useNavigation();

  // get the freelancer details here
  const whoami = async () => {
    await axios
      .get(`${BASE_URL}/whoami`)
      .then((res) => {
        setSkills(res.data.user.skills);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    whoami();
    console.log(jobId);
  }, []);

  // post the proposal here
  const proposalData = {
    proposalDescription: description,
    proposalQutation: quotation,
    jobTimeRequired: {
      days: days,
      months: months,
    },
    jobId: jobId,
  };

  const handleSubtmitProposal = () => {
    axios
      .post(`${BASE_URL}/freelancer/submitproposal`, proposalData)
      .then((res) => {
        navigation.navigate("ProposalSubmittedScreen");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <LinearGradient
          colors={["#FFFFFF", "#769ede"]}
          style={styles.background}
        />
        <View style={{ marginTop: 70, paddingHorizontal: 35 }}>
          <Text style={styles.header}>Submit Your Proposal</Text>
          <Text style={styles.iptext}>Time Required:</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.iptext1}>Days:</Text>
            <Dropdown
              style={styles.Dropdown}
              data={data}
              value={days}
              labelField='label'
              onChange={(item) => {
                setDays(item.label);
              }}
              placeholder={days}
            />
            <Text style={styles.iptext2}>Months:</Text>
            <Dropdown
              style={styles.Dropdown}
              data={data1}
              value={months}
              labelField='label'
              onChange={(item) => {
                setMonths(item.label);
              }}
              placeholder={months}
            />
          </View>
          <Text style={styles.iptext}>
            Explain Your expertise for this project
          </Text>
          <TextInput
            style={styles.description}
            placeholder='Enter Text Here'
            value={description}
            type='text'
            onChangeText={(text) => setDescription(text)}
          />
          {skills.length > 0 && <Text style={styles.iptext}>Skills:</Text>}
          {skills.length <= 0 && (
            <Text style={styles.iptext}>Add Skills from your account</Text>
          )}
          <ScrollView horizontal={true} style={{}}>
            {skills.length > 0 &&
              skills.map((item) => {
                return (
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={["#428DFB", "#073270"]}
                    style={styles.linearGradientbutton}>
                    <Text style={{ color: "white" }} key={item.tag}>
                      {item.tag}
                    </Text>
                  </LinearGradient>
                );
              })}
          </ScrollView>
          <Text style={styles.iptext}>Quotation:</Text>
          <TextInput
            style={styles.input}
            placeholder='Enter Amount Here'
            type='number'
            keyboardType='numeric'
            value={quotation}
            onChangeText={(text) => setQuotation(text)}
          />
          <TouchableOpacity onPress={handleSubtmitProposal}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#428DFB", "#073270"]}
              style={styles.linearGradientText}>
              <Text style={{ color: "#fff", alignSelf: "center", padding: 13 }}>
                SUBMIT PROPOSAL
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SubmitProposalComponent;

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
  iptext: {
    marginTop: 32,
    color: "grey",
  },
  iptext1: {
    marginTop: 10,
    color: "grey",
  },
  Dropdown: {
    alignContent: "center",
    marginLeft: 5,
    borderRadius: 8,
    width: 80,
    backgroundColor: "#D9D9D9",
  },
  iptext2: {
    marginTop: 10,
    color: "grey",
    marginLeft: 70,
  },
  linearGradientbutton: {
    padding: 5,
    margin: 5,
    borderRadius: 10,
    marginLeft: 10,
  },
  input: {
    marginTop: 2,
    borderBottomWidth: 1,
    paddingLeft: 8,
  },
  linearGradientText: {
    justifyContent: "flex-end",
    marginTop: 150,
    width: 300,
    alignSelf: "center",
    borderRadius: 22,
  },
  description: {
    marginTop: 2,
    backgroundColor: "#D9D9D9",
    borderRadius: 7,
    height: 100,
    borderColor: "#D9D9D9",
    paddingLeft: 6,
  },
});
