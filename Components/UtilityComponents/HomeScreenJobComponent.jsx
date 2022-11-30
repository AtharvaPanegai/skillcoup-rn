import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreenJobComponent = ({
  jobTitle,
  jobBudget,
  jobDescription,
  jobId,
  jobTags,
}) => {
  const [showFull, setShowFull] = useState(false);

  useEffect(()=>{
    console.log(jobId);
  },[])

  return (
    <View key={jobId} style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.mainText}>{jobTitle}</Text>
      </View>
      <View style={styles.subContainer}>
        <View>
          <Text>₹ {jobBudget}</Text>
          <Text style={{ color: "grey" }}>Budget</Text>
        </View>
        <View style={{ marginLeft: 150 }}>
          <Text>Intermediate </Text>
          <Text style={{ color: "grey" }}>Experience level</Text>
        </View>
      </View>
      <Text numberOfLines={2} style={styles.descriptionText}>
        {jobDescription}
      </Text>

      <View style={styles.subContainer}>
      {jobTags.map((item) => {
          return (
            <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#428DFB", "#073270"]}
          style={styles.linearGradientbutton}
        >
          <Text style={{color:'#fff'}} key={item.tag}>
              {item.tagTitle}
            </Text>
        </LinearGradient>
            
          );
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
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 30,
    paddingHorizontal:10

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
    borderRadius: 20,
    padding: 5,
    marginRight: 7,
    paddingHorizontal: 10,
  },
  toggleText: {
    color: "#3742fa",
  },
  descriptionText: {
    marginHorizontal: 10,
  },
  linearGradientbutton:{
    padding:5,
    margin:5,
    borderRadius:10
  }
});
