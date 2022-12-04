/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import axios from "axios";
import { BASE_URL } from "../config";
import { useEffect } from "react";

const ProjectAssignedComponent = () => {
  const getAssignedProjects = () => {
    axios
      .get(`${BASE_URL}/client/assignedJobs`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(()=>{
    getAssignedProjects();
  },[])

  return (
    <View>
      <Text>ProjectAssignedComponent</Text>
    </View>
  );
};

export default ProjectAssignedComponent;

const styles = StyleSheet.create({});
