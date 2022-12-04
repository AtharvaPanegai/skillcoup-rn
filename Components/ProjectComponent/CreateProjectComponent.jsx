/** @format */

import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import axios from "axios";
import { BASE_URL } from "../config";
import { Dropdown } from "react-native-element-dropdown";
const CreateProjectComponent = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobTags, setJobTags] = useState([]);
  const [jobCategory, setJobCategory] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobBudget, setJobBudget] = useState(null);
  const [fileResponse, setFileResponse] = useState([]);

  const data = [
    { label: "software", value: "1" },
    { label: "design", value: "2" },
    { label: "content", value: "3" },
  ];

  _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});

    alert(result.uri);

    console.log(result);
  };

  // post request to backend

  const projData = {
    jobTitle: jobTitle,
    jobCategory: jobCategory,
    jobBudget: jobBudget,
    jobTags: [
      {
        tagTitle: "React",
      },
      {
        tagTitle: "JavaScript",
      },
    ],
    jobDescription: jobDescription
  };

  const postProject = () => {
    axios
      .post(`${BASE_URL}/client/postjob`, {
        jobTitle: jobTitle,
        jobCategory: jobCategory,
        jobBudget: jobBudget,
        jobTags: [
          {
            tagTitle: "React",
          },
          {
            tagTitle: "JavaScript",
          },
        ],
        jobDescription: jobDescription
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log(projData)
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#FFFFFF", "#769ede"]}
        style={styles.background}
      />
      <ScrollView style={{ marginTop: 70, paddingHorizontal: 35 }}>
        <Text style={styles.header}>Post your project here !!</Text>
        <Text style={styles.iptext}>Job Title:</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Text Here'
          type='text'
          value={jobTitle}
          onChangeText={(text) => setJobTitle(text)}
        />
        <Text style={styles.iptext}>Job Tags:</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Text Here'
          type='text'
          value={jobTags}
          onChangeText={(text) => setJobTags([...jobTags, text])}
        />
        <Text style={styles.iptext}>Job Category:</Text>
        <Dropdown
          style={styles.Dropdown}
          data={data}
          value={jobCategory}
          labelField='label'
          onChange={(item) => {
            setJobCategory(item.label);
          }}
          placeholder={jobCategory}
        />
        <Text style={styles.iptext}>Job Description:</Text>
        <TextInput
          multiline
          maxLength={250}
          style={styles.description}
          placeholder='Enter Text Here'
          type='text'
          value={jobDescription}
          onChangeText={(text) => setJobDescription(text)}
        />
        <Text style={styles.iptext}>Job Budget:</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Budget for Job'
          type="number"
          value={jobBudget}
          onChange = {(number)=>setJobBudget(number)}
        />
        <View style={{ flexDirection: "row", marginTop: 64 }}>
          {/* <AntDesign style={{paddingVertical:16}} name="upload" size={26} color="black" /> */}
          {/* <TouchableOpacity onPress={_pickDocument}>
            <Text style={styles.upload}>Upload any files here</Text>
        </TouchableOpacity> */}
        </View>
        <TouchableOpacity onPress={postProject}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#428DFB", "#073270"]}
            style={styles.linearGradientText}>
            <Text style={{ color: "#fff", alignSelf: "center", padding: 13 }}>
              Post
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CreateProjectComponent;

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
  input: {
    marginTop: 2,
    borderBottomWidth: 1,
    paddingLeft: 8,
  },
  description: {
    marginTop: 2,
    backgroundColor: "#D9D9D9",
    borderRadius: 7,
    height: 100,
    borderColor: "#D9D9D9",
    paddingLeft: 6,
  },
  upload: {
    marginLeft: 26,
    borderRadius: 12,
    backgroundColor: "#D9D9D9",
    paddingVertical: 16,
    paddingHorizontal: 60,
    justifyContent: "center",
    color: "grey",
  },
  linearGradientText: {
    width: 300,
    alignSelf: "center",
    borderRadius: 22,
  },
  Dropdown: {
    alignContent: "center",
    marginLeft: 5,
    borderRadius: 8,
    width: 170,
    paddingHorizontal: 10,
    backgroundColor: "#D9D9D9",
  },
});
