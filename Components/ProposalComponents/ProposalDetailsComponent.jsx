/** @format */

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  FontAwesome,
  MaterialIcons,
  Entypo,
  FontAwesome5,
} from "@expo/vector-icons";
import Skills from "../../Test/skills.json";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import { BASE_URL, PAYMENT_BASE_URL } from "../config";
import RazorpayCheckout from "react-native-razorpay";
import { useStripe } from "@stripe/stripe-react-native";
import { Alert } from "react-native";

const ProposalDetailsComponent = () => {
  const navigation = useNavigation();
  const [showFull, setShowFull] = useState(false);
  const { jobId, month, day, freelancerId, expertise, budget, showButtons } =
    useRoute().params;
  const [freelancerName, setFreelancerName] = useState("");
  const [freelancerSkills, setFreelancerSkills] = useState([]);
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhoneNumber, setClientPhoneNumber] = useState("");
  const [clientName, setClientName] = useState("");

  const whoami = () => {
    axios
      .get(`${BASE_URL}/whoami`)
      .then((res) => {
        setClientEmail(res.data.user.emailId);
        setClientName(res.data.user.firstName + " " + res.data.user.lastName);
        setClientPhoneNumber(res.data.user.phoneNumber);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUserById = () => {
    axios
      .post(`${BASE_URL}/getUserDetails`, { userIdInput: freelancerId })
      .then((res) => {
        console.log(res.data);
        setFreelancerName(
          `${res.data.user.firstName}  ${res.data.user.lastName}`
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const assignProjData = {
    jobIdInput: jobId,
    freelancerId: freelancerId,
  };

  // const navigation = useNavigation();
  const assignProjectToFreelancer = () => {

    console.log("assign proj triggered");
    axios
      .post(`${BASE_URL}/client/assignJob`, assignProjData)
      .then((res) => {
        console.log(res.data);
        ToastAndroid.showWithGravity(
          "Project Assigned!",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
        navigation.navigate("Home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleMessageFreelancer = () => {
    axios
      .post(`${BASE_URL}/createConversation`, { receiverId: freelancerId })
      .then((res) => {
        console.log(res.data);
        navigation.navigate("Chat", { conversation: res.data.conversation });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [amount, setAmount] = useState(0);
  const [id, setId] = useState("");

  const createOrder = () => {
    axios
      .post(`${BASE_URL}/payment/createorder`, { amount: budget })
      .then((res) => {
        console.log(res.data);
        setAmount(res.data.amount);
        setId(res.data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserById();
    whoami();
    // createOrder();
  }, []);

  async function displayRazorpay() {
    try {
      var options = {
        description: "Credits towards consultation",
        image: "https://i.imgur.com/3g7nmJC.jpg",
        currency: "INR",
        key: "rzp_test_urPAIvOKSc73Gh",
        amount: amount.toString(),
        name: "SkillCoup Corp",
        order_id: { id }, //Replace this with an order_id created using Orders API.
        prefill: {
          email: "gaurav.kumar@example.com",
          contact: "9191919191",
          name: "Gaurav Kumar",
        },
        theme: { color: "#53a20e" },
      };
      RazorpayCheckout.open(options)
        .then((data) => {
          // handle success
          alert(`Success: ${data.razorpay_payment_id}`);
        })
        .catch((error) => {
          // handle failure
          alert(`Error: ${error.code} | ${error.description}`);
        });
    } catch (err) {
      console.log(err);
    }
  }

  const stripe = useStripe();

  const buy = async () => {
    try {
      const finalAmount = parseInt(budget);
      const response = await axios.post(`${PAYMENT_BASE_URL}/buy`, {
        amount: finalAmount,
        email: clientEmail,
      });

      const data = response.data;
      console.log(response.data);
      if (!response.ok) {
        ToastAndroid.showWithGravity(
          data.message,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      }
      console.log("reached here 1");
      const initSheet = await stripe.initPaymentSheet({
        paymentIntentClientSecret: data.clientSecret,
        merchantDisplayName: "SkillCoup LLP",
      });
      if (initSheet.error) {
        console.error(initSheet.error);
        //  console.alert(initSheet.error.message);
      }
      console.log("reached here2");
      const presentSheet = await stripe.presentPaymentSheet({
        clientSecret: data.clientSecret,
      });
      if (presentSheet.error) {
        console.log("present sheet error")
        console.error(presentSheet.error);
        // return console.alert(presentSheet.error.message);
      }
      // Alert("Payment successfully! Thank you for the purchase.");
      console.log("Payment Succeded");
      assignProjectToFreelancer();

    } catch (err) {
      console.log("catch error called")
      console.error(err);
      // Alert.alert("Payment failed!");
    }
  };

  return (
    <View key={jobId} style={styles.container}>
      <LinearGradient
        colors={["#FFFFFF", "#769ede"]}
        style={styles.background}
      />
      <View style={{ marginTop: 70, paddingHorizontal: 35 }}>
        <Text style={styles.header}>Proposal Details</Text>
        <View style={{ marginTop: 30 }}>
          <Image
            style={{ height: 90, width: 90, borderRadius: 10 }}
            source={require("../AuthComponents/user.jpg")}
          />
          <Text
            style={{
              position: "absolute",
              left: 120,
              fontWeight: "bold",
              fontSize: 20,
            }}>
            {freelancerName}
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 35 }}>
          <FontAwesome name='id-card' size={24} color='black' />
          <Text style={{ marginLeft: 22, fontSize: 16 }}>Expertise:</Text>
        </View>
        <Text style={{ textAlign: "justify", paddingTop: 5 }}>{expertise}</Text>
        <View style={{ flexDirection: "row", marginTop: 35 }}>
          <MaterialIcons name='watch-later' size={24} color='black' />
          <Text style={{ marginLeft: 22, fontSize: 16 }}>Duration:</Text>
          <Text style={{ marginLeft: 10, fontSize: 16 }}>{month} Months</Text>
          <Text style={{ fontSize: 16 }}> & {day} Days</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 35 }}>
          <Entypo name='code' size={24} color='black' />
          <Text style={{ marginLeft: 22, fontSize: 16 }}>Skills:</Text>
        </View>
        <ScrollView horizontal={true} style={{ marginTop: 10 }}>
          {freelancerSkills.map((item) => {
            return (
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#428DFB", "#073270"]}
                style={styles.linearGradientbutton}>
                <Text style={{ color: "white" }} key={item._id}>
                  {item.tagTitle}
                </Text>
              </LinearGradient>
            );
          })}
        </ScrollView>
        <View style={{ flexDirection: "row", marginTop: 35 }}>
          <FontAwesome5 name='coins' size={24} color='black' />
          <Text style={{ marginLeft: 22, fontSize: 16 }}>Quotation:</Text>
          <Text style={{ marginLeft: 10, fontSize: 16 }}>{budget}</Text>
        </View>
        {showButtons && (
          <TouchableOpacity onPress={buy}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#428DFB", "#073270"]}
              style={styles.linearGradientText}>
              <Text style={{ color: "#fff", alignSelf: "center", padding: 13 }}>
                ASSIGN PROJECT
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
        {showButtons && (
          <TouchableOpacity onPress={handleMessageFreelancer}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#428DFB", "#073270"]}
              style={styles.linearGradientText}>
              <Text style={{ color: "#fff", alignSelf: "center", padding: 13 }}>
                MESSAGE FREELANCER
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default ProposalDetailsComponent;

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
  header: {
    fontSize: 24,
    fontWeight: "500",
  },
  linearGradientbutton: {
    padding: 5,
    margin: 5,
    borderRadius: 10,
    marginLeft: 10,
  },
  linearGradientText: {
    marginTop: 30,
    width: 300,
    alignSelf: "center",
    borderRadius: 22,
  },
});
