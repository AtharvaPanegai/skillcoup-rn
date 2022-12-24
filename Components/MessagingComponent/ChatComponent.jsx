/** @format */

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { Feather } from '@expo/vector-icons';
import MessageComponent from "./MessageComponent";
const ChatComponent = () => {
  const [chat, setChat] = useState("");
  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <View
        style={{ flexDirection: "row", marginTop: 71, marginHorizontal: 35 }}>
        <Image
          style={styles.image}
          source={require("../AuthComponents/viit.png")}
        />
        <Image
          style={styles.image}
          source={require("../AuthComponents/clientlogo.png")}
        />
        <View
          style={{
            marginLeft: 96,
            justifyContent: "center",
            alignSelf: "flex-end",
          }}>
          <Text style={styles.userText}>Martina Wolna</Text>
          <Text style={styles.userText}>Maciej Kowalski</Text>
        </View>
      </View>
      <View style={{ marginTop: 35, height: "70%", marginHorizontal: 35 }}>
        <ScrollView>
          <MessageComponent messageText={"Hey Wanted to get in touch with you regarding the project where you submitted proposal"} isSendMessage = {true} />
          <MessageComponent messageText={"Sure"} isSendMessage = {false} />
          <MessageComponent messageText={"Can you tell me more about your requirements"} isSendMessage = {false} />
          <MessageComponent messageText={"So that I would be able to understand better"} isSendMessage = {false} />
          <MessageComponent messageText={"Sure"} isSendMessage = {true} />
          <MessageComponent messageText={"So this project is about developing a website"} isSendMessage = {true} />
          <MessageComponent messageText={"A Portfolio website"} isSendMessage = {true} />
          <MessageComponent messageText={"That's great I've expertise in developing websites "} isSendMessage = {false} />
          <MessageComponent messageText={"This is send message"} isSendMessage = {true} />
          <MessageComponent messageText={"This is recevive message"} isSendMessage = {false} />
        </ScrollView>
      </View>
      <View style={{ flexDirection: "row", marginLeft: 35, paddingTop: 20 }}>
        <TextInput
          style={styles.chatBox}
          placeholder='Type a Message'
          placeholderTextColor={"#fff"}
          type='chat'
          value={chat}
          onChangeText={(text) => setChat(text)}
        />
        <Feather style = {styles.sendButton} name="send" size={36} color="white" />
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292F3F",
  },
  image: {
    height: 45,
    width: 45,
    borderRadius: 50,
    marginLeft: 10,
  },
  userText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "400",
    paddingBottom: 7,
  },
  chatBox: {
    backgroundColor: "#272A35",
    width: 300,
    paddingVertical: 12,
    paddingLeft: 15,
    borderRadius: 10,
    color: "#fff",
    borderWidth : 0.2,
    borderColor:"#fff"
  },
  sendButton : {
    paddingLeft : 10,
    marginTop:5,
  }
});
