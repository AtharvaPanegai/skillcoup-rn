import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { AntDesign } from "@expo/vector-icons";
const HomeScreenJobComponent = ({jobTitle,jobBudget,jobDescription,id}) => {
    const [showFull, setShowFull] = useState(false);

  return (
    <View key={id} style={styles.container}>
            <View style={styles.subContainer}>
              <Text style={styles.mainText}>{jobTitle}</Text>
              <AntDesign
                style={styles.icon}
                name="like2"
                size={24}
                color="black"
              />
              <AntDesign
                style={styles.icon}
                name="dislike2"
                size={24}
                color="black"
              />
            </View>
            <Text style={styles.bidText}>Fixed-price - posted 1h ago</Text>
            <View style={styles.subContainer}>
              <View>
                <Text>${jobBudget}</Text>
                <Text style={{ color: "grey" }}>Budget</Text>
              </View>
              <View style={{ marginLeft: 150 }}>
                <Text>Intermediate </Text>
                <Text style={{ color: "grey" }}>Experience level</Text>
              </View>
            </View>
            {showFull ? (
            <Text>
              {jobDescription}
              <Text 
                style={styles.toggleText}
                onPress={() => setShowFull(false)}
              >
                {"Less"}
              </Text>
            </Text>
            ) : (
            <Text>
              {jobDescription.split(".")[0] + "."}
              <Text style={styles.toggleText} onPress={() => setShowFull(true)}>
                {"More"}
              </Text>
            </Text>
            )}
            
            <View style={styles.subContainer}>
              {/* {jobTagsArray.map((item)=>{

           <Text style={styles.skillText}> {item.tagTitle} </Text>
            })} */}
            </View>
          </View>
  )
}

export default HomeScreenJobComponent

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignSelf: "center",
        borderWidth: 0.5,
        marginHorizontal: 10,
      },
      subContainer: {
        flexDirection: "row",
        paddingVertical: 20,
        marginHorizontal: 10,
      },
      mainText: {
        fontWeight: "bold",
        marginRight: 15,
        fontSize: 14,
      },
      icon: {
        paddingHorizontal: 7,
      },
      bidText: {
        padding: 10,
        color: "grey",
      },
      skillText: {
        borderColor: "grey",
        borderWidth: 0.5,
        backgroundColor: "grey",
        color: "white",
        borderRadius: 10,
        padding: 5,
        marginRight: 10,
      },
      toggleText:{
        color:"#3742fa",
       
      }
})