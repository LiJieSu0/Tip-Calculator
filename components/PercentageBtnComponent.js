import { StyleSheet, Text, View} from 'react-native';


import PercentageBtn from "./PercentageBtn"

export default function PercentageBtnComponent(props){
    const {key,idx,percentage,currPercentage,selectedIdx,setSelectedIdx,setPercentage,percentageArr}=props;
    return(
        <View>
            {percentageArr.map((arrPercent,idx)=>{
                return(
                        <PercentageBtn
                            key={idx}
                            idx={idx} 
                            percentage={arrPercent}
                            currPercentage={percentage} 
                            selectedIdx={selectedIdx} 
                            setSelectedIdx={setSelectedIdx}
                            setPercentage={setPercentage}    
                        />
                    )
            })}
        </View>
    )

}