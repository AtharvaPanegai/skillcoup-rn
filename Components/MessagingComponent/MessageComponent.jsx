import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MessageComponent = ({messageText,isSendMessage}) => {
  return (
    <View style = {[styles.container,{backgroundColor : isSendMessage ? "#dadada" : "#7ADEFF",alignSelf : isSendMessage? "flex-end" : "flex-start"}]}>
      <Text>{messageText}</Text>
    </View>
  )
}

export default MessageComponent

const styles = StyleSheet.create({
    container:{
        // backgroundColor:"#dadada",
        paddingVertical:15,
        paddingHorizontal : 10,
        borderRadius : 20,
        marginVertical:7,
    }
})