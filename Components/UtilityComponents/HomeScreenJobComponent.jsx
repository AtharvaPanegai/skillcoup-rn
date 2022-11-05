/** @format */

import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
const HomeScreenJobComponent = ({
  jobTitle,
  jobBudget,
  jobDescription,
  jobTags,
  key,
}) => {
  const [showFull, setShowFull] = useState(false);
  console.log(jobTags)

  return (
    <View key={key} style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.mainText}>{jobTitle}</Text>
        <AntDesign style={styles.icon} name='like2' size={24} color='black' />
        <AntDesign
          style={styles.icon}
          name='dislike2'
          size={24}
          color='black'
        />
      </View>
      <Text style={styles.bidText}>Fixed-price - posted 1h ago</Text>
      <View style={styles.subContainer}>
        <View>
          <Text>${jobBudget}</Text>
          <Text style={{ color: "grey" }}>Budget</Text>
        </View>
        <View style={{ marginLeft: 150 }}>
          <Text>Intermediate </Text>
          <Text style={{ color: "grey" }}>Experience level</Text>
        </View>
      </View>

      <Text numberOfLines={2} style={styles.Descriptiontext}>
        {jobDescription}
      </Text>

      <View style={styles.subContainer}>
        {jobTags.map((item)=>{
          return(<Text style={styles.skillText} key={item.tagTitle}> {item.tagTitle} </Text>)
        })}
      </View>
    </View>
  );
};

export default HomeScreenJobComponent;

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
  Descriptiontext: {
    marginHorizontal: 10,
  },
});
