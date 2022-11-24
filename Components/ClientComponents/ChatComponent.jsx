import { StyleSheet, Text, View,Image, ScrollView, TextInput,KeyboardAvoidingView} from 'react-native'
import React, { useState } from 'react'


const ChatComponent = () => {
    const [chat,setChat]=useState("");
  return (

    <KeyboardAvoidingView style={styles.container} behavior="padding">  
      <View style={{flexDirection:"row",marginTop:71,marginHorizontal:35}}>
        <Image  style={styles.image} source={require("../AuthComponents/viit.png")}/>
        <Image style={styles.image} source={require("../AuthComponents/clientlogo.png")}/>
        <View style={{marginLeft:96,justifyContent:"center",alignSelf:"flex-end"}}>
            <Text style={styles.userText}>Martina Wolna</Text>
            <Text style={styles.userText}>Maciej Kowalski</Text>
        </View>
      </View>
       <View style={{marginTop:35,height:"70%",marginHorizontal:35}}>
       <ScrollView >
         <Text style={{textAlign:"justify",fontSize:20,color:"#fff"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum rem quidem eveniet reprehenderit sit minus repellat qui possimus nesciunt? Debitis minima culpa provident aut explicabo, consectetur saepe excepturi blanditiis et!
         Autem harum similique maxime temporibus in architecto rerum pariatur sunt reiciendis, repellendus dolorem quis, aut impedit quaerat praesentium necessitatibus? Veniam iste ipsa quisquam fugit enim quam, eligendi tenetur necessitatibus velit.
         Deserunt quae incidunt maiores dignissimos laborum nihil dolores iusto ea aut error, ducimus nam architecto, eum sunt omnis libero officiis, laboriosam exercitationem. Corporis optio dolores error culpa, eveniet nisi numquam!
         In omnis dignissimos iusto ratione culpa sequi ducimus atque fugiat inventore nemo exercitationem hic enim earum optio eum fuga error, vitae magni! Veniam explicabo voluptas sapiente omnis eius iusto. Illum!
         Voluptates inventore omnis voluptate illum eius asperiores laboriosam reiciendis cum vel. Cupiditate vero beatae, animi vel iure incidunt ut consectetur voluptates dolore accusantium fugiat minus modi, fuga deleniti. Aut, unde.</Text>
      </ScrollView>
       </View>
       <View style={{flexDirection:"row",marginLeft:35,paddingTop:20}}>
        <TextInput
         style={styles.chatBox}
         placeholder="Write"
         placeholderTextColor={"#fff"}
         type="chat"
         value={chat}
         onChangeText={(text) => setChat(text)}
        />
       </View>
    </KeyboardAvoidingView>
     
  )
}

export default ChatComponent

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#292F3F",
        
    },
    image:{
        height:45,width:45,borderRadius:50,marginLeft:10  
    },
    userText:{
        color:"#fff",
        fontSize:14,
        fontWeight:"400",
        paddingBottom:7
    },
    chatBox:{
        backgroundColor:"#272A35",
        width:300,
        paddingVertical:12,paddingLeft:15,
        borderRadius:10,
        color:"#fff"
    }
})