import { StyleSheet, Text, View ,TextInput,Image} from 'react-native';
import React, { useState } from 'react'
import { Button, Icon, Input ,SocialIcon} from '@rneui/base';
import { TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';


const SigninComponent = ({navigation}) => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome back!</Text>
      <View style={styles.loginContainer}>
         <Text style={styles.loginText}>Email</Text>
           <TextInput style={styles.entryBox} placeholder=''
             type='email'
             value={email}
             onChangeText={(text) => setEmail(text)}
         />
       
        <Text style={styles.loginText}>Password</Text>
           <TextInput style={styles.entryBox} placeholder=''
             type='password'
             value={password}
             onChangeText={(text) => setPassword(text)}
         />
         
         <Text style={{left: 250}}
        >Forgot Password?</Text>
        <Button
              title="LOG IN"
              buttonStyle={{
                backgroundColor: 'black',
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 15,
              }}
              containerStyle={{
                width: 350,
                
                marginVertical: 10,
              }}
              titleStyle={{ fontWeight: 'bold' }}
            />
            <Text style={{color:"grey",textAlign:'center'}}>- - - - - - - - OR- - - - - - - - </Text>
            <Text style={{marginTop:20,fontSize:16}}>Join Skillcoup with your favourite social media account:</Text>
            <View style={styles.loginIcon}>
        <TouchableOpacity>
        <Image style={styles.socialIcon}source={require('../AuthComponents/google.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={styles.socialIcon}source={require('../AuthComponents/apple.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={styles.socialIcon}source={require('../AuthComponents/linkedin.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={styles.socialIcon}source={require('../AuthComponents/download.png')} />
        </TouchableOpacity>  
      </View>
      
      </View>
      
      
       
      
      
        <View style={styles.registerContainer}>
            <Text style={{marginRight:7,color:'grey'}}>Don't have an account ?</Text>
            <Text style={{fontWeight:'bold'}} onPress={() => navigation.navigate('Register')}>Register Now</Text>
        </View>
        <StatusBar style="auto" />
    </View>
  )
}

export default SigninComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        
    
      },
      text: {
        fontSize: 30,
        marginTop: 100,
        marginLeft: 30,
        fontWeight: '800'
      },
      loginContainer:{
        marginTop:40,
        padding:20
      },
      entryBox:{
       borderRadius:10,
        borderColor:"black",
        padding:10,
        borderWidth:1,
        marginTop:10,
        alignItems:'stretch',
        width:350
      },
      loginText:{
        fontSize:20,
        paddingTop:10
      },
      loginIcon:{
        flexDirection:'row',
        marginTop:20,
        marginHorizontal:5
      },
      socialIcon:{
         height:50,
         width:50,
         margin:20,
         
      },
      registerContainer:{
        flexDirection:'row',
        alignSelf: 'center',
        padding:10,
        justifyContent:'space-between',
        alignItems:'center'    
      } 

      
})