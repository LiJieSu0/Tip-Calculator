import React,{useState} from 'react';
import { Text, View} from 'react-native';
import { globalStyles } from '../GlobalStyle';


import PeopleComponent from './PeopleComponent';
import CostComponent from './CostComponent';
import PercentageBtnComponent from './PercentageBtnComponent';
import PercentageInputComponent from './PercentageInputComponent';
import ShareBtnComponent from './ShareBtnComponent';


export default function Calculator(){
    const [bill, setBill]=useState(0);
    const [people,setPeople]=useState(1);
    const [percentage,setPercentage]=useState(10);
    const [selectedIdx,setSelectedIdx]=useState(-1);
    const percentageArr=[10,15,18,20];
    const perCost=(bill*(1+percentage/100)/people).toFixed(2);

    return(
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
            </View>
        </View>
);}

