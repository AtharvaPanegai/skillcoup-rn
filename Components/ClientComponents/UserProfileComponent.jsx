/** @format */

import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  Fontisto,
  Ionicons,
  MaterialIcons,
  SimpleLineIcons,
  Zocial,
} from "@expo/vector-icons";
import Skills from "../../Test/skills.json";
import { Dropdown } from "react-native-element-dropdown";
import axios from "axios";
import { BASE_URL } from "../config";
const UserProfileComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [tag, setTag] = useState("");
  const [emp, setEmp] = useState("");
  const [skills, setSkills] = useState([]);
  const [isFreelancer, setIsFreelancer] = useState(false);

  const data = [
    { label: "0-10", value: "1" },
    { label: "10-50", value: "2" },
    { label: "50-100", value: "3" },
    { label: "100-500", value: "4" },
    { label: "500+", value: "5" },
  ];

  const whoami = () => {
    axios
      .get(`${BASE_URL}/whoami`)
      .then((res) => {
        console.log(res.data);
        setFirstName(res.data.user.firstName);
        setLastName(res.data.user.lastName);
        setUserName(res.data.user.username);
        setPhoneNumber(res.data.user.phoneNumber);
        setEmail(res.data.user.emailId);
        setSkills(res.data.user.skills);
        res.data.user.userType == "freelancer"
          ? setIsFreelancer(true)
          : setIsFreelancer(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    whoami();
  }, []);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <LinearGradient
          colors={["#FFFFFF", "#769ede"]}
          style={styles.background}
        />
        <ScrollView>
          <View style={{ paddingTop: 77 }}>
            <Image
              style={{
                height: 140,
                width: 140,
                borderRadius: 70,
                alignSelf: "center",
              }}
              source={{
                uri: `https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1670148608~exp=1670149208~hmac=bc57b66d67d2b9f4929c8e592ff17e8c8660721608add2f18fc20d19c1aab7e4`,
              }}
            />
            <Entypo
              onPress={() => {}}
              style={{
                position: "absolute",
                alignItems: "center",
                right: 100,
                top: 190,
                elevation: 5,
              }}
              name='camera'
              size={24}
              color='black'
            />
          </View>
          <View style={{ marginTop: 40, marginLeft: 20, flexDirection: "row" }}>
            <SimpleLineIcons
              name='user'
              size={24}
              style={{ marginRight: 10, top: 7 }}
              color='black'
            />
            <View>
              <Text style={{ color: "#3c3f45", fontSize: 12 }}>
                First name:
              </Text>
              <TouchableOpacity>
                <TextInput
                  style={{ width: 120 }}
                  placeholder={firstName}
                  type='firstName'
                  value={firstName}
                  onChangeText={(text) => setFirstName(text)}
                />
                <FontAwesome
                  name='pencil'
                  style={{ position: "absolute", left: 90, elevation: -10 }}
                  size={18}
                  color='black'
                />
              </TouchableOpacity>
            </View>
            <View style={{ marginLeft: 70 }}>
              <Text style={{ color: "#3c3f45", fontSize: 12 }}>Last name:</Text>
              <TouchableOpacity>
                <TextInput
                  style={{ width: 120 }}
                  placeholder={lastName}
                  type='lastName'
                  value={lastName}
                  onChangeText={(text) => setLastName(text)}
                />
                <FontAwesome
                  name='pencil'
                  style={{ position: "absolute", left: 90, top: 4 }}
                  size={18}
                  color='black'
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.userInput}>UserName:</Text>
          <View style={{ flexDirection: "row", marginLeft: 20 }}>
            <SimpleLineIcons
              name='user'
              size={24}
              style={{ paddingRight: 10, top: 7 }}
              color='black'
            />

            <TouchableOpacity>
              <TextInput
                style={{ width: 360 }}
                placeholder={username}
                type='lastName'
                value={username}
                onChangeText={(text) => setUserName(text)}
              />
              <FontAwesome
                name='pencil'
                style={{ position: "absolute", left: 278, elevation: -10 }}
                size={18}
                color='black'
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.userInput}>Phone Number:</Text>
          <View style={{ flexDirection: "row", marginLeft: 20 }}>
            <MaterialIcons
              name='phone-iphone'
              size={24}
              style={{ paddingRight: 10, top: 7 }}
              color='black'
            />

            <TouchableOpacity>
              <TextInput
                style={{ width: 360, paddingTop: 3 }}
                placeholder={phoneNumber}
                type='phonenumber'
                value={phoneNumber}
                onChangeText={(text) => setPhoneNumber(text)}
              />
              <FontAwesome
                name='pencil'
                style={{ position: "absolute", left: 278, elevation: -10 }}
                size={18}
                color='black'
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.userInput}>Email id:</Text>
          <View
            style={{ flexDirection: "row", marginLeft: 20 }}
            behavior='padding'>
            <Fontisto
              name='email'
              size={24}
              style={{ paddingRight: 10, top: 7 }}
              color='black'
            />

            <TouchableOpacity>
              <TextInput
                style={{ width: 360, paddingTop: 3 }}
                placeholder={email}
                type='email'
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <FontAwesome
                name='pencil'
                style={{ position: "absolute", left: 278, elevation: -10 }}
                size={18}
                color='black'
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.userInput}>About:</Text>
          <View
            style={{ flexDirection: "row", marginLeft: 20 }}
            behavior='padding'>
            <AntDesign
              name='idcard'
              size={24}
              style={{ paddingRight: 10, top: 7 }}
              color='black'
            />

            <TouchableOpacity>
              <TextInput
                multiline
                style={{ width: 250, paddingTop: 3 }}
                placeholder={about}
                type='email'
                value={about}
                onChangeText={(text) => setAbout(text)}
              />
              <FontAwesome
                name='pencil'
                style={{ position: "absolute", left: 278, elevation: -10 }}
                size={18}
                color='black'
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.userInput}>Tag Line:</Text>
          <View
            style={{ flexDirection: "row", marginLeft: 20 }}
            behavior='padding'>
            <AntDesign
              name='tago'
              size={24}
              style={{ paddingRight: 10, top: 7 }}
              color='black'
            />

            <TouchableOpacity>
              <TextInput
                multiline
                style={{ width: 250, paddingTop: 3 }}
                placeholder={tag}
                type='email'
                value={tag}
                onChangeText={(text) => setTag(text)}
              />
              <FontAwesome
                name='pencil'
                style={{ position: "absolute", left: 278, elevation: -10 }}
                size={18}
                color='black'
              />
            </TouchableOpacity>
          </View>
          {isFreelancer && (<Text style={styles.userInput}>Skills:</Text>)}
          {isFreelancer && (
            <ScrollView horizontal={true} style={{ marginHorizontal: 32 }}>
              {skills.map((item) => {
                return (
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={["#428DFB", "#073270"]}
                    style={styles.linearGradientbutton}>
                    <Text style={{ color: "white" }} key={item.tagTitle}>
                      {item.tagTitle}
                    </Text>
                  </LinearGradient>
                );
              })}
              
            </ScrollView>
          )}
          {!isFreelancer && (
            <Text style={styles.userInput}>Number Of Employees:</Text>
          )}
          {!isFreelancer && (
            <View
              style={{ flexDirection: "row", marginLeft: 20 }}
              behavior='padding'>
              <Ionicons
                name='people'
                size={24}
                style={{ paddingRight: 10, top: 7 }}
                color='black'
              />
              <Dropdown
                style={styles.Dropdown}
                data={data}
                value={emp}
                labelField='label'
                iconStyle={styles.iconStyle}
                onChange={(item) => {
                  setEmp(item.label);
                }}
                placeholder={emp}
              />
            </View>
          )}
          <TouchableOpacity onPress={() => {}}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#428DFB", "#073270"]}
              style={styles.linearGradientText}>
              <Text style={{ color: "#fff", alignSelf: "center", padding: 13 }}>
                Save
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default UserProfileComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 900,
  },
  userInput: {
    color: "#3c3f45",
    fontSize: 12,
    marginLeft: 51,
    marginTop: 32,
  },
  linearGradientbutton: {
    padding: 5,
    margin: 5,
    borderRadius: 10,
    marginLeft: 10,
  },
  linearGradientText: {
    marginVertical: 20,
    width: 300,
    alignSelf: "center",
    borderRadius: 22,
  },
  Dropdown: {
    width: 300,
  },
});
