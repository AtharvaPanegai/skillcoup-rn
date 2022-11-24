import React ,{createContext, useState} from 'react'
import axios from 'axios';
import { BASE_URL } from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext=createContext();


export const AuthProvider=({children})=>{
   const [isLoading,setIsLoading]=useState(false);
   const [userInfo,setUserInfo]=useState({});

   const login =(email,password)=>{
    setIsLoading(true);

    axios.post(`${BASE_URL}/signin`,{
        email,password   
    }).then(res=>{
       let userInfo=res.data;
       console.log(userInfo)
       setUserInfo(userInfo)
    }).catch(e=>{
        console.log(`login error ${e}`)
        setIsLoading(false)
    })
   };

    return (
        <AuthContext.Provider value={{
            isLoading,
            userInfo,
            login
        }}>{children}</AuthContext.Provider>
    );
};