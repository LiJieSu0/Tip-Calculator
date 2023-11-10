import React,{useState,useContext,createContext} from 'react';
import { StyleSheet, Text, View, TextInput,Pressable, Image} from 'react-native';
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
            {/* people component */}
            <View style={myStyle.peopleSection}>
                <View>
                    <Image style={myStyle.peopleIcon} 
                        source={require('../assets/people-icon.png')} 
                    />
                    <PeopleComponent people={people} setPeople={setPeople}/>
                </View>

                <View>
                    {/* you pay and total tip  */}
                    <Text style={myStyle.payStyle}>
                        You pay: ${ (bill*(1+percentage/100)/people).toFixed(2)}{"\n"}
                    </Text>

                    <Text style={myStyle.tipStyle}>
                        Total Tip= ${(bill*percentage/100).toFixed(2)}
                    </Text>
                </View>
            </View>
            
            
        
            {/* total cost */}
            <View style={globalStyles.inputLabelContainer}>
                <Image style={globalStyles.imageStyle} 
                       source={require('../assets/cost-icon.png')} 
                />
                <TextInput
                    style={globalStyles.input}
                    placeholder='Total Cost'
                    keyboardType='numeric'
                    onChangeText={(val)=>{
                        setBill(val);
                    }}
                />
            </View>

            {/* percentage button */}
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

            {/* tip percentage  */}
            <View style={globalStyles.inputLabelContainer}>
                <Image style={globalStyles.imageStyle} 
                       source={require('../assets/tips-icon.png')} />
                <TextInput
                    style={globalStyles.input}
                    placeholder='10'
                    keyboardType='numeric'
                    onChangeText={(val)=>{
                        setPercentage(val)
                    }}
                />
                {/* % percentageIcon */}
                <Text style={myStyle.percentageIcon}>%</Text>
            </View>
        </View>
);}

const myStyle=StyleSheet.create({
    peopleSection:{
        width: 220,
        height: 100,
        paddingTop: 30,
        flexDirection:'column',
        flexWrap: 'wrap',
    },
    peopleIcon:{
        marginLeft: 50,
        marginBottom: 2,
    },
    payStyle:{
        width: 200,
        height: 50,
        fontSize: 20,
        marginLeft: 25,
        fontWeight: 'bold',
        paddingTop: 20,
    },
    tipStyle: {
        fontSize: 15,
        marginLeft: 25,
        paddingTop: 1,
    },
    percentageIcon:{
        position: 'absolute',
        right: 0,
        alignSelf: 'center',
        paddingRight: 8,
        fontSize: 18
    }
})
