import React,{useContext, useState} from 'react';
import { StyleSheet, Text, View, TextInput,Pressable} from 'react-native';
import { globalStyles } from '../GlobalStyle';

export default function CalculatorBtn(props){
    const {percent,v}=props;
    return(
            <View>
                <Pressable 
                    style={({pressed}) => [
                        {
                        backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'pink',
                        },
                        globalStyles.wrapperCustom,
                    ]}
                >
                {({pressed}) => (
                <Text>{pressed ? "pressed" : percent +'%'}</Text>
                )}       
                </Pressable>
            </View>
);}

