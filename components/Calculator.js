import React,{useState,useContext,createContext} from 'react';
import { StyleSheet, Text, View, TextInput,Pressable, Image} from 'react-native';
import { globalStyles } from '../GlobalStyle';
import PercentageBtn from './PercentageBtn';
import PeopleComponent from './PeopleComponent';

import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function Calculator(){
    const [bill, setBill]=useState(0);
    const [people,setPeople]=useState(1);
    const [percentage,setPercentage]=useState(10);
    const [selectedIdx,setSelectedIdx]=useState(-1);
    const percentageArr=[10,15,18,20];

    return(
        <View>
            <View style={[myStyle.card, myStyle.elevation]}>
                {/* people component */}
                <View style={myStyle.peopleSection}>
                    <View>
                        <Ionicons name="ios-people-outline" size={24} color="black" 
                                  style={myStyle.peopleIcon}/>
                        <PeopleComponent people={people} setPeople={setPeople}/>
                    </View>

                    <View>
                        {/* you pay and total tip  */}
                        <Text style={myStyle.payStyle}>
                            You pay: {"\n"}${(bill*(1+percentage/100)/people).toFixed(2)}{"\n"}
                        </Text>
                    </View>
                </View>
                
                {/* total cost */}
                <View style={globalStyles.inputLabelContainer}>
                    <MaterialIcons name="attach-money" size={24} color="black" 
                                   style={globalStyles.imageStyle}/>
                    <TextInput
                        style={globalStyles.input}
                        placeholder='Total Cost'
                        keyboardType='numeric'
                        onChangeText={(val)=>{
                            if(val>99999999){
                                Alert.alert('Oops!','The number is too large, please enter the bill number again.',[
                                    {text:'Understood'}
                                ])
                                setBill(0);
                                return;
                            }
                            const match = val.match(/^\d+(\.\d{0,2})?/);
                            const formattedValue = match ? match[0] : '';
                            setBill(formattedValue);
                        }}
                        value={bill==0?'':bill.toString()}
                    />
                </View>

                {/* percentage button */}
                <View style={globalStyles.btnContainer}>
                    {percentageArr.map((percent,idx)=>{
                            return(
                                    <PercentageBtn
                                        key={idx}
                                        idx={idx} 
                                        percentage={percent}
                                        currPercentage={percentage} 
                                        selectedIdx={selectedIdx} 
                                        setSelectedIdx={setSelectedIdx}
                                        setPercentage={setPercentage}    
                                    />
                                )
                    })}
                </View>

                {/* tip percentage  */}
                <View style={globalStyles.inputLabelContainer}>
                    <MaterialCommunityIcons name="lightbulb-outline" size={24} color="black" 
                                            style={globalStyles.imageStyle} />       
                    {/* % percentage input */}
                    <TextInput
                        style={globalStyles.input}
                        placeholder='Custom tip'
                        keyboardType='numeric'
                        onChangeText={(val)=>{
                            if(val>2000){
                                Alert.alert('Oops!','The number is too large, please enter the percentage number again.',[
                                    {text:'Understood'}
                                ])
                                setPercentage(10);
                                return;
                            }
                            const match = val.match(/^\d+(\.\d{0,2})?/);
                            const formattedValue = match ? match[0] : '';
                            setPercentage(formattedValue);
                        }}
                        value={percentage.toString()}
                    />
                    {/* % percentage icon */}
                    <Text style={myStyle.percentageIcon}>%</Text>
                </View>

                {/* total tip and splite tip*/}       
                <View>
                    <Text style={myStyle.tipStyle}>
                        Total Tip: ${(bill*percentage/100).toFixed(2)}{'\n'}
                        Splite Tip: ${(bill*percentage/100/people).toFixed(2)}
                    </Text>
                </View>
            </View>
        </View>
);}

const myStyle=StyleSheet.create({
    peopleSection:{
        width: 200,
        height: 100,
        paddingTop: 25,
        flexDirection:'column',
        flexWrap: 'wrap',
    },
    peopleIcon:{
        marginLeft: 60,
        marginBottom: 2,
    },
    payStyle:{
        width: 250,
        height: 80,
        fontSize: 25,
        marginLeft: 20,
        fontWeight: 'bold',
    },
    tipStyle: {
        fontSize: 10,
        color: '#b4b1b1'
    },
    percentageIcon:{
        position: 'absolute',
        right: 0,
        alignSelf: 'center',
        paddingRight: 8,
        fontSize: 20
    },
    card:{
        width: 400,
        height: 400,
        alignContent: 'center',
        backgroundColor: 'white',
        borderRadius: 30,
        paddingVertical: 45,
        paddingHorizontal: 28,
        // shadowColor: '#52006A',
        shadowOffset:{
            width:6,
            height: 6,
        },
        shadowOpacity: 0.6,
        shadowRadius: 4,
    },
    elevation: {
        elevation: 20,
        shadowColor: '#52006A',
    },
})
