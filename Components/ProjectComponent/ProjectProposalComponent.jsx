import { StyleSheet, Text, View ,ScrollView,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import Skills from "../../Test/skills.json"
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import proposal from "../../Test/proposal.json"
import { useNavigation } from '@react-navigation/native';

const ProjectProposalComponent = () => {
   const navigation=useNavigation() 
  return (
      <View style={styles.container}>
        <View
          style={{
            position: "relative",
            flexDirection: "row",
            paddingHorizontal: 20,
          }}>
          <Feather
            name='arrow-left'
            size={24}
            color='black'
            onPress={() => {
              navigation.navigate("ClientProfile");
            }}
          />
          <Text style={{ fontSize: 20, marginLeft: 10 }}>Project Details</Text>
        </View>

        <ScrollView style={{ marginTop: 60, borderRadius: 30}}>
          <LinearGradient
            colors={["#D6E6FF", "#F8FBFF", "#D6E6FF"]}
            style={styles.background}
          />

          <Text style={styles.headerText}>jobTitle</Text>

          <View style={{ flexDirection: "row-reverse", paddingLeft: 20 }}>
            <Image
              style={{ height: 30, width: 30, borderRadius: 50 }}
              source={require("../AuthComponents/clientlogo.png")}
            />
            <Text
              style={{
                color: "#818589",
                alignSelf: "center",
                marginRight: 10,
              }}>
              Posted by
            </Text>
          </View>
          <View style={{ marginVertical: 20 }}>
            <Text
              style={{
                alignSelf: "center",
                paddingTop: 32,
                paddingHorizontal: 32,
                marginBottom: 70,
                textAlign: "justify",
                letterSpacing: 1,
              }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, deleniti. Est numquam blanditiis quam fugiat ullam aliquam eum expedita enim vitae dolores tempore similique illo rerum sit incidunt, molestiae reiciendis.
              Sapiente omnis eum iusto accusamus iure sit, quisquam voluptates illo tempore tempora nulla quasi numquam ex inventore eius provident debitis unde totam, dolore voluptatem enim temporibus suscipit dolores! Repellat, labore?
              Facere blanditiis, porro fugit quibusdam animi magni fugiat sint cum molestias! Commodi voluptate sunt quia quae tempore nesciunt modi, omnis quasi fugit, id animi repellendus delectus quas, aliquid alias ab.
            </Text>
          </View>

          <Text
            style={{ paddingHorizontal: 32, fontSize: 14, fontWeight: "800" }}>
            Skills Required
          </Text>
          <ScrollView horizontal={true} style={{ marginHorizontal: 32 }}>
            {Skills.map((item) => {
              return (
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={["#428DFB", "#073270"]}
                  style={styles.linearGradientbutton}>
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
            }}>
            <View>
              <Text style={{ fontWeight: "bold" }}>Budget</Text>
              <Text style={{ color: "#818589" }}>jobBudget</Text>
            </View>
            <View style={{ marginLeft: 230 }}>
              <Text style={{ fontWeight: "bold" }}>Timeline</Text>
              <Text style={{ color: "#818589" }}>3 months</Text>
            </View>
          </View>
          {proposal.map((item)=>{
             return(
                   <TouchableOpacity onPress={() => {
                    navigation.navigate("ProposalDetails", {
                      username: item.username,
                      month: item.month,
                      budget: item.budget,
                      Id: item.id,
                      day:item.day,
                      expertise:item.expertise,
                    });
                  }}>
                   <View key={item.id} style={styles.proposalcontainer}>
                   <Text style={{fontSize:16,paddingTop:10,paddingLeft:10,fontWeight:"bold"}}>Freelancer@{item.username}</Text>
                   <Text style={{paddingLeft:10,color:"grey",paddingTop:2}}>Duration : {item.month} months {item.day} days</Text>
       
                       <Text style={{paddingLeft:10,paddingTop:2,color:"grey"}}>Expertise: {item.expertise}</Text>
                    <Text style={{paddingLeft:10,paddingTop:2, fontWeight:"bold",paddingBottom:10}}>Quotation:{item.budget}</Text>
                 </View>
                 </TouchableOpacity>
             );
          })}  
        </ScrollView>
      </View>
  );
};

export default ProjectProposalComponent;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
  },
  background: {
    flex:1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
   height:1500,
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
  proposalcontainer:{
    marginHorizontal:32,
    marginVertical:13,
    borderRadius:10,
    backgroundColor:"#D9D9D9",
    
    
  }
});
