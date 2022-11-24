import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Skills from "../../Test/skills.json";

const ProjectComponent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 40,
          paddingHorizontal: 20,
        }}
      >
        <Feather
          name="arrow-left"
          size={24}
          color="black"
          onPress={() => {
            navigation.navigate("ClientProfile");
          }}
        />
        <Text style={{ fontSize: 20, marginLeft: 10 }}>Project Details</Text>
      </View>

      <View style={{ marginTop: 60, borderRadius: 30 }}>
        <LinearGradient
          colors={["#D6E6FF", "#F8FBFF", "#D6E6FF"]}
          style={styles.background}
        />

        <Text style={styles.headerText}>
          Web Development for eCommerce Website
        </Text>

        <View style={{ flexDirection: "row-reverse", paddingLeft: 20 }}>
          <Image
            style={{ height: 30, width: 30, borderRadius: 50 }}
            source={require("../AuthComponents/clientlogo.png")}
          />
          <Text
            style={{ color: "#818589", alignSelf: "center", marginRight: 10 }}
          >
            Posted by
          </Text>
        </View>
         <ScrollView style={{height:232,marginVertical:20}}>
         <Text
          style={{
            alignSelf: "center",
            paddingTop: 32,
            paddingHorizontal:32,
            marginBottom:70,
            textAlign: "justify",
            letterSpacing: 1,
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat rem quibusdam, eum corporis optio aliquid dolore architecto consequuntur enim tenetur vel cupiditate. Sint esse repellat veniam corporis tenetur similique dolores.
          Voluptates consectetur labore ducimus iure maiores beatae voluptatum temporibus quod veritatis repudiandae odit, placeat, dicta cumque, culpa a totam. Libero deleniti, nostrum ipsum fugiat eum ducimus pariatur tempore et consequuntur.
          Nesciunt, nihil odit facere modi perspiciatis corrupti architecto, eaque ea dolorem, recusandae cupiditate voluptates quis dicta cum! Distinctio perferendis laborum illo quo voluptatem? Harum, libero? Amet provident possimus tenetur at?
          Assumenda enim reprehenderit doloribus. Cum facilis esse hic iure, maiores fuga dignissimos! In id enim ipsam impedit, ipsa delectus laboriosam perspiciatis quae, quas unde veritatis totam laborum itaque eius odio.
          Ex inventore voluptas consequuntur esse at minima, amet, fuga velit non magni repellendus ipsam totam rem. Reprehenderit voluptates cupiditate hic obcaecati corrupti minima magnam blanditiis dignissimos omnis. Corrupti, consequuntur quis!
        </Text>
         </ScrollView>
       
        <Text
          style={{ paddingHorizontal: 32, fontSize: 14, fontWeight: "800" }}
        >
          Skills Required
        </Text>
        <ScrollView horizontal={true} style={{ marginHorizontal: 32 }}>
          {Skills.map((item) => {
            return (
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#428DFB", "#073270"]}
                style={styles.linearGradientbutton}
              >
                <Text style={{ color: "#fff" }} key={item.tag}>
                  {item.tag}
                </Text>
              </LinearGradient>
            );
          })}
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            marginTop: 30,
            marginHorizontal: 32,
          }}
        >
          <View>
            <Text style={{ fontWeight: "bold" }}>Budget</Text>
            <Text style={{ color: "#818589" }}>$100</Text>
          </View>
          <View style={{ marginLeft: 230 }}>
            <Text style={{ fontWeight: "bold" }}>Timeline</Text>
            <Text style={{ color: "#818589" }}>3 months</Text>
          </View>
        </View>
        <TouchableOpacity onPress={()=>{navigation.navigate("Chat")}}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#428DFB", "#073270"]}
          style={styles.linearGradientText}
        >
          <Text style={{ color: "#fff", alignSelf: "center", padding: 13 }}>
            Message Client
          </Text>
        </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate("Success")}}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#428DFB", "#073270"]}
          style={styles.linearGradientText}
        >
          <Text style={{ color: "#fff", alignSelf: "center", padding: 13 }}>
            Submit Proposal
          </Text>
        </LinearGradient>
        </TouchableOpacity>
       
      </View>
    </View>
  );
};

export default ProjectComponent;

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
    borderRadius: 30,
  },
  headerText: {
    alignSelf: "center",
    paddingTop: 50,
    fontSize: 22,
    fontWeight: "bold",
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
});
