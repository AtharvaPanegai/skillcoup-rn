/** @format */

import { StyleSheet, Text, View,Button } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

const SignupComponentv2 = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const userType = "freelancer";

  const userData = {
    firstName: firstName,
    lastName: lastName,
    username: username,
    phoneNumber: phoneNumber,
    emailId: email,
    password: password,
    userType: userType,
  };

  const registerFn = () => {
    axios
      .post(`${BASE_URL}/signup`, userData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <View style={{paddingTop:100}}>
      <TextInput
        placeholder='firstName'
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        placeholder='lastName'
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <TextInput
        placeholder='email'
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder='phoneNumber'
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <TextInput
        placeholder='password'
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        placeholder='username'
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

        <Button title="Register" onPress={registerFn} />

    </View>
  );
};

export default SignupComponentv2;

const styles = StyleSheet.create({});
