// import { StatusBar } from 'expo-status-bar';
import 'expo-dev-client';
import {Keyboard, View,TouchableWithoutFeedback,Button } from 'react-native';
import React,{useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
  
    const Stack = createNativeStackNavigator();
  return (
    // <myData.Provider value={value}>
    isFirstLaunch!=null&&(
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShow:false}}>
              {isFirstLaunch&&
                <Stack.Screen name="Onboarding" options={{headerShown: false}} component={OnboardingComponent} />
              }
              {!isFirstLaunch&&
                <Stack.Screen name="Home" options={{headerShown: false}} component={Calculator} />
              }
          </Stack.Navigator>
        </NavigationContainer>
    )
      // </myData.Provider>
      );
}
