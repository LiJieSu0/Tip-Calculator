import React from 'react';
import { StyleSheet, Text, View,   TouchableOpacity} from 'react-native';
import { globalStyles } from '../GlobalStyle';

export default function PercentageBtn(props){
    const {percentage,idx,selectedIdx,setSelectedIdx,setPercentage,currPercentage}=props;
    return(
            <View>
                <TouchableOpacity
                    style={[styles.button,currPercentage==percentage?styles.selected:'']}
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
                    <Text style={styles.percentageStyle}>{percentage}%</Text>
                </TouchableOpacity>
            </View>
);}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    button: {
        width: 65,
        height: 50,
        padding: 4,
        backgroundColor: '#fff',
        borderColor:'black',
        borderWidth:1,
        borderRadius:20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
    },
    selected:{
        backgroundColor: '#fdc57d',
    },
    percentageStyle:{
        fontSize: 18,
    }
});