/** @format */

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import React, { useContext, useState } from "react";
import { Button, Icon, Input, SocialIcon } from "@rneui/base";
import { TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "./AuthContext";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { Feather } from "@expo/vector-icons";
import { useTogglePasswordVisibility } from "../../assets/useTogglePasswordVisibility";
import axios from "axios";
import { BASE_URL } from "../config";
import { StackActions, useNavigation } from "@react-navigation/native";

const SigninComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const userData = {
    email: email,
    password: password,
  };

  const showPassword = () => {
    setInputType("text");
  };

  const isEmailValid = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSignin = () => {
    if (isEmailValid(email)) {
      axios
        .post(`${BASE_URL}/signin`, userData)
        .then((res) => {
          setIsLoading(true);
          console.log(res.data.user);
          navigation.replace("BottomTab", { screen: "Home" });
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          alert("Invalid Credentials!");
        });
    }else{
      console.error("Please Enter Valid Email")
    }
  };

  return (
    <LinearGradient colors={["#FFFFFF", "#D6E6FF"]} style={styles.container}>
      <Spinner visible={isLoading} />
      <Image
        style={styles.logo}
        source={require("../AuthComponents/logo.png")}
      />
      <Text style={styles.text}>Welcome back!</Text>
      <Text style={styles.text1}>Lets start earning</Text>
      <View style={styles.loginContainer}>
        <View>
          <Text style={styles.loginText}>Email</Text>
          <TextInput
            style={styles.entryBox1}
            placeholder=''
            type='email'
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View>
          <Text style={styles.loginText}>Password</Text>
          <TextInput
            style={styles.entryBox1}
            placeholder=''
            type={inputType}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={passwordVisibility}></TextInput>
        </View>
        <TouchableOpacity onPress={handleSignin}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#428DFB", "#073270"]}
            style={styles.linearGradientbutton}>
            <Text
              style={{
                color: "#fff",
                alignSelf: "center",
                paddingHorizontal: 90,
                paddingVertical: 10,
              }}>
              Sign in
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text
          style={{
            alignSelf: "center",
            color: "#072756",
            fontWeight: "800",
            fontSize: 17,
            marginTop: 40,
          }}>
          Forgot password?
        </Text>
      </View>
      {/* <View
        style={{ flexDirection: "row", alignSelf: "center", marginTop: 49 }}
      >
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 30,
            backgroundColor: "#fff",
            padding: 10,
            borderRadius: 12,
          }}
        >
          <Image
            style={styles.socialIcon}
            source={require("../AuthComponents/facebook.png")}
          />
          <Text style={{ margin: 5 }}>Facebook</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 30,
            backgroundColor: "#fff",
            padding: 10,
            borderRadius: 12,
          }}
        >
          <Image
            style={styles.socialIcon}
            source={require("../AuthComponents/google.png")}
          />
          <Text style={{ margin: 5 }}>Google</Text>
        </View>
      </View> */}

      <View style={styles.registerContainer}>
        <Text style={{ color: "#5E6368" }}>Don't have an account ?</Text>
        <Text
          style={{ fontWeight: "bold", color: "#072756" }}
          onPress={() => navigation.navigate("Signup")}>
          Sign up
        </Text>
      </View>
      <StatusBar style='auto' />
    </LinearGradient>
  );
};

export default SigninComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
  },
  text: {
    fontSize: 22,
    marginTop: 66,
    marginLeft: 60,
    fontWeight: "800",
  },
  text1: {
    marginLeft: 60,
    marginTop: -5,
    color: "#202529",
    opacity: 0.6,
  },
  loginContainer: {
    marginTop: 18,
    alignSelf: "center",
  },
  entryBox1: {
    borderRadius: 6,
    borderColor: "#6B737A",
    padding: 10,
    borderWidth: 2,
    alignSelf: "center",
    width: 300,
    marginVertical: 10,
  },
  loginText: {
    fontSize: 10,
    backgroundColor: "#E7F1FF",
    alignSelf: "flex-start",
    marginLeft: 10,
    position: "absolute",
    zIndex: 5,
    left: 20,
  },
  loginIcon: {
    flexDirection: "row",
    marginTop: 20,
    marginHorizontal: 5,
  },
  socialIcon: {
    height: 50,
    width: 50,
    margin: 20,
    alignContent: "flex-start",
  },
  registerContainer: {
    flexDirection: "row",
    marginTop: 35,
    alignSelf: "center",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    alignSelf: "center",
    width: 224,
    height: 62,
    marginTop: 167,
  },
  linearGradientbutton: {
    padding: 10,
    paddingHorizontal: 40,
    margin: 15,
    borderRadius: 22,
    alignSelf: "center",
  },
  socialIcon: {
    height: 20,
    width: 20,
    alignItems: "center",
    margin: 5,
  },
  inputContainer: {
    borderRadius: 6,
    borderColor: "#6B737A",
    padding: 10,
    borderWidth: 2,
    alignSelf: "center",
    width: 300,
    marginVertical: 10,
    flexDirection: "row",
  },
});
