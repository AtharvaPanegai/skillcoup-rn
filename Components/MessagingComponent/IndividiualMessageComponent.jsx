/** @format */

import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";
import { useEffect } from "react";

const IndividiualMessageComponent = ({ conversation }) => {
  const [secondUser, setSecondUser] = useState({});
  const [isFreelancer, setIsFreelancer] = useState(false);

  const getUsernameFromConversation = () => {
    axios
      .get(`${BASE_URL}/whoami`)
      .then((res) => {
        res.data.user.userType == "freelancer"
          ? setIsFreelancer(true)
          : setIsFreelancer(false);
      })
      .catch((err) => {
        console.log(err);
      });

    if (isFreelancer) {
      axios
        .post(`${BASE_URL}/getUserDetails`, {
          userIdInput: conversation.senderId,
        })
        .then((res) => {
          setSecondUser(res.data.user);

        })
        .catch((err) => {
          console.log(err);
        });
    } 
    if(!isFreelancer) {
      axios
        .post(`${BASE_URL}/getUserDetails`, {
          userIdInput: conversation.receiverId,
        })
        .then((res) => {
          setSecondUser(res.data.user);
  
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    getUsernameFromConversation();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: `https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1670148608~exp=1670149208~hmac=bc57b66d67d2b9f4929c8e592ff17e8c8660721608add2f18fc20d19c1aab7e4`,
          }}
        />
      </View>
      <View style={styles.messageNameContainer}>
        <Text>
          {secondUser.firstName} {secondUser.lastName}{" "}
        </Text>
      </View>
    </View>
  );
};

export default IndividiualMessageComponent;

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
    borderWidth: 1,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  mainContainer: {
    paddingVertical: 10,
    flexDirection: "row",
    borderWidth: 0.2,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  messageNameContainer: {
    paddingLeft: 10,
    // alignItems : "center"
    justifyContent: "center",
    marginBottom: 5,
  },
});
