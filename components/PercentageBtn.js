import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function PercentageBtn(props){
    const {percentage,idx,selectedIdx,setSelectedIdx,setPercentage,currPercentage}=props;
    console.log('curr '+currPercentage);
    return(
            <View style={myStyle.percentageBtnSection}>
                <TouchableOpacity
                    style={[myStyle.button,currPercentage==percentage?myStyle.selected:'']}
                    onPress={()=>{
                        if(selectedIdx==idx){
                            setSelectedIdx(-1);
                            setPercentage(0);
                            return;
                        }
                        setSelectedIdx(idx);
                        setPercentage(percentage);
                    }}
                >
                    <Text style={myStyle.percentageStyle}>{percentage}%</Text>
                </TouchableOpacity>
            </View>
);}

const myStyle = StyleSheet.create({
    percentageBtnSection: {
        marginTop: 20,
        marginBottom: 5,
    },
    button: {
        width: 65,
        height: 40,
        borderWidth:1,
        borderRadius:20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selected:{
        backgroundColor: '#fdc57d',
    },
    percentageStyle:{
        fontSize: 18,
    }
});