import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";

const CreateProjectComponent = () => {


    const [jobTitle,setJobTitle]=useState("");
    const [jobTags,setJobTags]=useState("");  
    const [jobCategory,setJobCategory]=useState("");
    const [jobDescription,setJobDescription]=useState("");
    const [jobBudget,setJobBudget]=useState("");
    const [fileResponse, setFileResponse] = useState([]);

    _pickDocument = async () => {

      let result = await DocumentPicker.getDocumentAsync({});
      
      alert(result.uri);
      
      console.log(result);
      
      }


  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#FFFFFF", "#769ede"]}
        style={styles.background}
      />
      <ScrollView style={{ marginTop: 70, paddingHorizontal: 35 }}>
        <Text style={styles.header}>Post your project here !!</Text>
        <Text style={styles.iptext}>Job Title:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Text Here"
          type="text"
          value={jobTitle}
          onChangeText={(text) => setJobTitle(text)}
        />
        <Text style={styles.iptext}>Job Tags:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Text Here"
          type="text"
          value={jobTags}
          onChangeText={(text) => setJobTags(text)}
        />
        <Text style={styles.iptext}>Job Category:</Text>
        <TextInput
          style={styles.input}
          placeholder="Select Categories Here"
          type="text"
          value={jobCategory}
          onChangeText={(text) => setJobCategory(text)}
        />
        <Text style={styles.iptext}>Job Description:</Text>
        <TextInput
          multiline
          maxLength={250}
          style={styles.description}
          placeholder="Enter Text Here"
          type="text"
          value={jobDescription}
          onChangeText={(text) => setJobDescription(text)}
        />
        <Text style={styles.iptext}>Job Budget:</Text>
        <TextInput
          style={styles.input}
          placeholder="Select Categories Here"
          type="text"
          value={jobBudget}
          onChangeText={(text) => setJobBudget(text)}
        />
        <View style={{flexDirection:"row",marginTop:64}}>
        <AntDesign style={{paddingVertical:16}} name="upload" size={26} color="black" />
        <TouchableOpacity onPress={_pickDocument}>
            <Text style={styles.upload}>Upload any files here</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=>{}}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#428DFB", "#073270"]}
          style={styles.linearGradientText}
        >
          <Text style={{ color: "#fff", alignSelf: "center", padding: 13 }}>
             Post
          </Text>
        </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CreateProjectComponent;

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
  iptext:{
    marginTop:32,
    color:"grey"
  },
  input:{
    marginTop:2,
    borderBottomWidth:1,
    paddingLeft:8
  },
  description:{
     marginTop:2,
     backgroundColor:"#D9D9D9",
     borderRadius:10,
     borderColor:"#D9D9D9",
     paddingLeft:8,
  },
  upload:{
    marginLeft:26,
    borderRadius:12,
    backgroundColor:"#D9D9D9",
    paddingVertical:16,
    paddingHorizontal:60,
    justifyContent:"center",
    color:"grey" 
  },
  linearGradientText:{
    marginTop: 90,
    width: 300,
    alignSelf: "center",
    borderRadius: 22, 
  }
});
