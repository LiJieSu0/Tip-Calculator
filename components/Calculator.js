import React,{useState,useContext,createContext} from 'react';
import { StyleSheet, Text, View, TextInput,Pressable} from 'react-native';
import CalculatorBtn from './CalculatorBtn';
import { myData } from '../GlobalContext';
import { globalStyles } from '../GlobalStyle';

export default function Calculator(){

    const [total, setTotal]=useState(0);
    const [splitPeople,setSplitPeople]=useState(1);
    const [tipPercent,setTipPercent]=useState(0);
    const preDefinedPercentage=[15,18,20];
    // const tmp=useContext(myData);

    return(
        <View>
                <Text style={globalStyles.font}>You pay: { (total*(1+tipPercent/100)/splitPeople).toFixed(2)} ${"\n\n"}</Text>
                <View style={globalStyles.inputLabelContainer}>
                    <Text>People(Number): </Text>
                    <TextInput
                        style={globalStyles.input}
                        placeholder='Enter number...'
                        onChangeText={(val)=>{
                        setSplitPeople(val);
                        }}
                        />
                </View>

                <View style={globalStyles.inputLabelContainer}>
                    <Text>Total Cost: </Text>
                    <TextInput
                        style={globalStyles.input}
                        placeholder='Enter Total Cost'
                        onChangeText={(val)=>{
                            setTotal(val);
                        }}
                    />
                </View>
                
                <View style={globalStyles.inputLabelContainer}>
                    <Text>Tip Percentage: </Text>
                        <TextInput
                        style={globalStyles.input}
                        placeholder='Tip Percentage'
                        onChangeText={(val)=>setTipPercent(val)}
                        />
                    <Text>%</Text>
                </View>

                <View style={globalStyles.btnContainer}>
                {
                    preDefinedPercentage.map((percentage)=>{
                        return(
                            <View key={percentage}>
                                <CalculatorBtn percent={percentage}/>
                            </View>
                        )
                    })
                }
                </View>

                <Text>{"\n\n"}</Text>
                <Text>Total Tip= {(total*tipPercent/100).toFixed(2)}</Text>

                
            </View>
);}

