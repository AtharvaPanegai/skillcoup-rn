/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IndividiualMessageComponent from "./IndividiualMessageComponent";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ListofMessageComponent = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{navigation.navigate("Chat")}}>
        <IndividiualMessageComponent freelancerName={"Atharva Panegai"} />
      </TouchableOpacity>
    </View>
  );
};

export default ListofMessageComponent;

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
  },
});
