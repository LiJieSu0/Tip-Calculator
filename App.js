// import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import Calculator from './components/Calculator';

import { myData } from './GlobalContext';
export default function App() {

  const [value,setValue]=useState(1);
  return (
    <myData.Provider value={value}>
      <View style={styles.container}>
        <Calculator/>
      </View>
    </myData.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font:{
    fontSize: 16,
  }
});
