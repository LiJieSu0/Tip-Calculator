import React,{useState,useContext,createContext} from 'react';
import { StyleSheet, Text, View, TextInput,Pressable} from 'react-native';
import { globalStyles } from '../GlobalStyle';

import PercentageBtn from './PercentageBtn';
import PeopleComponent from './PeopleComponent';

export default function Calculator(){

    const [bill, setBill]=useState(0);
    const [people,setPeople]=useState(1);
    const [percentage,setPercentage]=useState(10);
    const [selectedIdx,setSelectedIdx]=useState(-1);
    const percentageArr=[10,15,18,20];

    

    return(
        <View>
                <Text style={globalStyles.font}>You pay: { (bill*(1+percentage/100)/people).toFixed(2)} ${"\n\n"}</Text>

                <PeopleComponent people={people} setPeople={setPeople}/>

                <View style={globalStyles.inputLabelContainer}>
                    <Text>Total Cost: </Text>
                    <TextInput
                        style={globalStyles.input}
                        placeholder='Enter Total Cost'
                        onChangeText={(val)=>{
                            setBill(val);
                        }}
                    />
                </View>
                
                <View style={globalStyles.inputLabelContainer}>
                    <Text>Tip Percentage: </Text>
                        <TextInput
                        style={globalStyles.input}
                        placeholder='10'
                        onChangeText={(val)=>{
                            setPercentage(val)
                        }}
                        />
                    <Text>%</Text>
                </View>

                <View style={globalStyles.btnContainer}>
                    {percentageArr.map((percent,idx)=>{
                            return(
                                    <PercentageBtn
                                        key={idx} 
                                        percentage={percent} 
                                        idx={idx} 
                                        selectedIdx={selectedIdx} 
                                        setSelectedIdx={setSelectedIdx}
                                        setPercentage={setPercentage}    
                                    />
                            )
                    })}
                </View>

                <Text>{"\n\n"}</Text>
                <Text>Total Tip= {(bill*percentage/100).toFixed(2)}</Text>

                
            </View>
);}

