import React,{useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { globalStyles } from '../GlobalStyle';


import PercentageBtn from './PercentageBtn';
import PeopleComponent from './PeopleComponent';
import CostComponent from './CostComponent';
import PercentageBtnComponent from './PercentageBtnComponent';
import PercentageInputComponent from './PercentageInputComponent';
import SummaryComponent from './SummaryComponent';
import ShareBtnComponent from './ShareBtnComponent';

import { Ionicons } from '@expo/vector-icons';

export default function Calculator(){
    const [bill, setBill]=useState(0);
    const [people,setPeople]=useState(1);
    const [percentage,setPercentage]=useState(10);
    const [selectedIdx,setSelectedIdx]=useState(-1);
    const percentageArr=[10,15,18,20];
    const perCost=(bill*(1+percentage/100)/people).toFixed(2);

    return(
        <View style={[myStyle.card, myStyle.elevation]}>
                <View style={myStyle.peopleSection}>
                    <View>
                        <Ionicons name="ios-people-outline" 
                            size={35} 
                            color="black" 
                            style={myStyle.peopleIcon}
                        />
                        {/* people component */}
                        <PeopleComponent people={people} setPeople={setPeople}/>
                    </View>
                    <View>
                        {/* you pay and total tip  */}
                        <Text style={myStyle.payStyle}>
                            You pay: {"\n"}${ perCost}{"\n"}
                        </Text>
                    </View>
                </View>
                
                {/* total cost */}
                <CostComponent 
                    setBill={setBill}
                    bill={bill}
                />

                {/* percentage button */}
                <View style={globalStyles.btnContainer}>
                    <PercentageBtnComponent
                        percentageArr={percentageArr}
                        currPercentage={percentage} 
                        selectedIdx={selectedIdx} 
                        setSelectedIdx={setSelectedIdx}
                        setPercentage={setPercentage}    
                    />

                </View>

                {/* tip percentage  */}
                <PercentageInputComponent
                    setPercentage={setPercentage}
                    percentage={percentage}
                    bill={bill}
                    people={people}
                />
                {/* total tip and splite tip*/}       
                <SummaryComponent 
                    bill={bill}
                    people={people}
                    percentage={percentage}
                />

                {/* Share button */}
                <ShareBtnComponent/>

            </View>
);}

const myStyle=StyleSheet.create({
    peopleIcon:{
        marginLeft: 55,
    },
    peopleSection:{
        width: 200,
        height: 120,
        paddingTop: 25,
        flexDirection:'column',
        flexWrap: 'wrap',
    },
    payStyle:{
        width: 250,
        height: 80,
        fontSize: 28,
        marginLeft: 10,
        fontWeight: 'bold',
        marginTop: 15,
    },
    tipStyle: {
        fontSize: 12,
        color: '#b4b1b1'
    },

    card:{
        width: '100%',
        height: 'auto',
        alignContent: 'center',
        backgroundColor: 'white',
        borderRadius: 30,
        paddingVertical: 45,
        paddingHorizontal: 10,
        marginBottom: 100,
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
