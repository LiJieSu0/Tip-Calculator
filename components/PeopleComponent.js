import React,{useState,useContext,createContext} from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity} from 'react-native';
import { globalStyles } from '../GlobalStyle';

export default function PeopleComponent(props){
    const {setPeople,people}=props;

    return(
        <View style={globalStyles.inputLabelContainer}>

            <TouchableOpacity style={myStyle.btn} onPress={()=>{
                if(people==1)
                    return;
                setPeople(people-1);
            }}>
                <Text style={myStyle.btnTxt}>-</Text>
            </TouchableOpacity>
            
                <TextInput
                    style={globalStyles.input}
                    placeholder='Enter number...'
                    onChangeText={(val)=>{
                    setPeople(val);
                    }}
                    value={people}

                />
            <TouchableOpacity style={myStyle.btn} onPress={()=>{
                setPeople(people+1);
            }}>
                <Text style={myStyle.btnTxt}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const myStyle=StyleSheet.create({
    btn:{
        borderWidth:1,
        borderColor:'black',
        borderRadius:20
    },
    btnTxt:{
        fontSize:20,
        padding:5,
        fontWeight:'bold'
    }
})