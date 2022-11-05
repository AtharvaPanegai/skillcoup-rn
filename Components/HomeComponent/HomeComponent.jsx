/** @format */

import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import Jobs from "../../Test/jobs.json";
import HomeScreenJobComponent from "../UtilityComponents/HomeScreenJobComponent";

const HomeComponent = () => {
  // const jobTagsArray = Jobs.jobTags.tagTitle;
  const [showFull, setShowFull] = useState(false);

  return (
    <ScrollView style={{}}>
      {Jobs.map((item) => {
        return (
          <HomeScreenJobComponent
            jobTitle={item.jobTitle}
            jobDescription={item.jobDescription}
            jobBudget={item.jobBudget}
            key={item.id}
            jobTags = {item.jobTags}
          />
        );
      })}
    </ScrollView>
  );
};

export default HomeComponent;

const styles = StyleSheet.create({});
