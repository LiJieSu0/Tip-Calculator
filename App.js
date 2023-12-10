// import { StatusBar } from 'expo-status-bar';
import 'expo-dev-client';
import {Keyboard, View,TouchableWithoutFeedback,Button } from 'react-native';
import React,{useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


import Calculator from './components/Calculator';
import OnboardingComponent from './components/OnboardingComponent';
import { myData } from './GlobalContext';
import { globalStyles } from './GlobalStyle';
export default function App() {
    const [isFirstLaunch,setIsFirstLaunch]=useState(null);
    const [value,setValue]=useState(1);

    const checkOnboarding=async()=>{
      try{
        const value=await AsyncStorage.getItem("firstLaunch");
        if(value===null){
          setIsFirstLaunch(true);
          AsyncStorage.setItem("firstLaunch","false");
        }
      }
      catch(e){
        console.log(e);
      }
      finally{
        setIsFirstLaunch(false);
      }
    }

    useEffect(()=>{
      checkOnboarding();
      console.log(isFirstLaunch);
    },[]);
  

  return (
    // <myData.Provider value={value}>
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <View style={globalStyles.container}>
        <Button title="clear setting" onPress={()=>{AsyncStorage.setItem("firstLaunch","true");
          setIsFirstLaunch(true);
        }}/>
        {isFirstLaunch&&
          <OnboardingComponent/>
        }
        {!isFirstLaunch&&
          <Calculator/>
        }
      </View>
    </TouchableWithoutFeedback>
    // </myData.Provider>
  );
}

