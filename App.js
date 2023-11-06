// import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

export default function App() {
  const [total, setTotal]=useState(0);
  const [splitPeople,setSplitPeople]=useState(1);
  const [tipPercent,setTipPercent]=useState(0);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.font}>You pay: { (total*(1+tipPercent/100)/splitPeople).toFixed(2)}</Text>
        <Text> </Text>
        <Text>People(amount): </Text>
        <TextInput
          placeholder='Enter number...'
          onChangeText={(val)=>{
            setSplitPeople(val);
          }}
          />
        <Text> </Text>
        {/* <Text>Splited by {splitPeople}, Everyone pays {((total*(tipPercent/100))/splitPeople).toFixed(2)}$ tip</Text> */}
        
        {/* <Text></Text> */}
        <text>Total Cost:</text>
        <TextInput
            placeholder='Enter Total Cost'
            onChangeText={(val)=>{
              setTotal(val);
            }}
          />
        
        <Text> 
          <TextInput
            placeholder='Percent'
            onChangeText={(val)=>setTipPercent(val)}
          /><text>%</text>
          <br></br>
          <Text>Total Tip= {(total*tipPercent/100).toFixed(2)}</Text>
        </Text>
        {/* <Text>Everyone pays {((total*(tipPercent/100))/splitPeople).toFixed(2)}$ tip</Text> */}
        <Text> </Text>
          
          
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
  font:{
    fontSize: 16,
  }
});
