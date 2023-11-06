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
        <Text>Everyone pays { (total*(1+tipPercent/100)/splitPeople).toFixed(2)}</Text>
        <Text> </Text>
        <Text>Split people: </Text>
        <TextInput
          placeholder='Enter number...'
          onChangeText={(val)=>{
            setSplitPeople(val);
          }}
          />
        <Text> </Text>
          
          <Text>Splited by {splitPeople}, Everyone pays {((total*(tipPercent/100))/splitPeople).toFixed(2)}$ tip</Text>
          <Text>Tip  
            <TextInput
              placeholder='   Percent'
              onChangeText={(val)=>setTipPercent(val)}
            /> 
          %  Total Tip= {total*tipPercent/100}</Text>
          <Text> </Text>
          <Text>Total Cost</Text>
          <TextInput
            placeholder='Enter Total Cost'
            onChangeText={(val)=>{
              setTotal(val);
            }}
          />
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
