/** @format */

import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient/build/LinearGradient";
import Lottie from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
const ProposalSubmittedComponent = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <LinearGradient colors={["#FFFFFF", "#D9D9D9", "#D6E6FF"]} />
        <Lottie
          style={{ height: 73, width: 80, marginVertical: 20, marginLeft: 18 }}
          source={require("../../assets/application.json")}
          autoPlay
          loop={true}
        />
        <View style={styles.textContainer}>
          <Text style={{ fontSize: 14, color: "#818589", paddingTop: 10 }}>
            Your Proposal has been
          </Text>
          <Text style={{ fontSize: 14, color: "#818589" }}> Submitted Successfully</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("BottomTab",{screen:"Home"});
        }}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#428DFB", "#073270"]}
          style={styles.linearGradientText}>
          <Text style={{ color: "#fff", alignSelf: "center", padding: 13 }}>
            Find More Jobs 
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default ProposalSubmittedComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    marginTop: 102,
    flexDirection: "row",
    marginHorizontal: 32,
    borderRadius: 15,
    borderColor: "#D3D3D3",
    borderWidth: 2,
  },
  textContainer: {
    paddingVertical: 37,
    marginLeft: 43,
  },
  linearGradientText: {
    marginVertical: 40,
    width: 300,
    alignSelf: "center",
    borderRadius: 22,
  },
});
