import { StyleSheet, Text, View} from 'react-native';
import PercentageBtn from "./PercentageBtn";

export default function PercentageBtnComponent(props){
    const {key,idx,percentage,currPercentage,selectedIdx,setSelectedIdx,setPercentage,percentageArr}=props;
    return(
        <View style={myStyle.percentageLayout}>
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

const myStyle = StyleSheet.create({
    percentageLayout:{
        flexDirection:'row',
        columnGap: 15,
    }
})
    
