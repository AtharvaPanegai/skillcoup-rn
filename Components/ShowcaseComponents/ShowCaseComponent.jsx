import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5, Ionicons, FontAwesome } from "@expo/vector-icons";
import Skills from "../../Test/skills.json";
import { useRoute } from "@react-navigation/native";

const ShowCaseComponent = ({ UserType = "Freelancer" }) => {

  const {name,username} = useRoute().params;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#FFFFFF", "#769ede"]}
        style={styles.background}
      />
      <ScrollView style={{ padding: 30 }}>
        <Image
          style={styles.image}
          source={require("../AuthComponents/user.jpg")}
        />
        <Text
          style={{
            alignSelf: "center",
            paddingTop: 20,
            fontSize: 18,
            fontWeight: "800",
          }}
        >
          {name}
        </Text>
        <Text style={{ alignSelf: "center", paddingTop: 10, color: "grey" }}>
          {username}
        </Text>
        {/* <Text
          style={{
            alignSelf: "center",
            paddingVertical: 30,
            fontSize: 16,
            letterSpacing: 1.5,
            fontWeight: "800",
          }}
        >
          React and React Native Developer|Javascript|Cross platform Developer.
        </Text> */}
        <View>
          <FontAwesome5 name="address-card" size={24} color="black" />
          {UserType == "Client" && <Text style={styles.infoType}>About:</Text>}
          {UserType == "Freelancer" && (
            <Text style={styles.infoType}>Company Description:</Text>
          )}
          <Text
            style={{
              textAlign: "justify",
              paddingTop: 19,
              letterSpacing: 1,
              fontSize: 16,
            }}
          >
            I Help people to digitize their business through my digital agency which helps them in developing websites and mobile applications to make their app 
          </Text>
        </View>
        {UserType == "Freelancer" && (
          <View style={{ marginTop: 19 }}>
            <Ionicons name="md-people" size={24} color="black" />
            <Text style={styles.infoType}>Number Of Employees:</Text>
            <Text
              style={{
                textAlign: "justify",
                paddingTop: 5,
                letterSpacing: 1,
                fontSize: 16,
                marginLeft: 50,
              }}
            >
              50-100
            </Text>
          </View>
        )}
        {UserType == "Client" && (
          <View style={{ marginTop: 19 }}>
            <FontAwesome name="code" size={24} color="black" />
            <Text style={styles.infoType}>Skills:</Text>
            <ScrollView horizontal={true} style={{}}>
              {Skills.map((item) => {
                return (
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={["#428DFB", "#073270"]}
                    style={styles.linearGradientbutton}
                  >
                    <Text style={{ color: "white" }} key={item.tag}>
                      {item.tag}
                    </Text>
                  </LinearGradient>
                );
              })}
            </ScrollView>
          </View>
        )}
        <TouchableOpacity onPress={() => {}}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#428DFB", "#073270"]}
            style={styles.linearGradientText}
          >
            {UserType == "Client" && (
              <Text style={{ color: "#fff", alignSelf: "center", padding: 13 }}>
                Message Freelancer
              </Text>
            )}
            {/* {UserType == "Freelancer" && (
              <Text style={{ color: "#fff", alignSelf: "center", padding: 13 }}>
                Message Client
              </Text>
            )} */}
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ShowCaseComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    alignSelf: "center",
    marginTop: 70,
  },
  infoType: {
    position: "absolute",
    left: 50,
    top: 2,
    color: "#5E6368",
  },
  linearGradientbutton: {
    padding: 5,
    marginTop: 20,
    borderRadius: 10,
    marginLeft: 10,
  },
  linearGradientText: {
    marginVertical: 65,
    width: 300,
    alignSelf: "center",
    borderRadius: 22,
  },
});
