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

const HomeComponent = () => {
  // const jobTagsArray = Jobs.jobTags.tagTitle;
  const [isZeroJobs, setIsZeroJobs] = useState(false);
  const [Jobs, setJobs] = useState([]);

  useEffect(() => {
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
  }, []);


  const navigation = useNavigation();

  return (
    <ScrollView style={{}}>
      {!isZeroJobs && (<View>
        {Jobs.map((item) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ProjectDetails", {
                  jobTitle: item.jobTitle,
                  jobDescription: item.jobDescription,
                  jobBudget: item.jobBudget,
                  jobId: item.id,
                });
              }}>
              <HomeScreenJobComponent
                jobTitle={item.jobTitle}
                jobDescription={item.jobDescription}
                jobBudget={item.jobBudget}
                key={item.id}
                jobTags={item.jobTags}
              />
            </TouchableOpacity>
          );
        })}
      </View>)}
      {isZeroJobs && (
        <View>
          <Text>No Jobs Available</Text>
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
});
