import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [total, setTotal]=useState(0);
  const [splitPeople,setSplitPeople]=useState(1);
  const [tipPercent,setTipPercent]=useState(0);
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder='Enter Total Cost'
          onChangeText={(val)=>{
            setTotal(val);
          }}
        />
        <Text>Tip  
          <TextInput
            placeholder='Enter percent you want to pay'
            onChangeText={(val)=>setTipPercent(val)}
          /> % 
        </Text>
        <Text>Tip= {total*tipPercent/100}</Text>
        <TextInput
          placeholder='Enter Split People'
          onChangeText={(val)=>{
            setSplitPeople(val);
          }}
        />
        <Text>Splited by {splitPeople}, Everyone pays {(total*(tipPercent/100))/splitPeople} tip</Text>
        <Text>Everyone pays {total*(1+tipPercent/100)/splitPeople}</Text>
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
