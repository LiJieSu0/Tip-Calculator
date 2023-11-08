import React,{useState,useContext,createContext} from 'react';
import { StyleSheet, Text, View, TextInput,Pressable} from 'react-native';
import CalculatorBtn from './CalculatorBtn';

import { myData } from '../GlobalContext';
import { GlobalStyle } from '../GlobalStyle';

export default function Calculator(){
    

    const [total, setTotal]=useState(0);
    const [splitPeople,setSplitPeople]=useState(1);
    const [tipPercent,setTipPercent]=useState(0);
    const preDefinedPercentage=[15,18,20];
    // const tmp=useContext(myData);
    return(


        <View>
                <Text style={styles.font}>You pay: { (total*(1+tipPercent/100)/splitPeople).toFixed(2)} ${"\n\n"}</Text>

                <View style={styles.inputLabelContainer}>
                    <Text>People(Number): </Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Enter number...'
                        onChangeText={(val)=>{
                        setSplitPeople(val);
                        }}
                        />
                </View>

                <View style={styles.inputLabelContainer}>
                    <Text>Total Cost: </Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Enter Total Cost'
                        onChangeText={(val)=>{
                            setTotal(val);
                        }}
                    />
                </View>
                
                <View style={styles.inputLabelContainer}>
                    <Text>Tip Percentage: </Text>
                        <TextInput
                        style={styles.input}
                        placeholder='Tip Percentage'
                        onChangeText={(val)=>setTipPercent(val)}
                        />
                    <Text>%</Text>
                </View>

                <View style={styles.btnContainer}>
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

const styles = StyleSheet.create({
    font:{
        fontSize: 16,
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6,
    },
    input:{
        borderWidth:1,
        borderColor:'black',
        marginTop:5,
    },
    colorStyle:{
        color:'green'
    },
    inputLabelContainer:{
        flex:1,
        backgroundColor:'yellow',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:10,
    },
    btnContainer:{
        flex:1,
        backgroundColor:'green',
        flexDirection:'row',
        justifyContent:'space-between',
    }
});
