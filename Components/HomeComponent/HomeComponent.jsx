/** @format */

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
// import Jobs from "../../Test/jobs.json";
import HomeScreenJobComponent from "../UtilityComponents/HomeScreenJobComponent";
import { useNavigation } from "@react-navigation/native";
import { JobService } from "../../service/JobService";
import axios from "axios";
import { BASE_URL } from "../config";
import Lottie from "lottie-react-native";

const HomeComponent = () => {
  // const jobTagsArray = Jobs.jobTags.tagTitle;
  const [isZeroJobs, setIsZeroJobs] = useState(false);
  const [Jobs, setJobs] = useState([]);
  const [userType, setUserType] = useState("");
  const getAllJobs = () => {
    axios
      .get(`${BASE_URL}/freelancer/getAllJobs`)
      .then((res) => {
        console.log(res.data.jobs);
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
    getAllJobs();
  }, []);

  const navigation = useNavigation();

  return (
    <ScrollView style={{}}>
      {!isZeroJobs && (
        <View style={{ marginTop: 30 }}>
          <Text>Jobs For you</Text>
          {Jobs.map((item) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ProjectDetails", {
                    jobTitle: item.jobTitle,
                    jobDescription: item.jobDescription,
                    jobBudget: item.jobBudget,
                    jobId: item._id,
                    jobTags: item.jobTags,
                    ClientId: item.Client,
                  });
                }}>
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
            No Projects Available
          </Text>
        </View>
      )}
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
