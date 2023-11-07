import React,{useContext, useState} from 'react';
import { StyleSheet, Text, View, TextInput,Pressable} from 'react-native';

export default function CalculatorBtn(props){
    const {percent,v}=props;
    return(
            <View>
                <Pressable 
                    style={({pressed}) => [
                        {
                        backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'pink',
                        },
                        styles.wrapperCustom,
                    ]}
                >
                {({pressed}) => (
                <Text>{pressed ? "pressed" : percent +'%'}</Text>
                )}       
                </Pressable>
            </View>
);}

const styles = StyleSheet.create({
    font:{
        fontSize: 16,
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6,
    },

});