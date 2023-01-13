/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IndividiualMessageComponent from "./IndividiualMessageComponent";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { BASE_URL } from "../config";
import { useEffect } from "react";
import { useState } from "react";

const ListofMessageComponent = () => {
  const [conversations, setConversations] = useState([]);

  const getAllConversationsOfUser = () => {
    axios
      .get(`${BASE_URL}/getAllConversations`)
      .then((res) => {
        setConversations(res.data.conversations);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllConversationsOfUser();
  }, []);

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {conversations.map((item, i) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Chat",{conversation:item});
            }}>
            <IndividiualMessageComponent key={i} conversation={item} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ListofMessageComponent;

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
  },
});
