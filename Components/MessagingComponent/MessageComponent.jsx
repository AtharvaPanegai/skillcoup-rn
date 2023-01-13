/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

const MessageComponent = ({ message }) => {
  const [isSendMessage, setisSendMessage] = useState(false);

  const whoami = () => {
    axios
      .get(`${BASE_URL}/whoami`)
      .then((res) => {
        (res.data.user._id==message.senderId)?setisSendMessage(true):setisSendMessage(false)
      })
      .catch((err) => {
        console.log(err);
      });
  };



  useEffect(() => {
    whoami();
  }, []);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isSendMessage ? "#dadada" : "#7ADEFF",
          alignSelf: isSendMessage ? "flex-end" : "flex-start",
        },
      ]}>
      <Text>{message.text}</Text>
    </View>
  );
};

export default MessageComponent;

const styles = StyleSheet.create({
  container: {
    // backgroundColor:"#dadada",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginVertical: 7,
  },
});
