/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import axios from "axios";
import { BASE_URL } from "../config";
import { useEffect } from "react";

const ProjectCompletedComponent = () => {
  const getCompletedProjects = () => {
    axios
      .get(`${BASE_URL}/client/completedProjects`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(()=>{
    getCompletedProjects();
  },[])

  return (
    <View>
      <Text>ProjectCompletedComponent</Text>
    </View>
  );
};

export default ProjectCompletedComponent;

const styles = StyleSheet.create({});
