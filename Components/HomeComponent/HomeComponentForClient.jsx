/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeComponentForClient = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ProjectPosted");
        }}>
        <View style={styles.seperateContainer}>
          <Text style={styles.seperateText}>Total Project Posted</Text>
          <AntDesign
            name='arrowright'
            size={20}
            style={{ alignSelf: "center", right: 10, position: "absolute" }}
            color='black'
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ProjectAssigned");
        }}>
        <View style={styles.seperateContainer}>
          <Text style={styles.seperateText}>Project Assigned</Text>

          <AntDesign
            name='arrowright'
            size={20}
            style={{ alignSelf: "center", right: 10, position: "absolute" }}
            color='black'
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ProjetCompleted");
        }}>
        <View style={styles.seperateContainer}>
          <Text style={styles.seperateText}>Project Completed</Text>

          <AntDesign
            name='arrowright'
            size={20}
            style={{ alignSelf: "center", right: 10, position: "absolute" }}
            color='black'
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate("EditProfile")}}>
        <View style={styles.seperateContainer}>
          <Text style={styles.seperateText}>Edit Profile</Text>
          <AntDesign
            name='arrowright'
            size={20}
            style={{ alignSelf: "center", right: 10, position: "absolute" }}
            color='black'
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeComponentForClient;

const styles = StyleSheet.create({
  seperateContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderColor: "#D6E6FF",
    borderWidth: 2,
    borderRadius: 20,
    marginBottom: 25,
    backgroundColor: "#D6E6FF",
  },
  seperateText: {
    margin: 20,
    fontSize: 16,
  },
  container: {
    paddingTop : 25
  },
});
