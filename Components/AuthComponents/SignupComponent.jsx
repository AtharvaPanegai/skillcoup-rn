import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  Image,
  Pressable,
  Switch,
  Touchable,
  TouchableOpacity,
} from "react-native";
import CheckBox from "expo-checkbox";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import { useTogglePasswordVisibility } from "../../assets/useTogglePasswordVisibility";
import { Feather } from "@expo/vector-icons";
import { StackActions, useNavigation } from "@react-navigation/native";
import axios from "axios";
import { TouchableWithoutFeedback } from "react-native-web";
import { BASE_URL } from "../config";
const SignupComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const navigation = useNavigation();

  const userData = {
    firstName: firstName,
    lastName: lastName,
    username: username,
    phoneNumber: phoneNumber,
    email: email,
    password: password,
    userType: isEnabled ? "client" : "freelancer",
  };

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const registerFn = () => {
    axios
      .post(`${BASE_URL}/signup`, userData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  return (
    <LinearGradient colors={["#FFFFFF", "#D6E6FF"]} style={styles.container}>
      <KeyboardAvoidingScrollView>
        <Text style={styles.text}>Register.Bid.Earn</Text>

        <View style={{ alignSelf: "center", marginTop: 34 }}>
          <View>
            <Text style={styles.userText}>First Name</Text>
            <TextInput
              style={styles.entryBox}
              placeholder="sania "
              type="firstName"
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
            />
          </View>

          <View>
            <Text style={styles.userText}>Last Name</Text>
            <TextInput
              style={styles.entryBox}
              placeholder="Forze"
              type="lastName"
              value={lastName}
              onChangeText={(text) => setLastName(text)}
            />
          </View>

          <View>
            <Text style={styles.userText}>Username</Text>
            <TextInput
              style={styles.entryBox}
              placeholder="User2671"
              type="username"
              value={username}
              onChangeText={(text) => setUserName(text)}
            />
          </View>

          <View>
            <Text style={styles.userText}>PhoneNumber</Text>
            <TextInput
              style={styles.entryBox}
              placeholder="+91789999"
              type="phoneNumber"
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
            />
          </View>

          <View>
            <Text style={styles.userText}>Email</Text>
            <TextInput
              style={styles.entryBox}
              placeholder="xyz@abc.com"
              type="email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View>
            <Text style={styles.userText}>Password</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="*********"
                type="password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={passwordVisibility}
              />
              <Pressable onPress={handlePasswordVisibility}>
                <Feather
                  style={{ marginLeft: 190, top: 5 }}
                  name={rightIcon}
                  size={18}
                  color="#6B737A"
                />
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.switchContainer}>
          <Text>Freelancer</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text>Client</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text style={{ marginLeft: 8 }}>
            I agree with the Terms & Conditions
          </Text>
        </View>
        <TouchableOpacity style = {styles.buttonContainer} onPress = {registerFn} >
          {/* <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#428DFB", "#073270"]}
            style={styles.linearGradientbutton}
          > */}
            <Text
              style={{
                color: "#fff",
                alignSelf: "center",
                paddingHorizontal: 90,
                paddingVertical: 10,
              }}
            >
              Sign Up
            </Text>
          {/* </LinearGradient> */}
        </TouchableOpacity>
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <Text style={{ color: "#072756", fontSize: 16, fontWeight: "bold" }}>
            Already member?
          </Text>
          <Text
            style={{ fontSize: 16, color: "black", fontWeight: "bold" }}
            onPress={() => {
              navigation.navigate("Signin");
            }}
          >
            {" "}
            Sign In
          </Text>
        </View>
        {/* <View
          style={{ flexDirection: "row", alignSelf: "center", marginTop: 20 }}
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
      </KeyboardAvoidingScrollView>
    </LinearGradient>
  );
};

export default SignupComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  text: {
    fontSize: 25,
    alignSelf: "center",

    fontWeight: "800",
  },
  icon: {
    marginLeft: 30,
    marginVertical: 30,
    paddingTop: 10,
  },
  innerContainer: {
    flexDirection: "row",
    marginTop: 15,
    alignSelf: "center",
  },
  userType: {
    backgroundColor: "#428DFB",
    borderWidth: 0.5,
    borderRadius: 2,
    marginHorizontal: 30,
    paddingVertical: 15,
    paddingHorizontal: 50,
    fontWeight: "bold",
    color: "#fff",
  },

  entryBox: {
    borderRadius: 6,
    borderColor: "#6B737A",
    padding: 10,
    borderWidth: 2,
    marginVertical: 10,
    width: 300,
  },
  linearGradient: {
    padding: 15,
    margin: 30,
    flex: 1,
    marginLeft: 30,
    borderRadius: 22,
  },
  buttonText: {
    color: "#fff",
    alignSelf: "center",
    paddingHorizontal: 10,
  },
  linearGradientbutton: {
    padding: 10,
    paddingHorizontal: 40,
    margin: 15,
    borderRadius: 22,
    alignSelf: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginTop: 37,
    alignSelf: "center",
  },
  userText: {
    left: 10,
    backgroundColor: "#EAF2FF",
    alignSelf: "flex-start",
    position: "absolute",
    zIndex: 5,
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
  switchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer:{
    paddingHorizontal:35,
    paddingVertical:18,
    backgroundColor:"blue",
    marginHorizontal:30,
    borderRadius:30
  }
});
