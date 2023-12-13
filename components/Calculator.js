import React,{useState} from 'react';
import {View,TouchableWithoutFeedback,Keyboard,Button} from 'react-native';
import { globalStyles } from '../GlobalStyle';


import PeopleComponent from './PeopleComponent';
import CostComponent from './CostComponent';
import PercentageBtnComponent from './PercentageBtnComponent';
import PercentageInputComponent from './PercentageInputComponent';
import ShareBtnComponent from './ShareBtnComponent';
import AdComponent from './AdComponent';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Calculator(){
    const [bill, setBill]=useState(0);
    const [people,setPeople]=useState(1);
    const [percentage,setPercentage]=useState(10);
    const [selectedIdx,setSelectedIdx]=useState(-1);
    const percentageArr=[10,15,18,20];
    const perCost=(bill*(1+percentage/100)/people).toFixed(2);

    const clearBtn=async()=>{
        try{
            await AsyncStorage.setItem("@isFirstLaunch","true");
            console.log("clear");
        }catch(e){
            console.log(e);
        }
    }
    return(
      <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>

        <View style={[globalStyles.card, globalStyles.elevation]}>
            <View style={globalStyles.main}>
                    {/* add people component/You Pay info */}
                    <PeopleComponent
                        people={people} 
                        setPeople={setPeople}
                        perCost={perCost}
                    />
    
                {/* total cost component*/}
                <CostComponent 
                    setBill={setBill}
                    bill={bill}
                />

                {/* percentage button component*/}
                <PercentageBtnComponent
                    percentageArr={percentageArr}
                    currPercentage={percentage} 
                    selectedIdx={selectedIdx} 
                    setSelectedIdx={setSelectedIdx}
                    setPercentage={setPercentage}
                />
               
                {/* tip percentage component*/}
                <PercentageInputComponent
                    setPercentage={setPercentage}
                    percentage={percentage}
                    bill={bill}
                    people={people}
                />
                {/* Share button component*/}
                <ShareBtnComponent />

                 {/* Google Ad component */}
                <AdComponent /> 
                
                {/* Button for clear isFirstLaunch value, only for testing */}
                <Button title="clear" onPress={clearBtn}/> 

            </View>
        </View>
        </TouchableWithoutFeedback>
    
);}

