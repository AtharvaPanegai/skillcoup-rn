/** @format */

import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard,
    Linking,
    TouchableOpacity,
  } from "react-native";
  
  import React from "react";
  import { LinearGradient } from "expo-linear-gradient";
  import { useState } from "react";
  import { useNavigation } from "@react-navigation/native";
  import { AntDesign, FontAwesome5, Feather } from "@expo/vector-icons"
  import { Entypo } from "@expo/vector-icons";
  import axios from "axios";
  import { BASE_URL } from "../config";
  import { useEffect } from "react";
  
  const FreelancerProfileScreenComponent = ({ UserType = "Client" }) => {
    const [name, setName] = useState("");
    const [useranme, setUseranme] = useState("");
  
    const navigation = useNavigation();
  
    const handleSignout = () => {
      axios
        .get(`${BASE_URL}/signout`)
        .then((res) => {
          console.log(res.data);
          navigation.replace("Signin");
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    const whoAmi = () => {
      axios
        .get(`${BASE_URL}/whoami`)
        .then((res) => {
          console.log(res.data);
          setName(`${res.data.user.firstName} ${res.data.user.lastName}`);
          setUseranme(res.data.user.username);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    useEffect(() => {
      whoAmi();
    }, []);
  
    return (
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <LinearGradient
              colors={["#FFFFFF", "#769ede"]}
              style={styles.background}
            />
            <View style={{ flexDirection: "row", paddingVertical: 30 }}>
              <Feather
                name='arrow-left'
                size={24}
                color='black'
                onPress={() => {
                  navigation.goBack();
                }}
              />
              <TouchableOpacity onPress={handleSignout}>
                <View style={styles.log}>
                  <Entypo
                    name='log-out'
                    size={20}
                    color='black'
                    style={{ alignSelf: "center", marginLeft: 5 }}
                  />
                  <Text style={styles.logout}>Logout</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.innerContainer}>
              <Image
                style={styles.image}
                source={{
                  uri: `https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1670148608~exp=1670149208~hmac=bc57b66d67d2b9f4929c8e592ff17e8c8660721608add2f18fc20d19c1aab7e4`,
                }}
              />
              <Text style={styles.userText}>{name}</Text>
              <Text style={{ marginBottom: 48 }}>{useranme}</Text>
            </View>
            <TouchableOpacity onPress={()=>{navigation.navigate("TotalProposalsSubmiteed")}}>
              <View style={styles.seperateContainer}>
                <Text style={styles.seperateText}>Total Proposals Submitted</Text>
                <AntDesign
                  name='arrowright'
                  size={20}
                  style={{ alignSelf: "center", right: 10, position: "absolute" }}
                  color='black'
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate("AcceptedProposals")}}>
              <View style={styles.seperateContainer}>
             
                  <Text style={styles.seperateText}>Accepted Proposals</Text>
           
                <AntDesign
                  name='arrowright'
                  size={20}
                  style={{ alignSelf: "center", right: 10, position: "absolute" }}
                  color='black'
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate("FreelancerCompletedProjects")}}>
              <View style={styles.seperateContainer}>
                <Text style={styles.seperateText}>Completed Projects</Text>
  
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
        </TouchableWithoutFeedback>
      </ScrollView>
    );
  };
  
  export default FreelancerProfileScreenComponent;
  
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
  
    image: {
      height: 140,
      width: 140,
      borderRadius: 70,
  
      borderWidth: 1,
      marginBottom: 10,
    },
    innerContainer: {
      marginHorizontal: 30,
      alignItems: "center",
    },
    userText: {
      marginHorizontal: 50,
      fontSize: 20,
      fontWeight: "bold",
    },
    project: {
      borderRadius: 30,
      marginTop: 20,
      alignSelf: "center",
      borderColor: "grey",
      borderWidth: 1,
      padding: 20,
      backgroundColor: "white",
      paddingHorizontal: 140,
      elevation: 10,
    },
  
    log: {
      flexDirection: "row",
      left: 260,
      alignSelf: "center",
      borderRadius: 50,
      borderColor: "#D6E6FF",
      borderWidth: 2,
    },
    logout: {
      margin: 5,
    },
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
  });
  