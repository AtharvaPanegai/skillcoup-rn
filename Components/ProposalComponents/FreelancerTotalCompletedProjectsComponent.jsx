/** @format */

import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";
import { useEffect } from "react";
import Lottie from "lottie-react-native";
import HomeScreenJobComponent from "../UtilityComponents/HomeScreenJobComponent";

const FreelancerTotalCompletedProjectsComponent = () => {
  const [isZeroJobs, setIsZeroJobs] = useState(false);
  const [Jobs, setJobs] = useState([]);
  const getCompletedProjects = () => {
    axios
      .get(`${BASE_URL}/client/completedProjects`)
      .then((res) => {
        console.log(res.data);
        if (!res.data.jobs.length) {
          setIsZeroJobs(true);
          console.log(isZeroJobs);
        }
        setJobs(res.data.jobs);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCompletedProjects();
  }, []);

  return (
    <ScrollView style={{ marginBottom: 50 }}>
      {!isZeroJobs && (
        <View style={{ marginTop: 30 }}>
          {Jobs.map((item) => {
            return (
              <HomeScreenJobComponent
                jobTitle={item.jobTitle}
                jobDescription={item.jobDescription}
                jobBudget={item.jobBudget}
                jobId={item._id}
                jobTags={item.jobTags}
              />
            );
          })}
        </View>
      )}
      {isZeroJobs && (
        <View>
          <Lottie
            style={styles.animation}
            source={require("../../assets/empty.json")}
            autoPlay
            loop
          />
          <Text style={{ alignSelf: "center", fontSize: 20, color: "grey" }}>
            No Projects Completed
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

export default FreelancerTotalCompletedProjectsComponent;

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
