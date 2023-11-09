import React,{useContext, useState} from 'react';
import { StyleSheet, Text, View, TextInput,Pressable, TouchableOpacity} from 'react-native';
import { globalStyles } from '../GlobalStyle';

export default function PercentageBtn(props){
    const {percentage,idx,selectedIdx,setSelectedIdx,setPercentage}=props;
    return(
            <View>
                {/* <Pressable 
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
                </Pressable> */}

                <TouchableOpacity
                    style={[styles.button,selectedIdx==idx?styles.selected:'']}
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
                    <Text>{percentage} %</Text>
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
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 5,
      borderColor:'black',
      borderWidth:1,
      borderRadius:6,
    },
    selected:{
        backgroundColor:'pink',
    }

  });