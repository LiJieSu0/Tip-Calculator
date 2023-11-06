import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [total, setTotal]=useState(0);
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder='Enter Total Cost'
          onChangeText={(val)=>{
            setTotal(val);
          }}
        />
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
