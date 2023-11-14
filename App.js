// import { StatusBar } from 'expo-status-bar';
import {Keyboard, View,TouchableWithoutFeedback } from 'react-native';
import React,{useState} from 'react';
import Calculator from './components/Calculator';
import { myData } from './GlobalContext';
import { globalStyles } from './GlobalStyle';
export default function App() {
  
  const [value,setValue]=useState(1);

  return (
    // <myData.Provider value={value}>
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <View style={globalStyles.container}>
        <Calculator />
      </View>
    </TouchableWithoutFeedback>
    // </myData.Provider>
  );
}

