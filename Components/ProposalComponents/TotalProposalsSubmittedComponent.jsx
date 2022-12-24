/** @format */

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Lottie from "lottie-react-native";

const TotalProposalsSubmittedComponent = () => {
  const navigation = useNavigation();
  const [proposals, setProposals] = useState([]);

  const getTotalProposalsSubmitted = () => {
    axios
      .get(`${BASE_URL}/freelancer/getAllProposals`)
      .then((res) => {
        console.log(res.data);
        setProposals(res.data.proposals);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTotalProposalsSubmitted();
  }, []);

  return (
    <View>
      {proposals?.map((item) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ProposalDetails", {
                freelancerId: item.freelancer,
                month: item.jobTimeRequired.months,
                budget: item.proposalQutation,
                jobId: item.jobId,
                day: item.jobTimeRequired.days,
                expertise: item.proposalDescription,
                showButtons:false
              });
            }}>
            <View key={item.id} style={styles.proposalcontainer}>
              <Text
                style={{
                  fontSize: 16,
                  paddingTop: 10,
                  paddingLeft: 10,
                  fontWeight: "bold",
                }}>
                Freelancer@{item.freelancer}
              </Text>
              <Text style={{ paddingLeft: 10, color: "grey", paddingTop: 2 }}>
                Duration : {item.jobTimeRequired.months} months
                {item.jobTimeRequired.days} days
              </Text>

              <Text style={{ paddingLeft: 10, paddingTop: 2, color: "grey" }}>
                Expertise: {item.proposalDescription}
              </Text>
              <Text
                style={{
                  paddingLeft: 10,
                  paddingTop: 2,
                  fontWeight: "bold",
                  paddingBottom: 10,
                }}>
                Quotation:{item.proposalQutation}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
      {!proposals && (
        <View>
        <Lottie
          style={styles.animation}
          source={require("../../assets/empty.json")}
          autoPlay
          loop
        />
        <Text style={{ alignSelf: "center", fontSize: 20, color: "grey" }}>
          No Proposals Submitted Yet
        </Text>
      </View>
      )}
    </View>
  );
};

export default TotalProposalsSubmittedComponent;

const styles = StyleSheet.create({
  proposalcontainer: {
    marginHorizontal: 20,
    marginVertical: 15,
    paddingVertical:5,
    borderRadius: 10,
    backgroundColor: "#D9D9D9",
    opacity: 0.6,
    borderWidth:0.5,
  },
  animation: {
    marginVertical: 160,
    alignSelf: "center",
    height: 200,
    width: 200,
    alignContent: "center",
  },
});
