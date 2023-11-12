// import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import React,{useState} from 'react';
import Calculator from './components/Calculator';
import { myData } from './GlobalContext';
import { globalStyles } from './GlobalStyle';
export default function App() {
  
  const [value,setValue]=useState(1);


  return (
    <myData.Provider value={value}>
      <View style={globalStyles.container}>
        <Calculator />
      </View>
    </myData.Provider>
  );
}

