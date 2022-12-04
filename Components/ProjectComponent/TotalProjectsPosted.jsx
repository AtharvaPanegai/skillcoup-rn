/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import axios from "axios";
import { BASE_URL } from "../config";
import { useEffect } from "react";

const TotalProjectsPosted = () => {
  const getTotalProjectPosted = () => {
    axios
      .get(`${BASE_URL}/client/jobsPosted`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(()=>{
    getTotalProjectPosted();
  },[])

  return (
    <View>
      <Text>TotalProjectsPosted</Text>
    </View>
  );
};

export default TotalProjectsPosted;

const styles = StyleSheet.create({});
