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
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import MessageComponent from "./MessageComponent";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { BASE_URL } from "../config";
const ChatComponent = () => {
  const [chat, setChat] = useState("");
  const [messages, setMessages] = useState([]);
  const [mem1, setMem1] = useState("");
  const [mem2, setMem2] = useState("");
  const { conversation } = useRoute().params;

  const getMessagesofConversation = () => {
    axios
      .post(`${BASE_URL}/getMessageofConv`, {
        conversationIdInput: conversation._id,
      })
      .then((res) => {
        setMessages(res.data.messages);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMember1ofConv = () => {
    axios
      .post(`${BASE_URL}/getUserDetails`, {
        userIdInput: conversation.senderId,
      })
      .then((res) => {
        setMem1(res.data.user.firstName+" " + res.data.user.lastName);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getMember2ofConv = () => {
    axios
      .post(`${BASE_URL}/getUserDetails`, {
        userIdInput: conversation.receiverId,
      })
      .then((res) => {
        setMem2(res.data.user.firstName+ " " + res.data.user.lastName);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  

  const handleSendMessage = () => {
    axios
      .post(`${BASE_URL}/createMessage`, {
        conversationId: conversation._id,
        text: chat,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setChat("");
  };

  useEffect(() => {
    getMessagesofConversation();
    getMember1ofConv();
    getMember2ofConv();
  }, []);

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
          <Text style={styles.userText}>{mem1}</Text>
          <Text style={styles.userText}>{mem2}</Text>
        </View>
      </View>
      <View style={{ marginTop: 35, height: "70%", marginHorizontal: 35 }}>
        <ScrollView>
          {messages.map((item, i) => {
            return <MessageComponent key={i} message={item} />;
          })}
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
          onSubmitEditing={handleSendMessage}
        />
        <Feather
          onPress={handleSendMessage}
          style={styles.sendButton}
          name='send'
          size={36}
          color='white'
        />
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
    borderWidth: 0.2,
    borderColor: "#fff",
  },
  sendButton: {
    paddingLeft: 10,
    marginTop: 5,
  },
});
