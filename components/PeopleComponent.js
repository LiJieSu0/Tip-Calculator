import React,{useState,useContext,createContext} from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, Image} from 'react-native';
import { globalStyles } from '../GlobalStyle';

export default function PeopleComponent(props){
    const {setPeople,people}=props;
    return(
        <View style={myStyle.peopleInputLabelContainer}>
            <TouchableOpacity style={myStyle.btn} onPress={()=>{
                if(people==1)
                    return;
                setPeople(people-1);
            }}>

            <Text style={myStyle.btnTxt}>-</Text>
            </TouchableOpacity>
            
            <TextInput
                style={myStyle.peopeinput}
                placeholder='Enter number...'
                keyboardType='numeric'
                onChangeText={(val)=>{
                    setPeople(val);
                }}
                value={people.toString()}
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
    peopleInputLabelContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
    peopeinput:{
        width: 100,
        height: 30,
        fontSize:10,
        marginBottom: 5,
        borderWidth:1,
        borderColor:'black',
        borderRadius: 20,
        paddingLeft: 10,
    },
    btnTxt:{
        fontSize:20,
        padding:5,
    },
})