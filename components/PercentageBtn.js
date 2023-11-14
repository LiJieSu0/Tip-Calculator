import React,{useContext, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity,Alert} from 'react-native';
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
        paddingHorizontal: 10,
    },
    button: {
        width: 60,
        height: 35,
        padding: 5,
        backgroundColor: '#fff',
        borderColor:'black',
        borderWidth:1,
        borderRadius:20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selected:{
        backgroundColor: '#fdc57d',
    },
    percentageStyle:{
        fontSize: 16,
    }
});